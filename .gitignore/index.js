const Discord = require('discord.js');
const client = new Discord.Client();



client.on("ready", () => {
    client.user.setPresence({ game: { name: `ì̸̠̙̗̻̫̯͇̽͆̃̀̃̐̆̋͐͑́̔̚̚͝n̷̢̨̡̡̢̯̘̲̙̳̳̰͚̜̬͔̹̣͙̲̳̫̪̗̣͔̙̂̈́͐̃̽̉̾͌̉̌͋̆͜͝ ̸̨̢̢̢̛͔͇̺͍͈̞͔̤̦̳̘̙̙̭͇̪̙͔͇̤̭͍͉̺͈̤͇́͆͊̔̓̃̉̋͌͆́̎́̑̊̃͑̀͝ͅͅͅẄ̸̨̧̗͚̤̮̙͈̭̩̫̼͕̥̜̣̩̱͔̪͙̖͍́̅͗̔̏͆͑͒̃̿̈́͊̂̏͗͋͊͌͋́̀̅͘͘̚ơ̵̧̨̰͍̺̱̙͑̄̈̈͐̀͊̀̓̊̋̃͑͒͂̑̇́̓̎͛̇̚͝r̵̡͙̞͈̼̮̾͛̀̽̔̈́̏̍͋͑̇̑̉̊́̐͗͋͑͌͑̏͘͠ķ̸̨̩̯̭̝̫̳̹̱͈̩̖̩̣̊̾̂̎̋͆͗͑̾̽̅͌͂̋̇͊̓̂̆͂̊̈́̉̍̊̀̔̽̌͒̂͘͝͝`, type: 0} });




client.on ('message', message => {
  var prefix = '!'
  
  if(message.content.startWith(`${prefix}say`)) {
    var text = message.content.split(' ').slice(1).join(' ');
    if(!text) return message.reply('Dis quelque choses!');
   message.channel.send(text);
  }
  
  });
  
  client.login(process.env.TOKEN);
