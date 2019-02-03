const discord = require('discord.js');
const bot = new discord.Client();

var prefix = ("%")

bot.on('ready', async () => {
  
  bot.user.setStatus('dnd');
  
});

 bot.on('message', message => {
   if (message.content === prefix + "ping"){
       message.channel.sendMessage('pong ! `' + `${message.createdTimestamp - Date.now()}` + 'ms`');
   }
  
});

bot.on('message', fonction(message) {
       const status = member.presence.status;
 
if (['idle', 'online', 'dnd', 'invisible'].includes(status)) {
     
    member.send('...');
    message.reply('...');
     
}
  
});

const id = message.guild.roles.find('name', 'Team C.A.T').id; // Changer "Modérateur" par le nom donné au rôle de modératio

message.guild.roles.get(id).map(member => {
    // ...
});


bot.login(process.env.TOKEN);
