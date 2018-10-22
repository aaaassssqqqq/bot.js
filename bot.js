const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on('message', message => {

              if(!message.channel.guild) return;

    var prefix = "$";

    if(message.content.startsWith('$bc')) {

    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);


    let request = `Requested By ${message.author.username}`;

    if (!args) return message.reply('**اكتب شي لي ارسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {

    msg.react('✅')

    .then(() => msg.react('❌'))

    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });

    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

    reaction1.on("collect", r => {

    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));

    message.guild.members.forEach(m => {

    var bc = new

       Discord.RichEmbed()

       .setColor('RANDOM')

         .setTitle('Click here to join server')
      
       .setURL('https://discord.gg/ujnTphe')

       .addField('Server', message.guild.name)

       .addField('Sender', message.author.username)

       .addField('Message', args)

    m.send({ embed: bc })

    msg.delete();

    })

    })

    reaction2.on("collect", r => {

    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));

    msg.delete();

    })

    })

    }

    });  
  

client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === "$help") {
   message.react("😜")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("$bc الرسالة", true)
	  .setColor("RANDOM")
      .addField("By:Dexter", true)
  message.channel.sendMessage({embed});

 }
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
const adminprefix = "-v";
const devs = [448656937601597452,448656937601597452];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});  

client.login(process.env.BOT_TOKEN);
