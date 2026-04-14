const { EmbedBuilder, ChannelType } = require('discord.js');
const config = require('../config');

async function getLogChannel(guild) {
  if (!guild) return null;

  return guild.channels.cache.find(channel =>
    (channel.type === ChannelType.GuildText || channel.type === ChannelType.GuildAnnouncement) &&
    channel.name.toLowerCase() === config.logChannelName.toLowerCase()
  ) || null;
}

function createEmbed(title, description) {
  return new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setTimestamp();
}

async function sendLog(guild, title, description) {
  const channel = await getLogChannel(guild);
  if (!channel) return;

  const embed = createEmbed(title, description);
  await channel.send({ embeds: [embed] });
}

module.exports = {
  getLogChannel,
  createEmbed,
  sendLog
};
