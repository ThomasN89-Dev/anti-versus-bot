require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", (msg) => {
  const forbiddenWords = ["versus", "Versus", "Nomura", "nomura"];
  forbiddenWords.map((word) => {
    console.log(word);
    if (msg.content.includes(word)) {
      msg.reply("DON'T PULL A NOMURA ON ME PLS");
      msg.react("🤡");
    }
  });
});

client.login(process.env.BOT_TOKEN);
