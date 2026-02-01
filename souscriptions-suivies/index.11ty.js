import {ICalCalendar,ICalCalendarMethod} from "ical-generator";
import {toOpmlSubscriptionXml} from "../_src/opml/index.js";

/**
 * @param rss_feeds _data/rss_feeds.yml
 * @returns {string} opml
 */
export function generateSouscriptionsSuivies(rss_feeds) {
    /**
     * @type {OpmlHeader}
     */
    const header = {
        title: rss_feeds.title,
        dateCreated: new Date(rss_feeds.dateCreated),
        ownerName: rss_feeds.ownerName,
        ownerEmail: rss_feeds.ownerEmail,
        docs: rss_feeds.docs,
    }
    return toOpmlSubscriptionXml(header, rss_feeds.outlines)
}

export default class  {
    data() {
        return {
            permalink: 'souscriptions-suivies/souscriptions_suivies_par_baldir.opml',
        }
    }

    /**
     * @param rss_feeds {RssFeeds}
     * @return {string}
     */
    render({ rss_feeds }) {
        return generateSouscriptionsSuivies(rss_feeds);
    }
}