const { sendLog } = require('../utils/logger');

module.exports = {
  name: 'messageUpdate',
  async execute(oldMessage, newMessage) {
    if (!newMessage.guild) return;
    if (newMessage.author?.bot) return;
    if (oldMessage.content === newMessage.content) return;

    await sendLog(
      newMessage.guild,
      '📝 Mensagem editada',
      `**Autor:** ${newMessage.author?.tag || 'Desconhecido'}\n**Canal:** ${newMessage.channel}\n**Antes:** ${oldMessage.content || '*Sem conteúdo*'}\n**Depois:** ${newMessage.content || '*Sem conteúdo*'}`
    );
  }
};
