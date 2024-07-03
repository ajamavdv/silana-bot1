let toM = a => '@' + a.split('@')[0];

function handler(m, { groupMetadata }) {
  let ps = groupMetadata.participants.map(v => v.id);
  let a = ps.getRandom();
  let b;
  
  do {
    b = ps.getRandom();
  } while (b === a);
  
  m.reply(`*تهانينا لـ ${toM(a)}! 🩵 أنتما الآن متزوجين!*
*${toM(b)}, أنتما زوجين رائعين وأتمنى لكما شهر عسل جميل! 💙❤️‍🔥*`, null, {
    mentions: [a, b]
  });
}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'زواج'];
handler.group = true;

export default handler;
