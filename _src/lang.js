/**
 * @param {string} lang
 */
export function toIso639Set1(lang) {
    if (lang) {
        return lang.split("-")[0];
    }
    return ""
}
