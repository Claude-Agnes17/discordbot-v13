const {CommandInteraction, MessageEmbed} = require('discord.js')
const { execute } = require('./helpme')

module.exports = {
    name: "ping",
    description: "ping 답변",
    /**
     * @param {CommandInteraction} interaction
     */
    execute(message) {
        const Response = new MessageEmbed()
            .setColor("GREEN")
            .addField("pong", "답변완료", false)
        message.reply({embeds: [Response]})
    }
}