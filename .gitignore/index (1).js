const Discord = require ('discord.js');

const client = new Discord.Client();

var prefix = "<";

client.login("NDUxNDAxNTgwODUyMjgxMzU0.DhORZQ.JkUaVkbekeuF-UBYsLBZJDN-YYU");

client.on("ready", () => {
    console.log("je suis prêt !");
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
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectué la commande <help")
    }

    if(message.content === prefix + "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#000099")
        .setTitle("Voici mes informations et celle du serveur !")
        .addField (" :robot: Nom :", `${client.user.tag}`, true)
        .addField("Descriminateur du bot :hash:", `#${client.user.discriminator}`)
        .addField("ID :id: ", `${client.user.id}`)
        .addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de catégories et de salons", message.guild.channels.size)
        .setFooter("Info sur moi et le serveur !")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectuer la commande <info")
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe");
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour ban")
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
        }
        
        )
    }

    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas la permission !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages a supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args^[0]} messages ont été supprimés !`);
        })
    }

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "mystatistiques":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#000099")
        .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
        .addField(`ID de l'utilisateur :id:`, msgauthor, true)
        .addField("Date de création de l'utilisateur :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Tu peux regarder tes messages privés ! Tu viens de recevoir tes statistiques !")
        message.author.send({embed: stats_embed});
        break;
    }

});