const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&?")

bot.on('ready',() => {
    
    message.send("Je suis près :3")
    
    bot.user.setStatus('dnd')
    
    bot.user.setGame('Prefix &?')
    
});

bot.on('message', message => { 

    if(message.content === "Arfp"){
        message.reply("Oui?");
    }

});

bot.login(process.env.TOKEN);
