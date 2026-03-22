---
layout: post
lang: en
title: "A Kotlin tiny assertion DSL"
date: 2022-01-14T18:30:00Z
description: "Sometimes I don't want to import a full testing framework, or I want some assertions in a REPL. Here is a minimalist colorful testing utility in Kotlin."
cover_image: ''
tags:
- Testing
- Kotlin

---
Sometimes I don't want to import a full testing framework, or I want some assertions in a REPL. Here is a minimalist colorful testing utility in Kotlin.

```kotlin
    object Tests {
        @JvmStatic
        fun main(args: Array<String>) {
            // My own assertions
            calculateBrakingDistance("6", "-1") `should be` 18
        }
    }
    
    /* Tiny local testing DSL */
    infix fun Any.`should be`(actual: Any) {
        val ANSI_GREEN = "\u001B[32m"
        val ANSI_RED = "\u001B[31m"
        val ANSI_RESET = "\u001B[0m"
    
        if (actual == this) {
            println(ANSI_GREEN + "Success" + ANSI_RESET)
        } else {
            println(ANSI_RED + "Failure" + ANSI_RESET + ": expected \"${this}\", but was \"${actual}\"")
        }
    }
```
