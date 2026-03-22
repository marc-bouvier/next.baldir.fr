---
title: "Mapping CSV file with multiline Strings to Java Object with Spring Batch"
date: 2020-01-28
tags: ["Java", "Spring", "How-to", "Spring Batch"]
description: "Parse CSV file that contains multiline strings. Spring Batch allows us to make this task easier."
series: false
---
Parse CSV file that contains multiline strings. Spring Batch allows us to make this task easier.

Sample CSV File
```CSV
"Column 1","Column 2","Column 3"
1,"This is a multiline 
String","Value 3"
```

Simple target data class (no need for getter/setters, just public fields is fine).
```java
public class MyData {
    public String column1;
    public String column2;
    public String column3;
}
```

Unit test!

```java

class MyDataCsvReaderFactoryTest {

    @Test
    void csvMyDataReader() throws Exception{

        ItemStreamReader<MyData> reader = MyDataCsvReaderFactory.csvMyDataReader(
                new ClassPathResource("/maptest_mydata.csv"));
        
        reader.open(new ExecutionContext());
        MyData myData = reader.read();
        assertEquals(myData.column1, "1","column1");
        assertEquals(myData.column2, "This is a multiline\n"+ 
                                     "String","column2");
        assertEquals(myData.column3, "Value 3","column3");
     
    }
}
```

Now the implementation.

The following enum will allow to decouple data mapping from CSV structure internal indexes.
 
```java
import java.util.Arrays;

public enum MyDatasColumns {
    COLUMN_1(0, "column1"),
    COLUMN_2(1, "column2"),
    COLUMN_3(2, "column3");

    final public int columnIndex;
    final public String fieldName;


    MyDatasColumns(int columnIndex, String fieldName) {
        this.columnIndex = columnIndex;
        this.fieldName = fieldName;
    }
}
```

The mapping logic with Spring Batch utilities. Note the use of the enum to abstract column selection and column order. 

```java

import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemStreamReader;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.batch.item.file.mapping.DefaultLineMapper;
import org.springframework.batch.item.file.separator.DefaultRecordSeparatorPolicy;
import org.springframework.batch.item.file.transform.DelimitedLineTokenizer;
import org.springframework.batch.item.support.SingleItemPeekableItemReader;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.util.Arrays;
import java.util.Comparator;
import java.util.SortedSet;
import java.util.TreeSet;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static MyDatasColumns.*;

/**
 * Creates reader for converting RAW CSV data to Data DTO.
 */
public class MyDataCsvReaderFactory {

    public static ItemStreamReader<MyData> csvMyDataReader(Resource resource) {
        // Columns sorted by their index
        SortedSet<MyDatasColumns> columns = new TreeSet<>(Comparator
                .comparingInt(MyDatasColumns -> MyDatasColumns.columnIndex));
        // Here we select the columns we want in the target object.
        columns.addAll(Stream.of(
                COLUMN_1,
                COLUMN_1,
                COLUMN_1)
                .collect(Collectors.toSet()));

        FlatFileItemReader<MyData> reader = new FlatFileItemReader<>();

        // skip header line
        reader.setLinesToSkip(1);
        // Important ! --> Allowing multi-line token support <--
        reader.setRecordSeparatorPolicy(new DefaultRecordSeparatorPolicy());
        reader.setResource(resource);
        reader.setLineMapper(new MyDataDefaultLineMapper(columns));
        return reader;
    }

    private static class MyDataDefaultLineMapper extends DefaultLineMapper<MyData> {
        public MyDataDefaultLineMapper(SortedSet<MyDatasColumns> columns) {
            String[] columnNames = columns.stream()
                    .map(MyDatasColumns -> MyDatasColumns.fieldName)
                    .toArray(String[]::new);
            int[] includedFields =
                    Arrays.stream(columns.stream()
                            .map(MyDatasColumns -> MyDatasColumns.columnIndex)
                            .toArray(Integer[]::new))
                            .mapToInt(Integer::intValue).
                            toArray();

            setLineTokenizer(new DelimitedLineTokenizer() {
                {
                    setNames(columnNames);
                    setQuoteCharacter('"');
                    setIncludedFields(includedFields);
                    setDelimiter(",");
                }
            });

            setFieldSetMapper(new BeanWrapperFieldSetMapper<MyData>() {
                {
                    setTargetType(MyData.class);

                }
            });

        }
    }
}

```
