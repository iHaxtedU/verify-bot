const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});

  //bot.user.setGame("on SourceCade!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}verify`){
let gRole = message.guild.roles.find(`name`, "Members");
    let rRole = message.guild.roles.find(`name`, "Unverified");
    
 message.member.addRole(gRole.id);
    message.member.removeRole(rRole.id);
    message.author.send("You Have Successfully Verified Please Follow The Rules");
  }
 message.delete()
});

bot.login(process.env.botToken);
