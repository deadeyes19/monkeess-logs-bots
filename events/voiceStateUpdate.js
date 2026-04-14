const { sendLog } = require('../utils/logger');

module.exports = {
  name: 'voiceStateUpdate',
  async execute(oldState, newState) {
    const member = newState.member || oldState.member;
    const guild = newState.guild || oldState.guild;

    if (!member || !guild || member.user.bot) return;

    let text = null;

    if (!oldState.channelId && newState.channelId) {
      text = `**Usuário:** ${member.user.tag}\n**Entrou em:** <#${newState.channelId}>`;
    } else if (oldState.channelId && !newState.channelId) {
      text = `**Usuário:** ${member.user.tag}\n**Saiu de:** <#${oldState.channelId}>`;
    } else if (oldState.channelId && newState.channelId && oldState.channelId !== newState.channelId) {
      text = `**Usuário:** ${member.user.tag}\n**Mudou de:** <#${oldState.channelId}>\n**Para:** <#${newState.channelId}>`;
    }

    if (!text) return;

    await sendLog(guild, '🔊 Movimento em call', text);
  }
};
