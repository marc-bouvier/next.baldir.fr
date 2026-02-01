import opml from "opml-generator2"

/**
 * @param header {OpmlHeader}
 * @param outlines {OpmlOutline[]}
 * @return {string}
 */
export function toOpmlSubscriptionXml(header, outlines) {
    const transformedHeader = {...header}
    if(header.dateModified){
        transformedHeader.dateModified = header?.dateModified?.toUTCString()
    }
    return opml(transformedHeader, outlines)
}