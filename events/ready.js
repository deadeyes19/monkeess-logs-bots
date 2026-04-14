const config = require('../config');
const { getLogChannel } = require('../utils/logger');

module.exports = {
  name: 'clientReady',
  once: true,
  async execute(client) {
    console.log(`Bot de logs online: ${client.user.tag}`);

    if (!config.botOnlineMessage) return;

    for (const guild of client.guilds.cache.values()) {
      const channel = await getLogChannel(guild);
      if (channel) {
        await channel.send('✅ Bot de logs online e conectado.');
      }
    }
  }
};
