const Discord = require('discord.js');
const bot = new Discord.Client();

else if (message === 'bonjour')){
    message.reply('bonjour à toi ');
}

client.login(process.env.TOKEN)

var prefix = "<";

client.on("ready", () => {
    console.log("je suis prêt !");
    client.user.setPresence({game: {name: <help |by Ruhtra |serveurs : ${client.guilds.size}}})
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

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#000099")
        .setTitle("Voici mes commandes a utiliser ")
        .setDescription("je suis un bot normal et voici mes commandes.")
        .addField("<help", "Affiche les commandes du bot.")
        .addField("Bonjour", "le bot dit salut.")
        .addField("<mystatistiques", "Le bot vous envoie des informations sur votre profil.")
        .addField("<info", "Donne des informations sur le serveur et sur moi.")
        .addField("<ban", "Ban un utilisateur ! : utilisation de la commande exemple : <ban Ruhtra")
        .addField("<clear", "Supprime le nombre de messages indiqué. : utilisation de la commande exemple : <clear 17")
        .setThumbnail(message.author.avatarURL)
        .setFooter("Menu des commandes.")
        message.channel.sendMessage(help_embed);console.log("Un utilisateur a effectué la commande <help")
    }

    if(message.content === prefix + "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#000099")
        .setTitle("Voici mes informations et celle du serveur !")
        .addField (" robot Nom :", ${client.user.tag}, true)
        .addField("Descriminateur du bot hash", #${client.user.discriminator})
        .addField("ID id ", ${client.user.id})
        .addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de catégories et de salons", message.guild.channels.size)
        .setFooter("Info sur moi et le serveur !")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectuer la commande <info")
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission");
