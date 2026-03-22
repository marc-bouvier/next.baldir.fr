---
title: Simple chat with VueJS & Rocket.Chat
tags:
  - RocketChat
  - VueJs
  - Demo
  - WebSocket
  - Open-Source
date: 2018-02-15
cover_image: ./images/2018-02-15/minimalistic-vuejs-rocket.chat.gif
description: A minimalistic real time chat made with VueJS and Rocket.Chat API
date_updated: 2026-03-22T17:19
---

* [See live version.](https://marc-bouvier.github.io/rx-rocket.chat-sample/#/)
* [See sources](https://github.com/marc-bouvier/rx-rocket.chat-sample)

You can try the chat in [this demo](https://marc-bouvier.github.io/rx-rocket.chat-sample/#/).

First, create an application vueJs with vue cli.

`vue init webpack`

Add [rocket.chat.realtime.api.rxjs](https://github.com/inf3cti0n95/Rocket.Chat.RealTime.API.RxJS) to javascript dependencies.

`npm install --save rocket.chat.realtime.api.rxjs`

src/App.vue
```
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
</style>

```

src/router/index.js
```
import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: Chat
    }
  ]
})
```
src/api/index.js
```
import {RealTimeAPI} from 'rocket.chat.realtime.api.rxjs'

export default {
  connectToRocketChat(rocketChatRealTimeApiUrl) {
    return new RealTimeAPI (rocketChatRealTimeApiUrl)
  }
}

```

src/components/Chat.vue
```
<template>
  <div class="chat">
    <div>
      <p>Use Rocket.Chat REST API to get your userId and token</p>
      <div><pre><code>curl -X "POST" "https://chat.myserver.com/api/v1/login" \
-H "Content-Type: application/json; charset=utf-8" \
-d $'{
"username": "my_username",
"password": "my_password"
  }'</code></pre>
      </div>
    </div>
    <div>Rocket.Chat websocket URL : {{webSocketUrl}}
    </div>
    <div>UserId : <input type="text" v-model="userId" :disabled="loggedIn"/>
      Auth Token : <input type="text" v-model="authToken" :disabled="loggedIn"/>
      <button v-if="!loggedIn" v-on:click="login">Login</button>
    </div>
    <div>Room id (default sandbox) : <input type="text" v-model="roomId"/>
      <button v-if="!roomConnected" v-on:click="connectRoom">Subscribe to room</button>
    </div>
    <div>
      Send message : <input type="text" v-on:keyup.enter="sendMessage" v-model="newMessage"/>
      <button v-on:click="sendMessage">Send</button>
    </div>
    <div id="messages" style="max-height: 400px;overflow-y: scroll">
      <div class="message" v-for="(message,messageIndex) in messages" :key="messageIndex">
        <b v-if="formatMessage (message).formattedDate">
          {{formatMessage (message).formattedDate}}</b>
        <code>{{message}}</code>
      </div>
    </div>
  </div>
</template>

<script>
  import rcApi from '../api'

  let api = null
  export default {
    name: 'Chat',
    data() {
      return {
        webSocketUrl: 'wss://open.rocket.chat/websocket',
        connectedToApi: true,
        loggedIn: false,
        userId: '',
        authToken: '',
        roomName: 'sandbox',
        roomId: 'Drjw54ftqGa4antMW',
        roomConnected: false,
        newMessage: '',
        messages: [],
        errors: []
      }
    },
    mounted() {
      api = rcApi.connectToRocketChat (this.webSocketUrl)
      api.onError (error => this.errors.push (error))
      api.onCompletion (() => console.log ("finished"))
      api.onMessage (message => {
        this.messages.push (message)
      })
      api.connectToServer ()
        .subscribe (() => {
            api.keepAlive () // Ping Server
          },
          (error) => {
            this.errors.push (error)
          }
        )
    },
    methods: {
      login() {
        if (!this.loggedIn) {
          api.loginWithAuthToken (this.authToken)
            .subscribe (apiEvent => {
              if (apiEvent.msg === 'result') {
                // success
                this.messages.push (apiEvent.msg)
                this.loggedIn = true
              }
            }, (error) => {
              this.errors.push (error)
            })
        }
      },
      connectRoom() {
        if (!this.roomConnected) {
          api.sendMessage ({
            "msg": "sub",
            "id": '' + new Date ().getTime (),
            "name": "stream-room-messages",
            "params": [
              this.roomId,
              false
            ]
          })
        }
      },
      sendMessage() {
        api.sendMessage ({
          "msg": "method",
          "method": "sendMessage",
          "id": '' + new Date ().getTime (),
          "params": [
            {
              "_id": '' + new Date ().getTime (),
              "rid": this.roomId,
              "msg": this.newMessage
            }
          ]
        })
        this.newMessage = ''
      },
      formatMessage(message) {
        let result = {message}
        if (message.fields !== undefined &&
          message.fields.args !== undefined &&
          message.fields.args.length > 0 &&
          message.fields.args[0].ts !== undefined &&
          message.fields.args[0].ts.$date !== undefined
        ) {
          result.formattedDate = new Date (message.fields.args[0].ts.$date)
        }
        return result
      }
    }
  }
</script>

<style>
</style>
```




