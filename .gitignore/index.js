const discord = require('discord.js');
const bot = new discord.Client();

var prefix = ("%")

bot.on('ready', async () => {
  
  bot.user.setStatus('dnd');
  
});

 bot.on('message', message => {
   if (message.content === prefix  "ping"){
       message.channel.sendMessage("pong !");
   }
  
});

bot.login(process.env.TOKEN);
