/*
 * Config
 */
require("dotenv").config();
const prefix = process.env.PREFIX;

/*
 * Discord.js
 */
const { Client, IntentsBitField, Collection } = require("discord.js");

/*
 * Client
 */
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates,
  ],
});

/*
 * Export variables
 */
module.exports = {
  //config
  prefix,

  // discord.js
  Client,
  IntentsBitField,
  Collection,

  // client
  client,
};
