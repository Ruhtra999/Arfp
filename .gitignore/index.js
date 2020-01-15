const discord = requiire('discord.js');
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
   
});
   
bot.login(processs.env.TOKEN);
