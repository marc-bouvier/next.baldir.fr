import {describe, it, expect, beforeEach, afterEach, vi} from "vitest";
import {generateActualitesIcal} from "./index.11ty.js";

describe('actualites-ical', () => {

    beforeEach(() => {
        const date = new Date("2024-10-29T15:05:19+01:00")
        vi.useFakeTimers()
        vi.setSystemTime(date)
    })
    afterEach(() => {
        vi.useRealTimers()
    })
    it('génère un calendrier avec évènements', () => {

        const ical = generateActualitesIcal(actualitesFixture)
        expect(ical).toBe(`BEGIN:VCALENDAR\r
VERSION:2.0\r
PRODID:-//Baldir//StaticGeneration//FR\r
URL:https://baldir.fr/actualites.ics\r
METHOD:PUBLISH\r
NAME:Actualités de Marc Bouvier\r
X-WR-CALNAME:Actualités de Marc Bouvier\r
X-WR-CALDESC:Vous me trouverez lors des événements présents dans ce cal\r
 endrier.\r
BEGIN:VEVENT\r
UID:1DA33DBF-1AFF-4032-9CB9-10A76D8C446E\r
SEQUENCE:0\r
DTSTAMP:20241029T140519Z\r
DTSTART:20241001T100000Z\r
DTEND:20241001T120000Z\r
SUMMARY:Dojo de programmation\r
DESCRIPTION:Je faciliterai de Dojo de programmation pour le meetup Softwar\r
 e Craft Strasbourg Signature\r
URL;VALUE=URI:https://www.meetup.com/fr-FR/software-crafters-strasbourg/ev\r
 ents/303524329\r
END:VEVENT\r
BEGIN:VEVENT\r
UID:D2635A27-6D49-4644-AABF-EE54EE0C71C4\r
SEQUENCE:0\r
DTSTAMP:20241029T140519Z\r
DTSTART:20241023T160000Z\r
DTEND:20241023T180000Z\r
SUMMARY:Forum ouvert des communautés Craft francophones\r
DESCRIPTION:Accompagne-moi à [En ligne] Forum ouvert des communautés fra\r
 ncophones Signature\r
URL;VALUE=URI:https://meetu.ps/e/Nsz9g/wrQsd/i\r
END:VEVENT\r
END:VCALENDAR`)
    })
})


const actualitesFixture = {
    title: "Actualités de Marc Bouvier",
    description: "Vous me trouverez lors des événements présents dans ce calendrier.",
    organisation: "Baldir",
    url: "https://baldir.fr",
    events_signature: " Signature",
    events: [{
        title: "Dojo de programmation",
        description: "Je faciliterai de Dojo de programmation pour le meetup Software Craft Strasbourg",
        start: "2024-10-01T10:00:00.000Z",
        end: "2024-10-01T12:00:00.000Z",
        url: "https://www.meetup.com/fr-FR/software-crafters-strasbourg/events/303524329",
        uid: "1DA33DBF-1AFF-4032-9CB9-10A76D8C446E"
    }, {
        title: "Forum ouvert des communautés Craft francophones",
        description: "Accompagne-moi à [En ligne] Forum ouvert des communautés francophones",
        start: "2024-10-23T16:00:00.000Z",
        end: "2024-10-23T18:00:00.000Z",
        url: "https://meetu.ps/e/Nsz9g/wrQsd/i",
        uid: "D2635A27-6D49-4644-AABF-EE54EE0C71C4"
    }]
}

