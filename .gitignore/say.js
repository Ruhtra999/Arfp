const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Non.");
      const botmessage = args.join(" ");
      message.delete().catch();
      message.channel.send(botmessage);

}

module.exports.help = {
  name: "say"
}
