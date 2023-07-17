const discord = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')
const config = require('../../../util/config.json')
const roles = require('../../../util/roles.json')
const { MessageEmbed } = require('discord.js')
const schema = require('../../../util/schema.js')
const mongo = require('mongoose')
const roblox = require('noblox.js')
const client = require("../../../main");



module.exports = {
    data: new SlashCommandBuilder()
    .setName('update')
    .setDescription('updates role of connected user'),
    cooldown: 5000,
    async execute(interaction) {
        user = interaction.user

        async function getUserRoleInGroup(userId, groupId) {
            try {
                const response = await axios.get(
                    `https://groups.roblox.com/v1/users/${userId}/groups/roles`
                );
                const groups = response.data.data;
        
                for (const group of groups) {
                    if (group.group.id === groupId) {
                        return group.role.name;
                    }
                }
        
                return "Not a member";
            } catch (error) {
                console.log(error);
                return "Error occurred";
            }
        }
        
        async function assignRole(member, roleInGroup) {
            const discordRole = roles[roleInGroup];
            if (discordRole) {
                const role = member.guild.roles.cache.find(r => r.id === discordRole)
                if (role) {
                    member.roles.add(role);
                } else {
                    console.log(`Role ${discordRole} not found.`);
                }
            } else {
                console.error(`No mapping found for Roblox role ${roleInGroup}.`);
            }
        }

        try {
            const res = await fetch(`https://yourdomain.com/discord/${user.id}`)
            const data = await res.json()

            if (data.length === 0) {
                interaction.reply('This user is not verified.');
            } else if (data.verified === false) {
                interaction.reply('This user is not verified.');
            } else {
                const guild = client.guilds.cache.get(config.guildID);
                const robloxID = data.robloxID;
                const member = await guild.members.fetch(user.id);
                const roleInGroup = await getUserRoleInGroup(`${robloxID}`, config.robloxGroupID);
                    
                assignRole(member, `${roleInGroup}`)

                const embed = new MessageEmbed()
                .setAuthor({ name: 'Alora API' })
                .setColor('BLUE')
                .addField("Role Given:", `${roleInGroup}`)
                .setTimestamp()
                .setFooter({ text: `Requested by ${interaction.user.tag}` });
                interaction.reply({ embeds: [embed] }); 

            }
        
        } catch (err) {
            console.log(err)
            interaction.reply('An error occurred.');
        }
    }
}
