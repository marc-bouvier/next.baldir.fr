---
title: "Custom Hamcrest closeTo matcher"
tags : ["Java", "JUnit"]
date: 2018-12-19
description: "A practical hamcrest matcher `closeTo` to know if a date is close to another (of the same type). Supports `java.util.Date`, `java.time.LocalDateTime`, `java.time.ZonedDateTime`, `java.time.OffsetDataTime`. No dependencies other than hamcrest." 
---

A practical hamcrest matcher `closeTo` to know if a date is close to another (of the same type). Supports `java.util.Date`, `java.time.LocalDateTime`, `java.time.ZonedDateTime`, `java.time.OffsetDataTime`. No dependencies other than hamcrest.

Usage

```
// default tolerance is 2 minutes
assertThat(someOffsetDateTime, is(closeTo(OffsetDateTime.now())));

// you can choose tolerance
assertThat(someOffsetDateTime, is(closeTo(OffsetDateTime.now(),1)));
```

Code of the matcher

```java

import org.hamcrest.BaseMatcher;
import org.hamcrest.Description;
import org.hamcrest.Factory;
import org.hamcrest.Matcher;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZonedDateTime;
import java.util.Calendar;
import java.util.Date;

/**
 * Matcher hamcrest permettant de vérifier qu'une date est proche d'une autre.
 * Le seuil de tolérance peut être précisé (en minutes)
 *
 * @param <T> Types supportés {@link LocalDateTime}, {@link OffsetDateTime}
 */
public class IsCloseTo<T> extends BaseMatcher<T> {
    private final Object expectedValue;
    /**
     * Seuil de tolérance en minutes.
     */
    private final int toleranceInMin;

    private IsCloseTo(Object expectedValue) {
        this.expectedValue = expectedValue;
        toleranceInMin = 2;
    }

    private IsCloseTo(T equalArg, int toleranceInMin) {
        expectedValue = equalArg;
        this.toleranceInMin = toleranceInMin;
    }

    private static boolean areClose(Object actual, Object expected, int toleranceInMin) {
        if (actual instanceof LocalDateTime && expected instanceof LocalDateTime) {
            final LocalDateTime expectedTime = (LocalDateTime) expected;
            final LocalDateTime actualTime = (LocalDateTime) actual;
            final LocalDateTime justBefore = expectedTime.minusMinutes(toleranceInMin);
            final LocalDateTime justAfter = expectedTime.plusMinutes(toleranceInMin);

            return justBefore.isBefore(actualTime) && justAfter.isAfter(actualTime);
        }
        if (actual instanceof OffsetDateTime && expected instanceof OffsetDateTime) {
            final OffsetDateTime expectedTime = (OffsetDateTime) expected;
            final OffsetDateTime actualTime = (OffsetDateTime) actual;
            final OffsetDateTime justBefore = expectedTime.minusMinutes(toleranceInMin);
            final OffsetDateTime justAfter = expectedTime.plusMinutes(toleranceInMin);

            return justBefore.isBefore(actualTime) && justAfter.isAfter(actualTime);
        }
        if (actual instanceof ZonedDateTime && expected instanceof ZonedDateTime) {
            final ZonedDateTime expectedTime = (ZonedDateTime) expected;
            final ZonedDateTime actualTime = (ZonedDateTime) actual;
            final ZonedDateTime justBefore = expectedTime.minusMinutes(toleranceInMin);
            final ZonedDateTime justAfter = expectedTime.plusMinutes(toleranceInMin);

            return justBefore.isBefore(actualTime) && justAfter.isAfter(actualTime);
        }
        if (actual instanceof Date && expected instanceof Date) {
            final Date expectedTime = (Date) expected;
            final Date actualTime = (Date) actual;

            final int amount = -toleranceInMin;
            final Date justBefore = add(expectedTime, Calendar.MINUTE, amount);
            final Date justAfter = add(expectedTime, Calendar.MINUTE, toleranceInMin);

            return justBefore.compareTo(actualTime) < 0 && justAfter.compareTo(actualTime) > 0;
        }
        throw new IllegalArgumentException("Unsupported type(s) combination : actual : " + actual.getClass().getTypeName() + ", expected : " + expected.getClass().getTypeName());
    }

    private static Date add(final Date date, final int calendarField, final int amount) {
        validateDateNotNull(date);
        final Calendar c = Calendar.getInstance();
        c.setTime(date);
        c.add(calendarField, amount);
        return c.getTime();
    }

    private static void validateDateNotNull(final Date date) {
        isTrue(date != null, "The date must not be null");
    }

    public static void isTrue(final boolean expression, final String message, final Object... values) {
        if (!expression) {
            throw new IllegalArgumentException(String.format(message, values));
        }
    }

    @Factory
    public static <T> Matcher<T> closeTo(T operand) {
        return new IsCloseTo<>(operand);
    }

    @Factory
    public static <T> Matcher<T> closeTo(T operand, int toleranceInMin) {
        return new IsCloseTo<>(operand, toleranceInMin);
    }


    @Override
    public boolean matches(Object actualValue) {
        return areClose(actualValue, expectedValue, toleranceInMin);
    }

    @Override
    public void describeTo(Description description) {
        description.appendValue(expectedValue);
    }

}

```
