---
tags: ["Java", "Docker", "DevOps"]
title : "Cgroup support backported in java 8"
description : "TLDR; <code>-XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap</code>"
---

TLDR; `-XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap`

Introduced in Java 10, cgroup support has been backported in java 8 (8u212). 
See also [this blog post](https://blog.softwaremill.com/docker-support-in-new-java-8-finally-fd595df0ca54).



Without this option, a jvm running in docker does not know about the memory allocated for the docker container. It knows the memory of the host instead (TODO : to verify exactly)
ands allocates a fraction of it by default. 

The consequences : when the memory used by java is higher than the memory available by the host but inferior to the memory 
affected automatically by the jvm, the containers crashes without Out of memory exception from java.
