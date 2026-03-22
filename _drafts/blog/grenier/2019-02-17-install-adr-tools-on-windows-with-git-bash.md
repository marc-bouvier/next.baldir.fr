---
title: Install adr-tools on windows with git bash
tags:
  - How-to
  - Architecture-Decision-Records
  - Architecture
date: 2019-02-17
description: Guide to install adr-tools command line to automate ADR creation on windows with git bash.
date_updated: 2026-03-22T17:19
---

Assuming that git-bash is installed here is how to install `adr-tools` with git for windows. 

Follow the instructions [here](https://github.com/npryce/adr-tools/blob/master/INSTALL.md#git-for-windows-git-bash)

Then you can install `more` or set the `PAGER` environment variable to `less`.

Personally I prefer to set the environment variable since I am not using `more` anyways.

```
$ cd
$ nano .bashrc
```
Then edit .bashrc
```bash
# for adr-tools instead of installing more
export PAGER=less
```

Finally save (Ctrl + X) and then `y` or `o` if localized in french.

