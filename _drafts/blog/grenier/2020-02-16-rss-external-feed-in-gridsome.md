---
title: "External rss feed in your Gridsome site"
date: 2020-02-16
tags: ["Gridsome", "VueJs", "How-to", "GraphQL", "RSS", "JamStack", "Static-Site"]
description: "In this article, we will create a list of last posts from an external Rss feed in a gridsome site."
series: false
---

In this article, we will create a list of last posts from an external Rss feed in a gridsome site.

Add [`gridsome-source-rss` plugin](https://gridsome.org/plugins/gridsome-source-rss) to your gridsome site.

`gridsome.config.js`

```javascript

module.exports = {
  
  // [...] general gridsome config

    plugins: [
        {
            use: "gridsome-source-rss",
            options: {
              feedUrl: "https://www.ronjeffries.com/feed.xml",
              typeName: 'RssRonJeffries',
              // Parser options, see: https://www.npmjs.com/package/rss-parser
              // parser: new Parser()
            }
          },
    ],

    // [...] other stuff

```

In some page or layout, use a GraphQL query to get rss feed data. 
Note that we use `<static-query>` because it won't be a query from page component.
Also, provide data from this feed to a component we will create just later.

```html

<template>
    <aside>
      <div>Rss feeds I follow</div>
      <RssFeed :feed="$static.rssRonJeffries"></RssFeed>
    </aside>
</template>
<static-query>

query{
    rssRonJeffries: allRssRonJeffries(order: ASC){
        totalCount,
        edges{
            node{id,
            pubDate,
            feedMeta{
                feedUrl,
                title,
                description,
                pubDate,
                link,
                lastBuildDate},
            title,
            link,
            content,
            contentSnippet,
            guid,
            categories,
            isoDate,
            belongsTo{totalCount}
            },
        next{id},
        previous{id}
        }
    }
}

</static-query>


<script>
import RssFeed from "~/components/RssFeed.vue";

export default {
  components: {
    RssFeed
  }
}
</script>

```


Create a component `src/components/RssFeed.vue`. It will use  GraphQL query result from Rss source defined previously as a param value.

Template

```html
<template>
  <div>
    <div>
      <a :href="rssMeta.link">{{rssMeta.title}}</a>
      - Last post : {{lastPostDate | dateFormatFilter}}
    </div>

    <ul>
      <li v-for="rssItem in rssFeed" :key="rssItem.guid">
        {{rssItem.node.pubDate | dateFormatFilter}} -
        <a
          :href="rssItem.node.link"
        >{{rssItem.node.title}}</a>
      </li>
    </ul>
  </div>
</template>
```

Script in the component

```js
const isDate = function(date) {
  const timestamp = Date.parse(date);
  return !isNaN(timestamp);
};

const dateFormatFilter = function(value) {
  if (isDate(value)) return new Date(value);
  return value;
};

export default {
  filters: {
    dateFormatFilter(value) {
      if (isDate(value)) {
        const date = new Date(value);
        return (
          ("" + date.getDate()).padStart(2, "0") +
          "/" +
          ("" + (date.getMonth() + 1)).padStart(2, "0") +
          "/" +
          date.getFullYear()
        );
      }
      return value;
    }
  },
  props: ["feed"],
  computed: {
    rssFeed() {
      return this.feed.edges;
    },
    rssMeta() {
      if (this.rssFeed[0].node) {
        return this.rssFeed[0].node.feedMeta;
      }
      return {
        feedUrl: "",
        title: "",
        description: "",
        pubDate: "",
        link: "",
        lastBuildDate: ""
      };
    },
    lastPostDate() {
      if (this.rssFeed[0].node) {
        return this.rssFeed[0].node.pubDate;
      }
      return "";
    }
  }
};
```
