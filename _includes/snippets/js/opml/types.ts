export type OpmlHeader = {
    title: string
    dateCreated: Date
    dateModified?: Date
    ownerName: string
    ownerEmail: string
    docs?: "https://opml.org/spec2.opml"
}

export type OpmlOutline = {
    text: string
    title: string
    description?: string
    type?: "rss" | "atom"
    version?: string
    xmlUrl?: string
    htmlUrl?: string
    category?: string
    language?: string
    _children?: OpmlOutline[]
    docs?: string
}

export type RssFeeds = {
    title: string
    dateCreated: string
    ownerName: string
    ownerEmail: string
    docs?: "https://opml.org/spec2.opml"
    outlines: OpmlOutline[]
}