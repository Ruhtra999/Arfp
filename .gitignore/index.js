const discord = require('discord.js');
const bot = new discord.Client();

bot.on('ready', async () => {
  
  bot.user.setStatus('dnd');
  
});

bot.login(process.env.TOKEN);
