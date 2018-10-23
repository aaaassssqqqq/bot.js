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
      
       .setURL('https://discord.gg/rJTDx3N')

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

  client.on('message', async function (message)  {
if(message.content.startsWith(prefix+"server")) {
const vlevel = ['None', 'Low (Must have verified email)', 'Medium (Must be register for 5 mineuts)', 'High (Need to wait 10 minutes)', 'Very High (Need verified phone on account)']
const members = await message.guild.members.filter(m=> m.presence.status === 'online').size + message.guild.members.filter(m=> m.presence.status === 'idle').size + message.guild.members.filter(m=> m.presence.status === 'dnd').size  
message.channel.send(new discord.RichEmbed() 
.setAuthor(`${message.guild.name} [Server Icon URL]`, message.guild.iconURL)
.setURL(message.guild.iconURL)
.addField('🆔 ايدي السيرفر', message.guild.id, true)
.addField('👑 اونر السيرفر', message.guild.owner, true)
.addField('🗺 منطقة', message.guild.region, true)
.addField(`👥 الاعضاء [${message.guild.memberCount}]`, `${members} online` ,true)
.addField(`💬 القنوات`, `**${message.guild.channels.filter(c => c.type === 'category').size}** الاقسام | **${message.guild.channels.filter(c=> c.type === 'text').size}**روم كتابي | **${message.guild.channels.filter(c=> c.type === 'voice').size}** روم صوتي` ,true)
.addField(`💠 مستوى التحقق`, vlevel[message.guild.verificationLevel] ,true)
.addField(`👔 الرتب`, message.guild.roles.size ,true)
.addField(`📆 تم انشأوها`, message.guild.createdAt ,true)
)
}
})
  
  
    });

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ًWinter`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.login(process.env.BOT_TOKEN);
