const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.TOKEN)



client.on ('message', message => {
  var prefix = 'tp!'
  
  if(message.content.startWith(`${prefix}say`)) {
    message.delete()
    var text = message.content.split(' ').slice(1).join(' ')
    if(!text) return message.reply('Dis quelque choses!')
   message.channel.send(text)
  }
  
  })
