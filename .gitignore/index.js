const Discord = require('discord.js');
const bot = new Discord.Bot();

bot.on('ready', async () => {
  
  bot.user.setStatus('dnd')
  
});

bot.login(process.env.TOKEN);
