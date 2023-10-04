const { SlashCommandBuilder, userMention, ComponentType, ActionRowBuilder, EmbedBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');
const os = require('node:os')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get bot\'s command list.'),
	/* async execute(interaction) {
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

	}, */
	async execute(interaction) {
		// Create the initial embed for the commands list
		const embed = new EmbedBuilder()
		  .setAuthor({
			name: `${interaction.user.displayName}`,
			iconURL: `${interaction.user.avatarURL()}`,
		  })
		  .setTitle("Commands list")
		  .setDescription("Choose below from various command's categories, the one that matches your needs!")
		  .setColor("#8c00ff");
	  
		// Create the select menu for command categories
		const select = new StringSelectMenuBuilder()
		  .setCustomId('category')
		  .setPlaceholder('Choose command category')
		  .addOptions(
			new StringSelectMenuOptionBuilder()
			  .setLabel('Misc')
			  .setDescription('General commands that really don\'t have a specific category.')
			  .setValue('misc')
		  );
	  
		// Create the action row with the select menu
		const row = new ActionRowBuilder()
		  .addComponents(select);
	  
		// Create the embed for the misc commands list
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
			}
		  )
		  .setColor("#8c00ff");
	  
		// Send the initial response with the embed and action row
		const response = await interaction.reply({
		  embeds: [embed],
		  components: [row],
		});
	  
		// Create a collector to handle select menu interactions
		const collector = response.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 3_600_000 });
	  
		// Handle select menu interaction events
		collector.on('collect', async i => {
		  // Get the selected value from the select menu
		  const selection = i.values[0];
	  
		  // Handle the 'misc' category selection
		  if (selection === 'misc') {
			// Reply with the misc commands embed
			i.reply({
			  embeds: [misc],
			  content: `${userMention(i.user.id)}`,
			  components: [],
			  ephemeral: false
			});
		  }
		});
	  }
} 