const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (message) => {
    if (!message.author.bot) {
        if (message.content.length != 6 || (/[^a-z]/i.test(message.content)) || addEventListener.includes(message.content)) {
            message.fetch(message.id).then(msg => msg.delete())
        } else {
            const gameCode = message.content.toUpperCase()
            
            message.fetch(message.id).then(msg => msg.delete())
            message.channel.send(message.member.displayName + ': ' + gameCode)
        }
    }
})

const whiteList = [
    'end',
    'game over',
    'game is over',
    'inactive',
    'stop',
    'ended',
    'game ended',
    'game is ended',
    'stopped'
]

const getAuthorDisplayName = async (msg) => {
    const member = msg.guild.member(msg.author)
    return member ? member.nickname : msg.author.username
}

client.login(process.env.DISCORD_BOT_TOKEN);
