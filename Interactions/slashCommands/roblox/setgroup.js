const discord = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')
const config = require('../../../util/config.json')
const { MessageEmbed } = require('discord.js')
const schema = require('../../../util/guildSchema.js')
const mongo = require('mongoose')
const roblox = require('noblox.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('setgroup')
    .setDescription('set the group for the server')
    .addStringOption(option => option.setName('group').setDescription('the group to set').setRequired(true)),
    cooldown: 5000,
    async execute(interaction) {
        const group = interaction.options.getString('group')
        const guildID = interaction.guild.id
        // check if group is valid
        const groupData = await roblox.getGroup(group)
        if (!groupData) {
            interaction.reply('That group does not exist')
            return
        }



        try {
            const data = await schema.find({ guildID: guildID }).exec();
            // check the group exists

            if (data.length === 0) {
                const newData = new schema({
                    guildID: guildID,
                    groupID: group,
                    logs: {
                        channelID: null,
                        enabled: false,
                    },
                    verify: true,
                })
                newData.save()
                const embed = new MessageEmbed()
                    .setTitle('Group set')
                    .setDescription(`The group has been set to ${group}`)
                    .setColor('GREEN')
                interaction.reply({ embeds: [embed] })

            } else {
                data[0].groupID = group
                data[0].save()
                const embed = new MessageEmbed()
                    .setTitle('Group set')
                    .setDescription(`The group has been set to ${group}`)
                    .setColor('GREEN')
                interaction.reply({ embeds: [embed] })
            }
        } catch (err) {
            console.log(err)
        }
    },
};


