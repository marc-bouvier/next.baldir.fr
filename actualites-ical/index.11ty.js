import {ICalCalendar,ICalCalendarMethod} from "ical-generator";

/**
 * @param actualites _data/actualites.yml
 * @returns {string} ical
 */
export function generateActualitesIcal(actualites) {
    const calendar = new ICalCalendar({
        url: actualites.url + '/actualites.ics',
        method: ICalCalendarMethod.PUBLISH,
        description: actualites.description,
        name: actualites.title,
        prodId: {
            company: actualites.organisation,
            language: "FR",
            product: "StaticGeneration",
        },
        events: actualites.events.map(event => ({
            summary: event.title,
            description: event.description+actualites.events_signature,
            start: event.start,
            end: event.end,
            url: event.url,
            id: event.uid,
        }))
    })
    return calendar.toString()
}

export default class  {
    data() {
        return {
            permalink: 'actualites.ics',
        }
    }
    render({ actualites }) {
        return generateActualitesIcal(actualites);
    }
}