exports.run = function(ayane, msg, args) {
  if(msg.author.id != '280158289667555328') return msg.reply("**You** Don't have permission to execute `Javascript` code.")
  try {
    const code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

    msg.channel.send(clean(evaled), {code:"js"});
  } catch (err) {
   msg.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
  }
}

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
