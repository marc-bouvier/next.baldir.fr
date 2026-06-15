
let GLOSSARY_PAGES = {};
eleventyConfig.on('beforeBuild', () => {
    GLOSSARY_PAGES = {};
});

eleventyConfig.addCollection("glossaire", function (collectionApi) {
    let filteredByGlob = collectionApi.getFilteredByGlob(["glossaire/*.md", "glossaire/*.html"]);
    const sortedGlossaryPages = filteredByGlob
        .sort((a, b) => a.data.title.localeCompare(b.data.title));

    sortedGlossaryPages.forEach(page => {

        const {title, description} = page.data
        GLOSSARY_PAGES[page.url] = {
            title: title || "",
            description: description || "",
            id: `glossary-${page.template.fileSlugStr}`
        };
    })

    return sortedGlossaryPages;
});

// - Tooltips pour les liens qui pointent vers une page de glossaire
// - ajout d'une classe CSS pour signifier qu'il s'agit d'un terme de glossaire
eleventyConfig.addTransform("glossary-tooltip", function (content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) {
        return content
    }
    // mapping title/description à construire une seule fois (simple cache)
    // TODO: implement mapping lookup using this.collections.glossaire if needed
    const glossaryLinkRegex = /<a\s+([^>]*?)href="(\/glossaire\/[^"]+)"([^>]*?)>([\s\S]*?)<\/a>/g;
    // TODO: replce all occurences
    //   add dom content
    const str = ""
    return content.replaceAll(glossaryLinkRegex, (matchedSubstring, pre, href, post, inner) => {
        // placeholder: lookup title/description from a map
        const glossaryPage = GLOSSARY_PAGES[href]; // GLOSS_MAP à construire en haut du fichier
        if (!glossaryPage) return matchedSubstring;
        const payload = encodeURIComponent(JSON.stringify({
            title: glossaryPage.title,
            desc: glossaryPage.description
        }));
        return `<a ${pre} href="${href}" ${post} data-gloss-tooltip="${payload}">${inner}</a>`;
    });
});
