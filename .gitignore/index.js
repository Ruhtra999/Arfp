const Discord = require('discord.js');
const client = new Discord.Client();



Client.on("ready", () => {
    Client.user.setPresence({ game: { name: `aww`, type: 0} });




Client.on ('message', message => {
  var prefix = '!'
  
  if(message.content.startWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ');
    if(!text) return message.reply('Dis quelque choses!');
   message.channel.send(text);
  }
  
  });
  
  client.login(process.env.TOKEN);
