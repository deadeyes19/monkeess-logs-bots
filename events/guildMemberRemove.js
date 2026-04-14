const { sendLog } = require('../utils/logger');

module.exports = {
  name: 'guildMemberRemove',
  async execute(member) {
    await sendLog(
      member.guild,
      '🚪 Membro saiu',
      `**Usuário:** ${member.user?.tag || 'Desconhecido'}\n**ID:** ${member.id}`
    );
  }
};
