const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&?")

bot.on('ready',() => {
    il
    bot.user.setStatus('dnd')
    
    bot.user.setGame('Prefix &?')
    
});

bot.on('message', message => { 

    if(message.content === "Arfp"){
        message.reply("Oui?");
    }

});

bot.login(process.env.TOKEN);
