const Discord = require('discord.js');
const bot = new Discord.Bot();

bot.on('ready', () => {
  
  bot.user.setStatus('dnd')
  
});

bot.login(process.env.TOKEN);
