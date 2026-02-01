import {expect, it} from "vitest"
import {toOpmlSubscriptionXml} from "./index.js";

it('flat opml rss feeds', () => {
    const xml = toOpmlSubscriptionXml({
        dateCreated: new Date("2026-02-01T18:29:46+01:00"),
        dateModified: new Date("2026-02-01T18:29:58+01:00"),
        docs: "https://opml.org/spec2.opml",
        ownerEmail: "blog@baldir.fr",
        ownerName: "Marc Bouvier",
        title: "Blog de Marc Bouvier"
    }, [
        {text: "text", title: "title"}
    ]);
    expect(xml).toBe(
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
        "<opml version=\"2.0\">" +
        "<head>" +
        "<dateCreated>Sun, 01 Feb 2026 17:29:46 GMT</dateCreated>" +
        "<dateModified>Sun, 01 Feb 2026 17:29:58 GMT</dateModified>" +
        "<docs>https://opml.org/spec2.opml</docs>" +
        "<ownerEmail>blog@baldir.fr</ownerEmail>" +
        "<ownerName>Marc Bouvier</ownerName>" +
        "<title>Blog de Marc Bouvier</title>" +
        "</head>" +
        "<body>" +
        "<outline text=\"text\" title=\"title\"/>" +
        "</body>" +
        "</opml>")
});


it('nested opml rss feeds', () => {
    const xml = toOpmlSubscriptionXml({
        dateCreated: new Date("2026-02-01T18:29:46+01:00"),
        dateModified: new Date("2026-02-01T18:29:58+01:00"),
        docs: "https://opml.org/spec2.opml",
        ownerEmail: "blog@baldir.fr",
        ownerName: "Marc Bouvier",
        title: "Blog de Marc Bouvier"
    }, [
        {
            text: "text", title: "title",
            _children: [
                {
                    text: "text_children", title: "title_children"
                },
                {
                    text: "text_bar", title: "title_bar"
                },
            ]
        }
    ]);
    expect(xml).toBe(
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
        "<opml version=\"2.0\">" +
        "<head>" +
        "<dateCreated>Sun, 01 Feb 2026 17:29:46 GMT</dateCreated>" +
        "<dateModified>Sun, 01 Feb 2026 17:29:58 GMT</dateModified>" +
        "<docs>https://opml.org/spec2.opml</docs>" +
        "<ownerEmail>blog@baldir.fr</ownerEmail>" +
        "<ownerName>Marc Bouvier</ownerName>" +
        "<title>Blog de Marc Bouvier</title>" +
        "</head>" +
        "<body>" +
        "<outline text=\"text\" title=\"title\">" +
        "<outline text=\"text_children\" title=\"title_children\"/>" +
        "<outline text=\"text_bar\" title=\"title_bar\"/>" +
        "</outline>"+
        "</body>" +
        "</opml>")
});
