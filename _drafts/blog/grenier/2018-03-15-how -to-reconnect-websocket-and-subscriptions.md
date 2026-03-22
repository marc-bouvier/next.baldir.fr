---
layout: post
date: 2018-03-15
title: How to reconnect websocket and subscriptions
description: When a mobile device goes offline or is sleeping, a websocket connection can be lost and subscriptions can also be lost. This is an attempt to reconnect the websocket in VueJs with VueX
tags:
  - VueJs
  - VueX
  - WebSocket
date_updated: 2026-03-22T17:19
---
When a mobile device goes offline or is sleeping, a websocket connection can be lost and subscriptions can also be lost. This is an attempt to reconnect the websocket.

## Context

In an application like [the chat we made previously][chat], I need to be able to resume websocket connection when it is closed unexpectedly. This can happen when the device hibernates, when connectivity is lost (3g / 4G...). I also need to subscribe back to channels and notification I was previously subscribed to.

## Problem

When a device goes offline of sleeping, the websocket connection can be lost and subscriptions can also be lost.

## A way to do it

### Store significant events of websocket state

We need to store some specific events when we try to reconstruct websocket connection. We don't want to replay all events 
(especially business events). 

During the lifecycle of the application we will first **connect to the websocket**, then **authenticate to the API** through it. 
Later, we will **subscribe to channels** (rooms) and notifications.

So I identified types of events

* connected : connected to websocket
* anthenticated : authenticated to API
* subscribedToRoomMessages : listening messages from a specific room
* subscribedToNotifyRoomTyping: listening to /typing event from a specific room

### Wrap events

The reconnection engine will store events than need to be replayed in case of deconnection of the websocket. We will add a level of
abstraction so that the engin only deals with event playing logic and not websocket technical stuff.

From the technical side, we will listen to events from the engine and do the appropriate behaviour when they occur.

ie. when receiving a `connect` event we will run something like `websocket.connect()`

### Play events

When we want to play and event we add it to a play queue. When an event is in the play queue, it is played. Meaning that the actual
behaviour is executed (ie. message sent to websocket).

#### Success

If the callback of the websocket event indicates a succes, the event is unqueued from the play queue and is added/updated in the original event queue.

#### Failure/timeout

If there is a failure or timeout in callback, the event is replayed until it is a succes or until a try limit is reached.
If the limit is reached and error is diplayed to the user indicating that there is a problem.

## Reconnect

### trigering reconnection

We want to create a "replay engine" to be triggered when the connection from the websocket is lost ([error/close ws events][ws-reco-impl]). We may want to trigger in regular interval of time or by some event.

### Replay events sequentially

Some event have prerequisites (ie. subcribe to room requires authentication to API and authentication required connection). In order to
deal with it in a simple way we replay events sequentially. When an event is sucessfully played, the next is played until there is no more events to play in queue.

Replayed event should be flagged as `replay` so they are not added to the original sequence of events to play in case of deconnection. 
Events in this original sequence should only be added when a new significant event is played (sub to a new room for instance)

### Retrying events

[chat]: https://baldir.fr/2018/02/15/chat-vuejs-rocket-chat/
[ws-reco-impl]: https://github.com/websockets/ws/wiki/Websocket-client-implementation-for-auto-reconnect
