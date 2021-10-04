const Client = require("./Client.js");
const Discord = require("discord.js");

/**
 * @param {Discord.Message | Discord.Interaction} message
 * @param {string[]} args
 * @param {string[]} con
 * @param {string[]} rows
 * @param {Client} client
 */
function RunFunction(message, args, con, serverstats, userstats, client) {}

class Command {
	/**
	 * @typedef {{name: string, aliases: array, description: string, run: RunFunction}} CommandOptions
	 * @param {CommandOptions} options
	 */
	constructor(options) {
		this.name = options.name;
		this.aliases = options.aliases;
		this.description = options.description;
		this.run = options.run;
	}
}

module.exports = Command;
