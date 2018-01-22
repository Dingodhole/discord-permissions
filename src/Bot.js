import Discord from 'discord.js'
import config from './config.json'

const bot = new Discord.Client()

bot.login(config.token)
.catch((e) => {
	console.log(e)
})

//Informs successful login to the console
bot.on('ready', () => {
	console.log('Connected')
	console.log("Bot has started. Logged in as " + bot.user.username + ". Connected to " + bot.guilds.size + " servers")
	bot.user.setGame(config.currentGame)
});

bot.on('message', async (message) => {
	let content = message.content.toLowerCase()
	if (content.substring(0, 1) == config.prefix) {
		let args = content.substring(1).split(' ')
		let cmd = args[0]

		//List of awailable commands
		switch(cmd) {
			default:
        message.channel.sendMessage('pong')
		}
	}
})

export default bot
