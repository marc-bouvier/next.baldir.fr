import {eleventyImageTransformPlugin} from "@11ty/eleventy-img"

export default function (eleventyConfig) {
    // eleventyConfig.addPassthroughCopy("img");

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        outputDir: "./_site/img/",
        urlPath: "/img/",

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

