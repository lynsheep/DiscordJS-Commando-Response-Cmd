const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'Command Name',
            group: 'Ex',
            memberName: 'Ex',
            description: 'Desc of the command.',
            examples: ['Command example (!ex)']
        });
    }

    run(msg) {
        return msg.say('Output goes here');
    }
};