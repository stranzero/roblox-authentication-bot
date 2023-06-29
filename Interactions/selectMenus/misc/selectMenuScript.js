module.exports = {
	name: 'select_example',
	async execute(interaction) {
		let picked = ''
		await interaction.values.forEach(async (value) => { picked += `${value}, ` })
		interaction.reply({
			content: `${picked} option selected.`,
			ephemeral: true,
		})
	},
}