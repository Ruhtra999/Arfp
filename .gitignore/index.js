const discord = require('discord.js');
const bot = new discord.Client();

var prefix = ("%")

bot.on('ready', async () => {
  
  bot.user.setStatus('dnd');
  
  bot.user.setGame("Que 2 membres dans la Team pour l'instant ;-;");
  
});

 bot.on('message', message => {
   if (message.content === prefix + "ping"){
       message.channel.sendMessage('pong ! `' + `${message.createdTimestamp - Date.now()}` + 'ms`');
   }
   
 bot.on('message', message => {
   if (message.content === prefix + "083668299876554194988362899733010723675756854879353456@everyone"){
       message.channel.sendMessage('%083668299876554194988362899733010723675756854879353456@everyone');
   }
  
});

bot.login(process.env.TOKEN);
