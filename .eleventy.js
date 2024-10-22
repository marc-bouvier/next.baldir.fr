import {eleventyImageTransformPlugin} from "@11ty/eleventy-img"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import {EleventyHtmlBasePlugin, EleventyI18nPlugin, IdAttributePlugin} from "@11ty/eleventy";
import {feedPlugin} from "@11ty/eleventy-plugin-rss";
import yaml from "js-yaml"

export default function (eleventyConfig) {

    eleventyConfig.addFilter("toLocaleStringFr", function (date) {
        return new Date(date).toLocaleString("fr-FR",
            {weekday: "long", month: "long", day: "numeric", year: "numeric"})
    });

    eleventyConfig.addFilter("toLocaleTimeStringFr", function (date) {
        return new Date(date).toLocaleTimeString("fr-FR",
            {hour: "2-digit", minute: "2-digit"})
    });
    
    eleventyConfig.addFilter("toLocaleStringFrShort", function (date) {
        return new Date(date).toLocaleString("fr-FR",
            {month: "2-digit", day: "numeric", year: "numeric"})
    });

    eleventyConfig.addFilter("toIsoString", function (date) {
        return new Date(date).toISOString()
    });


    eleventyConfig.addCollection("blog", function (collectionApi) {
        return collectionApi.getFilteredByGlob(["blog/*.md", "blog/*.html"]);
    });

    eleventyConfig.addCollection("latestFewFinishedArticles", function (collectionApi) {
        return collectionApi.getFilteredByGlob(["blog/*.md", "blog/*.html"])
            .filter(item => !item.data.stub)
            .filter(item => !item.data.draft)
            .sort((a, b) => b.date - a.date)
            .slice(0, 5);

    });

    eleventyConfig.addCollection("allFinishedArticles", function (collectionApi) {
        return collectionApi.getFilteredByGlob(["blog/*.md", "blog/*.html"])
            .filter(item => !item.data.stub)
            .filter(item => !item.data.draft)
            .sort((a, b) => b.date - a.date);

    });

    eleventyConfig.addCollection("allNotesFromRecentToOlder", function (collectionApi) {
        return collectionApi.getFilteredByGlob(["notes/*.md", "notes/*.html"])
            .sort((a, b) => b.date - a.date)
    });

    eleventyConfig.addCollection("making-of", function (collectionApi) {
        return collectionApi.getFilteredByGlob(["making-of/*.md", "making-of/*.html"]);
    });

    eleventyConfig.addCollection("glossaire", function (collectionApi) {
        let filteredByGlob = collectionApi.getFilteredByGlob(["glossaire/*.md", "glossaire/*.html"]);
        return filteredByGlob
            .sort((a, b) => a.data.title.localeCompare(b.data.title));
    });

    eleventyConfig.addCollection("kata-logue", function (collectionApi) {
        return collectionApi.getFilteredByGlob(["kata-logue/*.md", "kata-logue/*.html"]);
    });

    eleventyConfig.addCollection("tags", function (collectionApi) {
        return Array.from(new Set(collectionApi.getFilteredByGlob([
            "kata-logue/*.md", "kata-logue/*.html",
            "glossaire/*.md", "glossaire/*.html",
            "notes/*.md", "notes/*.html",
            "blog/*.md", "blog/*.html",
            "making-of/*.md", "making-of/*.html",
        ])
            .flatMap(page => page.data.tags)))
            .filter(tag => tag!==undefined)
            .sort((a, b) => a.localeCompare(b));

    });


    // Adds id to headings
    eleventyConfig.addPlugin(IdAttributePlugin);

    // Copy static styles as is
    eleventyConfig.addPassthroughCopy("public/css");

    // Required to support --pathprefix
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    // Internationalization
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "fr",
    });

    // RSS feed
    eleventyConfig.addPlugin(feedPlugin, {
        type: "rss",
        outputPath: "/feed.xml",
        collection: {
            name: "blog"
        }
    })

    // Code snippets with syntax highlighting
    eleventyConfig.addPlugin(syntaxHighlight, {
        lineSeparator: "\n",
        errorOnInvalidLanguage: true,
        alwaysWrapLineHighlights: true,
        preAttributes: {},
        codeAttributes: {}
    });

    // Create images variants of different dimensions and different formats.
    // They will be loaded depending on the viewport
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        outputDir: "./_site/public/img/",
        urlPath: "/public/img/",

        extensions: "html",

        // output image formats
        formats: ["webp", "jpeg", "png", "auto"],

        // output image widths
        widths: ["320", "640", "800", "1024", "auto"],

        // attributes assigned on <img> override these values.
        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
            sizes: `100vw`,
        },

        sharpOptions: {
            animated: true,
        }
    })

    // Support yaml data files : https://www.11ty.dev/docs/data-custom/#yaml
    eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

}
