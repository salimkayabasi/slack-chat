[![npm version](https://badge.fury.io/js/slack-chat.svg)](http://badge.fury.io/js/slack-chat)
[![Dependency Status](https://david-dm.org/salimkayabasi/slack-chat.svg)](https://david-dm.org/salimkayabasi/slack-chat)
[![DevDependency Status](https://david-dm.org/salimkayabasi/slack-chat/dev-status.svg)](https://david-dm.org/salimkayabasi/slack-chat#info=devDependencies)
[![PeerDependency Status](https://david-dm.org/salimkayabasi/slack-chat/peer-status.svg)](https://david-dm.org/salimkayabasi/slack-chat#info=peerDependencies)
[![Build Status](https://travis-ci.org/salimkayabasi/slack-chat.svg?branch=master)](https://travis-ci.org/salimkayabasi/slack-chat)

# slack-chat

[![Greenkeeper badge](https://badges.greenkeeper.io/salimkayabasi/slack-chat.svg)](https://greenkeeper.io/)

Basic slack chat bot implementation

```$bash
npm i --save slack-chat
```

```$js
const bot = require('slack-chat');
bot.setParameters({/* options */});
bot.postMessage('your message', cb /*if you have*/);
```

## options

While creating your bot, you need pass some parameters to send chat message.


```$js
  const config = { 
    token, // slack bot token
    username, // username of your bot
    channel // channel name which message will be sent (#general is default channel)
  };
```
