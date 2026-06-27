/**
 * Shortcode taking language code and producing accessible flag emoji
 *
 * Example :
 * ```liquid
 * {% lang-flag "fr" %}
 * ```
 * will produce
 * ```html
 * <span class="sr-only">En français</span><span aria-hidden="true">🇫🇷</span>
 * ```
 * @param param0
 * @param {string} param0.lang
 * @return {string}
 */
export default function (lang) {
    const flag = toFlag(lang)
    if (!flag) {
        return ""
    } else {
        const label = toLabel(lang);
        return `<span class="sr-only">En ${label}</span><span aria-hidden="true">${flag}</span>`;
    }
};

const langFlags = {
    "en": "🇬🇧",
    "fr": "🇫🇷",
}

const langLabels = {
    "en": "anglais",
    "fr": "français",
}


function toLabel(iso639Set1) {
    return langLabels[toIso639Set1(iso639Set1)]
}

function toFlag(iso639Set1) {
    return langFlags[toIso639Set1(iso639Set1)]
}

/**
 *
 * @param {string} lang
 */
function toIso639Set1(lang) {
    if (lang) {
        return lang.split("-")[0];
    }
    return ""
}
