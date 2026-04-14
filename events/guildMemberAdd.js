const { sendLog } = require('../utils/logger');

module.exports = {
  name: 'guildMemberAdd',
  async execute(member) {
    await sendLog(
      member.guild,
      '👤 Membro entrou',
      `**Usuário:** ${member.user.tag}\n**ID:** ${member.id}`
    );
  }
};
