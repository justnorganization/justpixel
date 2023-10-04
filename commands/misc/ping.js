// Import necessary modules
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const os = require('os');

// Export module
module.exports = {
	// Define command data
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Gives latency and bot information'),

	// Execute command
	async execute(interaction) {
		// Calculate bot's uptime in seconds
		const seconds = interaction.client.uptime / 1000;

		// Create embed object
		const embed = {
			author: {
				name: interaction.user.displayName,
				iconURL: interaction.user.avatarURL(),
			},
			title: "Bot's information",
			fields: [
				{
					name: "Latency",
					value: `\`${Date.now() - interaction.createdTimestamp}ms\``,
				},
				{
					name: "Architecture",
					value: `\`${os.arch()}\``,
					inline: true,
				},
				{
					name: "Platform",
					value: `\`${os.platform()}\``,
					inline: true,
				},
				{
					name: "Uptime",
					value: `\`${seconds} seconds.\``,
					inline: true,
				},
			],
			color: "#00ff1e",
		};

		// Send the embed as a reply to the interaction
		await interaction.reply({ embed: embed });
	},
};