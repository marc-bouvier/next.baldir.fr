---
layout: post
title: "Integrate vuejs in existing JSF application"
description: In this post we will see how to integrate some vueJs application using JSF and Spring Rest Controller as backend.
date: 2018-03-12
tags: 
- JSF 
- Javascript 
- VueJs 
- Spring 
- Rest
---
In this post we will see how to integrate some vueJs application using JSF and Spring Rest Controller as backend.

## Add Spring Rest API support

Add Spring MVC into dependencies.
```
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-webmvc</artifactId>
  <version>${spring-version}</version>
</dependency>
```

Add Spring dispatcher in `WEB-INF/web.xml`
```
<servlet>
    <servlet-name>spring</servlet-name>
    <servlet-class>
        org.springframework.web.servlet.DispatcherServlet
    </servlet-class>
    <load-on-startup>2</load-on-startup>
</servlet>

<servlet-mapping>
    <servlet-name>spring</servlet-name>
    <url-pattern>/rest/*</url-pattern>
</servlet-mapping>
```
Create `WEB-INF/spring-servlet.xml`
```
<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
    http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context-4.0.xsd
        http://www.springframework.org/schema/mvc
        http://www.springframework.org/schema/mvc/spring-mvc-4.0.xsd">

    <context:component-scan base-package="fr.bouvier.marc.rest"/>
    <mvc:annotation-driven/>

</beans>
```

## Create Spring Rest endpoint

```
package fr.bouvier.marc.rest;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloRestApi {

    @RequestMapping(value = "/hello/{name}", method = RequestMethod.GET)
    public String sayHelloTo(@PathVariable("name") String name) {
        return "Hello "+ name;
    }
}
```

## Create xhtml page with vuejs application calling rest API

In order to support to v-bind "v-bind" or "v-on" you can add  `xmlns:v-bind="http://xmlns.jcp.org/jsf/passthrough"` and
`xmlns:v-on="http://xmlns.jcp.org/jsf/passthrough"`.

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:h="http://java.sun.com/jsf/html"
      xmlns:f="http://java.sun.com/jsf/core"
      xmlns:v-on="http://xmlns.jcp.org/jsf/passthrough">
<f:view>
    <h:head>
    </h:head>
    <h:body>

        <script src="https://cdn.jsdelivr.net/npm/vue"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <div id="app">
            <div>Saying : {{hello}}</div>
            <div>
                <input v-model="name"/>
                <button v-on:click="sayHello">Say</button>
            </div>
        </div>

        <script>
            //Configuration injection from JSF
            let baseApi = '#{request.contextPath}'
            var app = new Vue ({
                el: '#app',
                data() {
                    return {
                        hello: '',
                        name: 'world'
                    }
                },
                mounted() {
                    this.sayHello ()
                },
                methods: {
                    sayHello() {

                        axios.get (baseApi + '/rest/api/hello/' + this.name)
                            .then (response => {
                                this.hello = response.data
                            })
                            .catch (error => {
                                console.log (error)
                            })
                    }
                }
            })
        </script>
    </h:body>
</f:view>
</html>
```


