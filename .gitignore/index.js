const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = "j/";

bot.on('ready', function () {
  bot.user.setGame('j/help').catch(console.error)
})

bot.on('message', message => {

  if(message.content === "Bonjour"){
    message.channel.send("Bonjour").catch(console.error);
  }
  
if(message.content === prefix + "help"){
  var help_embed = new Discord.RichEmbed()
  .setColor("#0000CC")
  .setTitle("Commandes du bot :")
  .setDescription("Prefix du bot : j/")
  .addField("help", "L'endroit ou vous êtes maintenant ^^")
  .setFooter("Prefix du bot : j/")
  message.channel.sendMessage(help_embed).catch(console.error);
}
});

bot.login(process.env.TOKEN)
