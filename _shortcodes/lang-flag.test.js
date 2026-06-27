import {describe,test, expect} from "vitest";
import langFlagShortcode from "./lang-flag.js";

describe('shortcode : lang-flag', () => {

    test.each([

        {lang: "fr", expected: `<span class="sr-only">En français</span><span aria-hidden="true">🇫🇷</span>`},
        {lang: "fr-FR", expected: `<span class="sr-only">En français</span><span aria-hidden="true">🇫🇷</span>`},
        {lang: "en", expected: `<span class="sr-only">En anglais</span><span aria-hidden="true">🇬🇧</span>`},
        {lang: "en-US", expected: `<span class="sr-only">En anglais</span><span aria-hidden="true">🇬🇧</span>`},
        {lang: "", expected: ""},
        {lang: null, expected: ""},
        {lang: undefined, expected: ""},
    ])('renders accessible lang flag', ({lang,expected}) => {
        const rendering = langFlagShortcode(lang)
        expect(rendering).toEqual(expected);
    })
})