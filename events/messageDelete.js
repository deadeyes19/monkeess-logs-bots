const { sendLog } = require('../utils/logger');

module.exports = {
  name: 'messageDelete',
  async execute(message) {
    if (!message.guild) return;
    if (message.author?.bot) return;

    await sendLog(
      message.guild,
      '🗑️ Mensagem apagada',
      `**Autor:** ${message.author?.tag || 'Desconhecido'}\n**Canal:** ${message.channel}\n**Conteúdo:** ${message.content || '*Sem conteúdo ou não estava em cache*'}`
    );
  }
};
