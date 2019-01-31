const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  
  client.user.setStatus('dnd')
  
});

clent.login(process.env.TOKEN);
