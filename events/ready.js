const mongoose = require('mongoose')
const schema = require('../util/schema.js')
const config = require('../util/config.js')
module.exports = {
	name: 'ready',
	once: 'true',
	async execute(client) {
		//Status options: online, idle, dnd, invisible
		//Activity options: PLAYING, STREAMING, WATCHING, LISTENING, COMPETING
		client.user.setPresence({
			activities: [{ name: '/verify to verify', type: 'PLAYING' }],
			status: 'idle',
		})
		console.log(`\x1b[38;2;87;117;144m[Client] \x1b[32m${client.user.username} \u001b[37mis online!`)

	await mongoose
    .connect(config.MongooseURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
		console.log(`\x1b[38;2;87;117;144m[Database] \x1b[32mMongoDB \u001b[37mis connected!`)
    })

	},
}
