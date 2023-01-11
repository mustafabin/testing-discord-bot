const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('my-rank')
		.setDescription('Says nice things !'),
	async execute(interaction) {

		await interaction.reply('Your a boosted fuck ');
	},
};