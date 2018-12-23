const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "&?";

bot.on('message', message => {

  if(message.content === "Bonjour"){
    message.channel.send("Salut").catch(console.error);
  }

bot.login(process.env.TOKEN);
