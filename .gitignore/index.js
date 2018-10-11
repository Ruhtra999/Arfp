const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login(process.env.TOKEN)

var prefix = "j/";

client.user.setPresence({game: {name: `<help |by Ruhtra |serveurs : ${client.guilds.size}`}})
});

client.on('message', message => {

    if(message.content === "bonjour"){
        message.reply("Salut");
        console.log('Le bot dit salut');    
    }
    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log('Le bot dit salut');
    }
