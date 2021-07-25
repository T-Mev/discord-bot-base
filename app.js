const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv').config();

client.login(process.env.TOKEN);

client.once('ready', () => {
    console.log('Client Ready!');
});

