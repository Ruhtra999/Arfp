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
   if (message.conntent === prefix + "clear"){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Non.");
  if(!args[0]) return message.channel.send("non");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));

}
                                           
}
  
});

bot.login(process.env.TOKEN);
