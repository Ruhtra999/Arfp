const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = "j/";

bot.on('ready', function () {
  bot.user.setGame('j/help').catch(console.error)
})

bot.on('message', message => {

  if(message.content === "Bonjour"){
    message.channel.send("Salut").catch(console.error);
  }
  
if(message.content === prefix + "help"){
  var help_embed = new Discord.RichEmbed()
  .setColor("#0000CC")
  .setTitle("Commandes du bot :")
  .setDescription("Prefix du bot : j/")
  .addField("j/help", "L'endroit ou vous êtes maintenant ^^")
  .addField("j/kick", "Pour ban un utilisateur mais il peux rerejoindre directement.")
  .addField("j/serverlist", "Fait apparaître la liste des serveurs où est le bot et le nombre de membres du serveur")
  .setFooter("Prefix du bot : j/")
  message.channel.sendMessage(help_embed).catch(console.error);
}
  
case("serverlist");
  message.channel.send(bot.guild.map(r => r.name + ` | **${r.memberCount}** membres`))
  
if(message.content.startsWith(prefix + "kick")){
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission pour kick !");

  if(message.mentions.users.size === 0) {
      return message.channel.send("L'utilisateur na pas été mentionner !")
  }
  var kick = message.guild.member(message.mentions.users.first());
  if(!kick) {
      return message.channel.send("L'utilisateur a l'air invalide !")
  }

  if(message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
      return message.channel.send("Donner moi là permision pour kick !");
  }

  kick.kick().then(member => {
      message.channel.send(`${member.user.username} est kick pas ${message.author.username}`);
  });
}
  
});

bot.login(process.env.TOKEN)
