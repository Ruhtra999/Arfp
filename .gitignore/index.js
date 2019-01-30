const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () => {
  
  bot.user.setStatus('dnd')
  
});

clent.login(process.env.TOKEN);
