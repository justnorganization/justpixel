const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const os = require('node:os')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Gives latency and bot informations'),
	async execute(interaction) {
		const seconds = interaction.client.uptime / 1000;
		const embed = new EmbedBuilder()
			.setAuthor({
				name: `${interaction.user.displayName}`,
				iconURL: `${interaction.user.avatarURL()}`,
			})
			.setTitle("Bot's information")
			.addFields(
				{
					name: "Latency",
					value: `\`${Date.now()- interaction.createdTimestamp }ms\``,
				},
				{
					name: "Architecture",
					value: `\`${os.machine}\``,
					inline: true
				},
				{
					name: "Platform",
					value: `\`${os.platform}\``,
					inline: true
				},
				{
					name: "Uptime",
					value: `\`${seconds} seconds.\``,
					inline: true
				}
			)
			.setColor("#00ff1e");


		await interaction.reply({ embeds: [embed] });
	},
};