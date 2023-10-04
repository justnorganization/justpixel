const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;
	
		const command = interaction.client.commands.get(interaction.commandName);
	
		if (!command) {
			throw new Error(`No command matching ${interaction.commandName} was found.`);
		}
	
		try {
			await command.execute(interaction);
		} catch (error) {
			throw new Error(`Error executing ${interaction.commandName}`);
		}
	}
};