import {eleventyImageTransformPlugin} from "@11ty/eleventy-img"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import {EleventyI18nPlugin} from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("public/css");

    eleventyConfig.addPlugin(EleventyI18nPlugin, {

        defaultLanguage: "fr",

    });

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        outputDir: "./_site/public/img/",
        urlPath: "/public/img/",

        extensions: "html",

        // output image formats
        formats: ["webp", "jpeg", "png"],

        // output image widths
        widths: ["320", "640", "800", "1024", "auto"],

        // attributes assigned on <img> override these values.
        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
            sizes: `100vw`,
        },
    })

}

