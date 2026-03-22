---
title: Build layered Docker images with Spring Boot 2.3.1
date: 2020-06-21
tags:
  - SpringBoot
  - How-to
  - Docker
description: Since Spring Boot 2.3.1, layered application layout is supported.
series: false
date_updated: 2026-03-22T17:19
---

This allows to extract and separate dependencies from a fat jar. Dependencies 
that do not change often are separated code that change often. 

Combined with docker layering capabilities, it allows to take advantage of 
docker caching system. Unchanged layers are loaded from cache and changed layers 
are recomputed.

First let's generate a spring project 
[with spring Initializr][spring-initializr-template]

Let's change the `pom.xml` to enable layering
```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <layers>
                    <!-- Allows better and faster dockerfile dependencies caching -->
                    <enabled>true</enabled>
                </layers>
            </configuration>
        </plugin>
    </plugins>
</build>
```

Let's write a `Dockerfile`. We are using an intermediate docker image to extract
layers from the fat jar. This way, we don't have to add any step to the build or
to write multiple scripts depending on developper's OS.

Then we write the actual docker image. We use a "spring" user to avoid running 
the application as root user.

`Dockerfile`

```Dockerfile
FROM openjdk:11.0.7-jdk as builder
WORKDIR application
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} application.jar
RUN java -Djarmode=layertools -jar application.jar extract

FROM openjdk:11.0.7-jdk
RUN adduser --shell /bin/sh --disabled-password --gecos "" spring
USER spring:spring
ARG DEPENDENCY=target/dependency
COPY --from=builder application/dependencies/ ./
COPY --from=builder application/spring-boot-loader/ ./
COPY --from=builder application/snapshot-dependencies/ ./
COPY --from=builder application/application/ ./
ENTRYPOINT ["java", "org.springframework.boot.loader.JarLauncher"]
```

Now we can...

Build the application with maven.

```bash
mvnw package
```

Build the docker image.

```
docker build -t baldir/demo-spring-layered .
```

Or build directly docker image from maven plugin (does not use `Dockerfile`) and
supports layering out of the box.

```bash
mvnw spring-boot:build-image -Dspring-boot.build-image.imageName=baldir/demo-spring-layered
```

Run the image to test it locally:

```bash
docker run -it -p8080:8080 baldir/demo-spring-layered:latest
```

You can verify in your browser : http://localhost:8080

[spring-initializr-template]:https://start.spring.io/#!type=maven-project&language=java&platformVersion=2.3.1.RELEASE&packaging=jar&jvmVersion=11&groupId=com.example&artifactId=demo&name=demo&description=Demo%20project%20for%20Spring%20Boot&packageName=com.example.demo&dependencies=web
