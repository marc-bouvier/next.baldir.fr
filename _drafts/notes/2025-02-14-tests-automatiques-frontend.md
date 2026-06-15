---
title:
date: 2025-02-14T10:43
description: ""
tags:
  - Cheat-sheet
  - FrontEnd
  - Test-logiciel
stub: false
draft: true
date_updated: 2026-03-22T14:28
---

## MSW

Logger les requêtes interceptées par MSW

```ts
const server = setupServer(  
  http.get('http://localhost:5173/api/check_email/foo@iroco.co', () => {  
   return HttpResponse.json({ result: 'err', emails: ['foo@iroco.io', 'foo@iroco.fr'] })  
  }),  
  // http.get('http://localhost:3000/api/check_email/*', () => {  
  //   return HttpResponse.json({ result: 'ok', emails: [] })  // }),  http.get('http://localhost:5173/api/check_email/foo@iroco.io', () => {  
   return HttpResponse.json({ result: 'ok', emails: [] })  
  }),  
  http.get('http://localhost:5173/api/check_email/foo_ok@iroco.co', () => {  
   return HttpResponse.json({ result: 'ok', emails: [] })  
  }),  
  http.get('http://localhost:5173/api/check_email/*', () => {  
   return HttpResponse.json({ result: 'ok', emails: [] })  
  })  
)  
server.events.on('request:start', ({ request }) => {  
  console.log('Outgoing:', request.method, request.url)  
})

```

















