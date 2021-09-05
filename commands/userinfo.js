const { MessageEmbed } = require('discord.js')
const moment = require('moment')

module.exports = {
    name: "userinfo",
    aliases: ['ui'],
    description: "유저 정보를 보여줍니다.",
    execute(message, args, commandName, client, Discord) {
        const Target = message.mention?.users?.First?.() || message.member
        console.log(message.author)
        const Member = message.guild.members.cache.get(Target.id)

        const Response = new MessageEmbed()
            .setAuthor(`${Target.user.tag}`)
            .setColor('GREEN')
            .addField("역할", `${Member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`)
            .addField("서버에 들어온 날짜", `${moment(Member.joinedAt).format('YYYY년 MM월 DD일, h:mm:ss')}`)
            .addField("명령어 사용 시간", `${moment(Target.createdAt).format('YYYY년 MM월 DD일, h:mm:ss')}`)
            message.reply({embeds: [Response]})
    }
}