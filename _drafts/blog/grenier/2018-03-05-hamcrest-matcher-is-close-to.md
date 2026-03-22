---
layout: post
title: "Hamcrest matcher : LocalDateTime is close to another"
description: An Hamcrest matcher (JUnit) to know if a date is close to another within a parametrable tolerance offset.
tags:
  - JUnit
  - How-to
  - Amélioration-continue
  - Affuter-ses-outils
date: 2018-03-05
---

This Hamcrest matcher allows to know if a LocalDateTime is close (with parametrable tolerance) to another. I know it can be generalized with additional types supported. But for now it does the job.

Usage
```
   SomeObject output = new SomeObject();
   assertThat(output.getDateCreation(), isCloseTo(LocalDateTime.now(), 2));
   //equivalent to
   assertThat(output.getDateCreation(), isCloseToNow());
```

The Matcher.
```
package fr.bouvier.marc.test.util;

import org.hamcrest.BaseMatcher;
import org.hamcrest.Description;
import org.hamcrest.Factory;
import org.hamcrest.Matcher;

import java.time.LocalDateTime;

public class IsCloseTo<T> extends BaseMatcher<T> {
    private final Object expectedValue;
    private final int toleranceInMin;

    public IsCloseTo(Object expectedValue) {
        this.expectedValue = expectedValue;
        toleranceInMin = 2;
    }

    public IsCloseTo(T equalArg, int toleranceInMin) {
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
        // type non supporté
        return false;
    }

    @Factory
    public static <T> Matcher<T> isCloseTo(T operand) {
        return new IsCloseTo<T>(operand);
    }

    @Factory
    public static <T> Matcher<T> isCloseTo(T operand, int toleranceInMin) {
        return new IsCloseTo<T>(operand, toleranceInMin);
    }

    @Factory
    public static <T> Matcher<T> isCloseToNow() {
        return new IsCloseTo<T>(LocalDateTime.now());
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
