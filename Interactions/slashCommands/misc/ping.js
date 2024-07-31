const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { green, greenTick } = require(`../../../util/config.js`)

//? A simple ping slash command.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('check the bot\'s ping'),
	cooldown: 5000,
	async execute(interaction) {
		const embed = new MessageEmbed().setColor(green).setDescription('Calculating ping...')
		const loadingMessage = await interaction.reply({ embeds: [embed], fetchReply: true })
		embed.setDescription(greenTick + ' Pong! ' + `\`${loadingMessage.createdTimestamp - interaction.createdTimestamp}ms\``)
		interaction.editReply({ embeds: [embed] })
	}
}
