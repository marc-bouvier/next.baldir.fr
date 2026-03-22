---
title: Automate building Index for learning
date: 2023-01-25
lang: en
description: In this article I will show you how I automated writing indexes for learning with Obsidian.
tags:
  - Automation
  - Obsidian
  - QuickAdd
date_updated: 2026-03-22T17:19
---

In this article I will show you how I automated writing indexes for learning with Obsidian.

I wanted to be able to quickly write [Indexes for learning](2023-01-25-building-indexes-for-learning.md) with Obsidian.
I created a template and an automation with [QuickAdd plugin](https://quickadd.obsidian.guide).

The result looks like this:

![Screencast showing the usage of a form to input an index note quickly. Open obsidian commands. Type "index" and select the command "QuickaAdd Index". A window appears with a form input called "Name" the user types a name and validate with OK. Then a new input appears : "Purpose". The user types some text and validates with OK. Next, an input called "Tags", the user types some obsidian tags and validates with OK. Then an input called "Url" Appears. The user paste an URL and validates with OK. The window closes and a new note with the content typed by the user appears.](/obsidian-quickadd-index/Create-and-index-note-with-Obsidian-QuickAdd.gif)

## Prerequisites

- [Obsidian](https://obsidian.md)
- Enable community plugins
- Install and enable [Quickadd plugin](https://quickadd.obsidian.guide)

## The template

Create a new note with the following content (it will be the template we use).

```
# 2023-01-5-automate-building-index-for-learning

{{VALUE:Purpose}}

{{VALUE:Tags}}

- [link]({{VALUE:Url}})

```

## Setup with QuickAdd

- Open Obsidian Settings

1. Open QuickAdd Settings ( 1️⃣ )
2. Pick a name for your new action ( 2️⃣ )
3. Choose “Template” mode ( 3️⃣ )
4. Click on “Add Choice” ( 4️⃣ )

![](/obsidian-quickadd-index/QuickAdd-create-new-action.png)

1. Template path : name of the note previously created
2. File name Format: Check
3. File Name: `{{VALUE:Name}}
4. Create in folder : Check
5. Choose folder when creating a new note
  - Folder path: Path to a folder where you wish the new note to be created
6. Open : (optionally) check if you want the new note to be opened after it is created

![](/obsidian-quickadd-index/QuickAdd-action-settings.png)

## Enable Command

By default, the action is not available among the Obsidian Commands.

![](/obsidian-quickadd-index/Quickadd-search-index-command-not-found.png)

We need to enable it as a command

![](/obsidian-quickadd-index/Quickadd-enable-index-command.png)

Usually you need to restart Obsidian so it takes effect.
It is now available in commands.

![](/obsidian-quickadd-index/Quickadd-search-index-command-found.png)

## Using the new action

Input Name

![](/obsidian-quickadd-index/QuickAdd-use-index-input-name.png)

Input Purpose

![](/obsidian-quickadd-index/QuickAdd-use-index-input-purpose.png)

Input Tags

![](/obsidian-quickadd-index/QuickAdd-use-index-input-tags.png)

Input Url

![](/obsidian-quickadd-index/QuickAdd-use-index-input-url.png)

It is opened automatically.

![](/obsidian-quickadd-index/QuickAdd-use-index-note-created-is-opened.png)


