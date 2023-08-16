const { SlashCommandBuilder, userMention, ComponentType, ActionRowBuilder, EmbedBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');
const os = require('node:os')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get bot\'s command list.'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setAuthor({
				name: `${interaction.user.displayName}`,
				iconURL: `${interaction.user.avatarURL()}`,
			})
			.setTitle("Commands list")
			.setDescription("Choose below from various command's categories, the one that matches your needs!")
			.setColor("#8c00ff");


		const select = new StringSelectMenuBuilder()
			.setCustomId('category')
			.setPlaceholder('Choose command category')
			.addOptions(
				new StringSelectMenuOptionBuilder()
					.setLabel('Misc')
					.setDescription('General commands that really don\'t have a specific category.')
					.setValue('misc'),
			);


		const row = new ActionRowBuilder()
			.addComponents(select);

		const misc = new EmbedBuilder()
			.setAuthor({
				name: `${interaction.user.displayName}`,
				iconURL: `${interaction.user.avatarURL()}`,
			})
			.setTitle("Misc commands list")
			.addFields(
				{
					name: "\`/ping\`",
					value: `Get bot's latency and some "useful" informations`,
				})
			.setColor("#8c00ff")

		const response = await interaction.reply({
			embeds: [embed],
			components: [row],
		});


		const collector = response.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 3_600_000 });

		collector.on('collect', async i => {
			const selection = i.values[0];
			if (selection === 'misc') {
				i.reply({ embeds: [misc], content: `${userMention(i.user.id)}`, components: [], ephemeral: false })
			}
		});

	},
};