export default function (tags, ...excluded) {
    if (!tags) {
        return ""
    } else {
        const tagItems = tags
            .filter(tag=>!excluded.includes(tag))
            .map(tag => `<li><a href="/tags/${tag}">${tag}</a></li>`)
            .join("\n")
        return `<ul class="tags">
    ${tagItems}
</ul>`;
    }
};
