const discord = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')
const config = require('../../../util/config.js')
const { MessageEmbed } = require('discord.js')
const schema = require('../../../util/schema.js')
const mongo = require('mongoose')
const roblox = require('noblox.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('get a roblox users profile')
    .addUserOption(option => option.setName('user').setDescription('the user to get the profile of'), false),
    cooldown: 5000,
    async execute(interaction) {
    user = interaction.options.getUser('user')
    if (!user) {
        user = interaction.user
    }
    
    try {
        const data = await schema.find({ discordID: user.id }).exec();

        if (data.length === 0) {
            interaction.reply('An error occurred');
        } else if (data[0].verified === false) {
            interaction.reply('This user is not verified');
        } else {
            const robloxID = data[0].robloxID;
            const username = data[0].robloxUsername;
            const embed = new MessageEmbed()
                .setTitle(`${username}'s profile`)
                .setURL(`https://www.roblox.com/users/${robloxID}/profile`)
                .setColor('BLUE')                
		        .addFields(
                    { name: 'Username', value: `${username}` },
                    { name: 'ID', value: `${robloxID}` },
                )
                .setTimestamp()
                .setFooter({ text: `Requested by ${interaction.user.tag}` });
            interaction.reply({ embeds: [embed] });
        }
    } catch (err) {
        console.log(err)
        interaction.reply('An error occurred');
    }
    }
}
