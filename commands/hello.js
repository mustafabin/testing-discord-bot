const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Says nice things !'),
	async execute(interaction) {
		await interaction.reply('Your boosted');
	},
};