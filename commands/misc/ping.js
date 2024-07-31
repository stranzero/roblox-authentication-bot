const { MessageEmbed } = require('discord.js')
const { green, greenTick } = require(`../../util/config.js`)

module.exports = {
	name: 'ping',
	aliases: ['p', 'pong'],
	description: 'check the bot\'s ping',
	cooldown: 5000,
	async execute(message) {
		const embed = new MessageEmbed().setColor(green).setDescription('Calculating ping...')
		message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } }).then((resultMessage) => {
			embed.setDescription(greenTick + ' Pong! ' + `\`${resultMessage.createdTimestamp - message.createdTimestamp}ms\``)
			resultMessage.edit({ embeds: [embed] })
		})
	},
}
