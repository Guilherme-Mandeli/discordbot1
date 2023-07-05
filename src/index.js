/*
 * Variables
 */
const { client } = require('./requeriments');
const {
	thinkVoiceChannelName,
	applyVoiceChannelName,
	nameChanges,
	channelCache,
} = require('../manager/voiceChannelManager');

/*
 * Content
 */
client.on('ready', async () => {
	nameChanges.clear();
	channelCache.clear();

	console.log(`✅ ${client.user.username} connected!`);

	const guild = client.guilds.cache.get(process.env.GUILD_ID);
	guild.channels.cache
		.filter((channel) => channel.type === 'voice')
		.forEach((channel) => {
			channelCache.set(channel.id, channel);
		});

	setInterval(applyVoiceChannelName, 5000);
});

client.on('voiceStateUpdate', async (oldState, newState) => {
	const newChannel = newState.channel;
	const oldChannel = oldState.channel;

	thinkVoiceChannelName(oldChannel, newChannel);
});

client.on('messageCreate', (message) => {
	if (message.author.bot) return;

	if (message.content === 'ping') {
		message.reply('Pong!');
	}
});

client.login(process.env.CLIENT_TOKEN);
