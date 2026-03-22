---
layout: post
title: "Reset and revert with GIT"
date: 2018-02-20
tags: 
- Git 
- How-to
- Version-Control
description : "Some commands that allow to go back in time with git."
---

Some commands that allow to go back in time with git.

## Reset head to a commit (not pushed yet)

`git reset --hard <commit_before_merge>`

## Revert a merged commit

`git revert -m 1 <merge commit hash>` 

## Source

[https://stackoverflow.com/questions/11722533/rollback-a-git-merge](https://stackoverflow.com/questions/11722533/rollback-a-git-merge)

