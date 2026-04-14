const { sendLog } = require('../utils/logger');

module.exports = {
  name: 'guildMemberUpdate',
  async execute(oldMember, newMember) {
    const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
    const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));

    if (addedRoles.size > 0 || removedRoles.size > 0) {
      const lines = [
        `**Usuário:** ${newMember.user.tag}`,
        `**ID:** ${newMember.id}`
      ];

      if (addedRoles.size > 0) {
        lines.push(`**Cargos adicionados:** ${addedRoles.map(r => r.name).join(', ')}`);
      }

      if (removedRoles.size > 0) {
        lines.push(`**Cargos removidos:** ${removedRoles.map(r => r.name).join(', ')}`);
      }

      await sendLog(newMember.guild, '🎭 Alteração de cargos', lines.join('\n'));
    }

    if (oldMember.nickname !== newMember.nickname) {
      await sendLog(
        newMember.guild,
        '✏️ Nick alterado',
        `**Usuário:** ${newMember.user.tag}\n**Antes:** ${oldMember.nickname || 'Sem nick'}\n**Depois:** ${newMember.nickname || 'Sem nick'}`
      );
    }
  }
};
