const { MessageEmbed } = require('discord.js')
const { description } = require('./helpme')

module.exports = {
    name: "embed",
    description: "임베드 전송",
    execute(message) {
        const Response = new MessageEmbed()
        .setColor("GREEN")
        .addField("임베드", "임베드 전송 성공!", false)
        message.reply({embeds: [Response]})
    }
}