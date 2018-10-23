const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";
cclient.on("message", message => {
    if (message.content.startsWith("$bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(${argresult}\n ${m});
  })
  message.channel.send(\${message.guild.members.filter( m => m.presence.status !== 'all').size}`mailbox  عدد المستلمين `);
  message.delete();
  };
  });
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Winter`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});
client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 2**`)


    }
});

client.login(process.env.BOT_TOKEN);
