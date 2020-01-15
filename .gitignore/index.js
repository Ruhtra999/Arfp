const discord = require('discord.js');
const bot = new discord.Client();

var prefix = ("tp%")

bot.on('ready', async () => {
  
  bot.user.setStatus('dnd');
  
  bot.user.setGame("pRoJeCt T iN cOnStRuCtIoN");
  
});

 bot.on('message', message => {
   if (message.content === prefix + "ping"){
       message.channel.sendMessage('pong ! `' + `${message.createdTimestamp - Date.now()}` + 'ms`');
   }
   
    if (cmd === "say") {
        
        if (message.deletable) message.delete();

        if (args.length < 0) return message.reply(`Rien a dire ?`).then(m => m.delete(5000));
        
        
        const roleColor = message.guild.me.highestRole.hexColor;

        
      
        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" :  roleColorv)
                .setTimestamp()
                .setImage(client.user.displayAvatarURL)
                .setAuthor(message.author.username, message.author.displayAvatarURL);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
});
   
bot.login(process.env.TOKEN);
