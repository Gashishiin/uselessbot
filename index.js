var TelegramBot = require('node-telegram-bot-api');
var token = '';
var bot = new TelegramBot(token, {polling: true});
bot.on('text',function(msg){
    var messageChatID = msg.chat.id;
    var messageText = msg.text;
    if (messageText === '/start'){
        bot.sendMessage(messageChatID, 'Welcome to this chat');
    }
});

