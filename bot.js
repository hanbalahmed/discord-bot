require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "code";
const CODE_ROLE_COMMAND = "role";

client.on("ready", () => {
  console.log("bot on discord");
});

client.on("messageDelete", (msg) => {
  msg.channel.send("DONT SPAM ⚓🔱");
});

client.on("message", (msg) => {
  if (msg.content === `${BOT_PREFIX}-${CODE_ROLE_COMMAND}`) {
    modUser(msg.member);
  }

  if (msg.content === "codeBot") {
    msg.reply("Hello woulD YOU like me to assign you a role???");
  }

  if (msg.content === "yes") {
    msg.reply("ok 🤖");
    msg.reply(`please type ${BOT_PREFIX}-${CODE_ROLE_COMMAND}  to continue`);
  }

  if (msg.content == "react") {
    msg.react("🚀");
    msg.reply("your message has a reaction");
  }
});

function modUser(member) {
  member.roles.add("785737790855970847");
  member.roles.add("785508229664473089");
}

client.login(process.env.BOT_TOKEN);
