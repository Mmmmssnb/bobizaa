let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, اي خدمه مالك جوزكم 🥳✨*
*${toM(b)}, الف مبروك للعروسه🥳✨*\n\*ملاحظه ده منشن عشوائي للمرح فقط اذ لم يعجبك الأمر إذن ماتستخدمش الامر💗*`, null, {
mentions: [a, b]
})}
handler.help = ['زواج']
handler.tags = ['main', 'fun']
handler.command = ['زوج','زواج']
handler.group = true
export default handler
