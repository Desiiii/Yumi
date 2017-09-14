const Discord = require('discord.js');
const os = require('os');
exports.run = (yumi, msg) => {
seconds = parseInt((yumi.uptime / 1000) % 60),
minutes = parseInt((yumi.uptime / (1000 * 60)) % 60),
hours = parseInt((yumi.uptime / (1000 * 60 * 60)) % 24);
var uptime = "" + hours + " hrs, " + minutes + " mins and " + seconds + " seconds";
  let embed = new Discord.RichEmbed()
    .setTitle("Yumi || Stats")
    .setDescription("Shows the typical stats.")
    .addField("Uptime since last restart", `${uptime}`)
    .addField("Prefix", `a;`)
    .addField("Ram Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`)
    .addField("Node.js and NPM Version", `${process.version}`)
    .addField("Hoster || OS Version", `AugvstxD || ${os.platform()}`)
    .addField("Discord.js Version", `${Discord.version}`)
    .setTimestamp()
    .setFooter("yumi || Made by August")
  msg.channel.send({embed: embed})
}
