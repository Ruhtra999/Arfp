const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&?")

bot.on('ready',() => {
    
    bot.user.setStatus('dnd')
    
    bot.user.setGame('Prefix &?')
    
    if (message.channel.id === '526729733996675072') {
        message.channel.send("Le bot c'est démarré");
    
});

bot.on('message', message => { 

    if(message.content === "Arfp"){
        message.reply("Oui?");
    }

});

bot.login(process.env.TOKEN);
