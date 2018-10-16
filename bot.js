const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`....');
var prefix = "$";


client.login(process.env.BOT_TOKEN);
