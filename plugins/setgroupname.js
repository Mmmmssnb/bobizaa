var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (!text) return conn.reply(m.chat, 'هذا الأمر خاص بتغيير إسم المجموعة تكتب هكذا \n\n*.setgoupename* BOBIZA BOT GROUPE', m,  )
await conn.groupUpdateSubject(m.chat, text)
conn.reply(m.chat, `🚩 ${text ? `${text} *هو الاسم الجديد لهذه المجموعة*\n` : '*لم يعطوا اسما*'}`, m,  )
}
handler.help = ['تغير اسم البار']
handler.tags = ['owner']
handler.command = /^تغير اسم البار$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler
