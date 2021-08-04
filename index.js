const Discord = require('discord.js')
const client = new Discord.Client()
require('discord-buttons')(client)
const disbut = require("discord-buttons")

client.on('message', (message) => {
    try {
        if (!message.author.bot) {
            if (message.content.length != 6 || (/[^a-z]/i.test(message.content))) {
                message.fetch(message.id).then(msg => msg.delete())
            } else {
                const gameCode = message.content.toUpperCase()
                
                message.fetch(message.id).then(msg => msg.delete())
                let button = new disbut.MessageButton()
                button.setLabel("deactivate")
                button.setStyle("blurple")
                button.setID('disable-the-game-' + Date.now())
                const embed = new Discord.MessageEmbed()
                embed.setColor('blurple')
                embed.setTitle(message.member.displayName + ' created a lobby: ' + gameCode)
                message.channel.send(embed, button).then((sendedMessage) => {
                    client.on('clickButton', async (button) => {
                        await button.reply.send('GAME IS ALREADY INACTIVE!')
                    })
                })
            }
        }
    } catch (e) {

    }
})

const getAuthorDisplayName = async (msg) => {
    const member = msg.guild.member(msg.author)
    return member ? member.nickname : msg.author.username
}

client.login(process.env.DISCORD_BOT_TOKEN)
