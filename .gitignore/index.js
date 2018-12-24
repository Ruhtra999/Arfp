const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&?")

bot.on('ready',() => {
    
    bot.user.setStatus('dnd')
    
    bot.user.setGame('Prefix &?')
    
});

bot.on('message', message => { 
    
    if (sender.id === '526766807953178624') {
        return;
    }
    
    if (message.content === "test priv"){
        message.author.send("test fait msieur :3");
    }

    if(message.content === "Arfp"){
        message.reply("Oui?");
    }
    
    if (msg.includes('FDP')) {
        message.delete();
        message.author.send('Linsulte **fdp** est interdite.')
    }

});

bot.on('message', async message => {
    
        if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Tu na pas la permission.");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois mettre un nombre de messages à supprimer.")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont bien été supprimé.`);
        });
    }
    
});

bot.login(process.env.TOKEN);
