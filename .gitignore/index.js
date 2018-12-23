const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&?")

bot.on('message', async message => { 

    if(message.content === "Arfp"){
        message.reply("Oui?");
    }

});

bot.login(process.env.TOKEN);
