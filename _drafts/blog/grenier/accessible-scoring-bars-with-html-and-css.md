---
layout: post
lang: en
title: Accessible scoring bars with HTML and CSS
date: 2022-01-15T18:00:00.000+00:00
description: Colorful but accessible scoring (progress) bars with descriptive CSS and Html.
cover_image: ""
tags:
  - Accessibility
  - CSS
  - HTML
date_updated: 2026-03-22T17:19
---
Colorful but accessible scoring (progress) bars with descriptive CSS and Html.

In action:

<style> .scoring { vertical-align: middle; font-family: Verdana, Geneva, Tahoma, sans-serif; } .scoring label { color: #8f8f91; font-weight: 400; display: inline-block; width: 10em; vertical-align: super; } ul.scoring { list-style-type: none; padding: 0; } .bar-column { left: 140px; top: 38px; position: absolute; display: inline-block; } .bar { height: 1em; width: 9em; border-radius: 1em; background-color: #484B53; display: inline-block; margin: .25em 0 .25em 0; } .fill { height: 1em; border-radius: 1em; background-color: #FF8095; box-shadow: 0em 0em 1em #FF2AA6; background: linear-gradient(137deg, #FF8095 23%, transparent 23%) 50px 0, linear-gradient(137deg, transparent 74%, #FF8095 78%), linear-gradient(137deg, transparent 34%, #FF8095 38%, #FF8095 58%, transparent 62%), #e22544; background-size: 13px; position: absolute; } .fill-green { background-color: #80ff80; box-shadow: 0em 0em 1em #2aff4e; background: linear-gradient(0deg, #80ff80 23%, transparent 23%) 4px 0, linear-gradient(0deg, transparent 74%, #80ff80 78%), linear-gradient(0deg, transparent 34%, #80ff80 38%, #80ff80 58%, transparent 62%), #20b338; background-size: 8px; } .fill-blue { background-color: #8088ff; box-shadow: 0em 0em 1em #2e2aff; background: linear-gradient(90deg, #8088ff 23%, transparent 23%) 16px 0, linear-gradient(90deg, transparent 74%, #8088ff 78%), linear-gradient(90deg, transparent 34%, #8088ff 38%, #8088ff 58%, transparent 62%), #2e2aff; background-size: 10px; } .fill-yellow { background-color: #fffd80; box-shadow: 0em 0em 1em #fbff2a; background: linear-gradient(63deg, #fffd80 23%, transparent 23%) 8px 0, linear-gradient(63deg, transparent 74%, #fffd80 78%), linear-gradient(63deg, transparent 34%, #fffd80 38%, #fffd80 58%, transparent 62%), #c9cc32; background-size: 16px 48px; } .fill-0 { width: O; } .fill-1 { width: 3em; } .fill-2 { width: 6em; } .fill-3 { width: 9em; } .num-column { left: 430px; position: absolute; } .number { color: #727681; line-height: 50px; font-weight: 300; } .number ul { list-style-type: none; padding: 0; } </style> <ul class="scoring"> <li><label>Low Effort</label> <span class="bar"> <div class="fill fill-yellow fill-1"></div> </span> </li> <li><label>Insightful</label> <span class="bar"> <div class="fill fill-blue fill-2"></div> </span> </li> <li><label>Collaborative</label> <span class="bar"> <div class="fill fill-red fill-2"></div> </span> </li> <li><label>Reliable</label> <span class="bar"> <div class="fill fill-green fill-3"></div> </span> </li>  
<li><label>Empty</label> <span class="bar"> <div class="fill fill-green fill-0"></div> </span> </li>  
</ul>

Inspirations from :

* https://projects.verou.me/css3patterns/#stairs
* https://codepen.io/megwayne/pen/gWqpdL

Code:

```html
<ul class="scoring">
    <li><label>Low Effort</label>
        <span class="bar">
            <div class="fill fill-yellow fill-1"></div>
        </span>
    </li>
    <li><label>Insightful</label>
        <span class="bar">
            <div class="fill fill-blue fill-2"></div>
        </span>
    </li>
    <li><label>Collaborative</label>
        <span class="bar">
            <div class="fill fill-red fill-2"></div>
        </span>
    </li>
    <li><label>Reliable</label>
        <span class="bar">
            <div class="fill fill-green fill-3"></div>
        </span>
    </li>
    <li><label>Empty</label>
        <span class="bar">
            <div class="fill fill-green fill-0"></div>
        </span>
    </li>
</ul>
```

```css

    .scoring {
        vertical-align: middle;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .scoring label {
        color: #8f8f91;
        font-weight: 400;
        display: inline-block;
        width: 10em;
        vertical-align: super;
    }

    ul.scoring {
        list-style-type: none;
        padding: 0;
    }

    .bar-column {
        left: 140px;
        top: 38px;
        position: absolute;
        display: inline-block;
    }

    .bar {
        height: 1em;
        width: 9em;
        border-radius: 1em;
        background-color: #484B53;
        display: inline-block;
        margin: .25em 0 .25em 0;
    }

    .fill {
        height: 1em;
        border-radius: 1em;
        background-color: #FF8095;
        box-shadow: 0em 0em 1em #FF2AA6;
        background: linear-gradient(137deg, #FF8095 23%, transparent 23%) 50px 0,
            linear-gradient(137deg, transparent 74%, #FF8095 78%),
            linear-gradient(137deg, transparent 34%, #FF8095 38%, #FF8095 58%, transparent 62%),
            #e22544;
        background-size: 13px;
        position: absolute;
    }

    .fill-green {
        background-color: #80ff80;
        box-shadow: 0em 0em 1em #2aff4e;
        background: linear-gradient(0deg, #80ff80 23%, transparent 23%) 4px 0,
            linear-gradient(0deg, transparent 74%, #80ff80 78%),
            linear-gradient(0deg, transparent 34%, #80ff80 38%, #80ff80 58%, transparent 62%),
            #20b338;
        background-size: 8px;
    }

    .fill-blue {
        background-color: #8088ff;
        box-shadow: 0em 0em 1em #2e2aff;
        background: linear-gradient(90deg, #8088ff 23%, transparent 23%) 16px 0,
            linear-gradient(90deg, transparent 74%, #8088ff 78%),
            linear-gradient(90deg, transparent 34%, #8088ff 38%, #8088ff 58%, transparent 62%),
            #2e2aff;
        background-size: 10px;
    }

    .fill-yellow {
        background-color: #fffd80;
        box-shadow: 0em 0em 1em #fbff2a;
        background: linear-gradient(63deg, #fffd80 23%, transparent 23%) 8px 0,
            linear-gradient(63deg, transparent 74%, #fffd80 78%),
            linear-gradient(63deg, transparent 34%, #fffd80 38%, #fffd80 58%, transparent 62%),
            #c9cc32;
        background-size: 16px 48px;
    }

    .fill-0 {
        width: O;
    }

    .fill-1 {
        width: 3em;
    }

    .fill-2 {
        width: 6em;
    }

    .fill-3 {
        width: 9em;
    }

    .num-column {
        left: 430px;
        position: absolute;
    }

    .number {
        color: #727681;
        line-height: 50px;
        font-weight: 300;
    }

    .number ul {
        list-style-type: none;
        padding: 0;
    }
```