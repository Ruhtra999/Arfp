const discord = require('discord.js');
const bot = new discord.Client();

var prefix = ("tp%")

bot.on('ready', async () => {
  
  bot.user.setStatus('dnd');
  
  bot.user.setGame("pRoJeCt T iN cOnStRuCtIoN");
  
});

 bot.on('message', message => {
   if (message.content === prefix + "ping"){
       message.channel.sendMessage('pong ! `' + `${message.createdTimestamp - Date.now()}` + 'ms`');
   }
   
});
   
bot.login(process.env.TOKEN);
