// Init project
const express = require('express');
const app = express();
const TelegramBot = require('node-telegram-bot-api');
const bodyParser = require('body-parser');

const Sankhya = require('./sankhya.js');

const url = 'https://fire-land.glitch.me';
const port = process.env.PORT;


app.use(bodyParser.json());
 
// Token
const token = process.env.TOKEN;
 
// Create a bot
const bot = new TelegramBot(token);

bot.setWebHook(`${url}/bot${token}`);


app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

bot.onText(/\/start/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = 'Hi, this is a SankhyaBot. If you want to calculate any Sankhya string, just type /sank YOUR_STRING to calculate'; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/sank (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = Sankhya.SankiApp(match[1]);
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});


// listen for requests 
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
