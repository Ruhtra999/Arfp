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
  
if(message.content.startsWith(prefix + "kick")){
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!");

  if(message.mentions.users.size === 0) {
      return message.channel.send("Vous devez metionner un utilisaeur")
  }
  var kick = message.guild.member(message.mentions.users.first());
  if(!kick) {
      return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
  }

  if(message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
      return message.channel.send("Je n'ai pas la permission pour kick");
  }

  kick.kick().then(member => {
      message.channel.send(`${member.user.username} est kick pas ${message.author.username}`);
  });
}
  
});

bot.login(process.env.TOKEN)
