const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&?")

bot.on('message', message => { 

    if(message.content === "Arfp"){
        message.reply("Oui?");
    }
client.user.setStatus("dnd");

});

bot.login(process.env.TOKEN);
