const { MessageEmbed } = require('discord.js')
const { ContextMenuCommandBuilder } = require('@discordjs/builders');
const { lightBlue } = require(`../../../util/config.js`)
const schema = require('../../../util/schema.js')

module.exports = {
    data: new ContextMenuCommandBuilder()
    .setName('whois')
    .setType(2),
    cooldown: 5000,
    async execute(interaction, client) {
        try {
            const data = await schema.find({ discordID: interaction.targetId }).exec();
            if (data.length === 0) {
                interaction.reply('An error occurred');
            } else {
                const user = await client.users.fetch(interaction.targetId)
                const robloxID = data[0].robloxID;
                const username = data[0].robloxUsername;
                const embed = new MessageEmbed()
                    .setTitle(`${user.tag}'s roblox ID`)
                    .setColor(lightBlue)
                    .setDescription(`Here is your requested information about ${user.tag}`)
                    .addFields(
                        { name: 'Username', value: `${username}` },
                        { name: 'ID', value: `${robloxID}` },
                    )

                    .setTimestamp()
                    .setFooter({ text: `Requested by ${interaction.user.tag}` });
                    // send to there dms
                    user.send({ embeds: [embed] });

                    const embed2 = new MessageEmbed()
                    .setTitle(`Check your dms!`)
                    .setColor("GREEN")
                    .setDescription(`I have sent you a dm with the requested information about ${user}`)
                    .setTimestamp()
                    .setFooter({ text: `Requested by ${interaction.user.tag}` });
                    interaction.reply({ embeds: [embed2], ephemeral: true });

                
            }
        } catch (err) {
            console.log(err)
            interaction.reply('An error occurred');
        }
    }
}
