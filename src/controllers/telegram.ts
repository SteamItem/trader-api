import TelegramBot = require('node-telegram-bot-api');
import config = require('../config');
const bot = new TelegramBot(config.TELEGRAM_TOKEN, {polling: true});

async function sendMessage(message: string) {
  return bot.sendMessage(config.TELEGRAM_CHAT_ID, message);
}

export = {
  sendMessage
}