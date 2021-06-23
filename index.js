require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

const versus = "versus";
const Versus = "Versus";

client.on("message", (msg) => {
  if (msg.content.includes(versus) || msg.content.includes(Versus)) {
    msg.reply("DON'T PULL A NOMURA ON ME PLS");
    msg.react("🤡");
    msg.react("🤡");
  }
});

client.login(process.env.BOT_TOKEN);
