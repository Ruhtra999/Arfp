const discord = require('discord.js');
const bot = new discord.Client();

bot.on('ready', async () => {
  
  bot.user.setStatus('dnd');
  
});

bot.on('message', async () => {
  if message.content("ping");
  message.send("pong !");
  
});

bot.login(process.env.TOKEN);
