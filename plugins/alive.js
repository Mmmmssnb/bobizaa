import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│🦹 هاي يا , ${conn.getName(m.sender)}!
│🧛 مالك بيحبك  ✔️ البوت أون لاين الآن 
يمكنك إستخدامه عبر كتابة menu.
 ⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟𝑴𝑨𝑳𝑰𝑲⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟
 ده رقمي الاساسي 🧛
 <https://wa.me/+201030825867>
  ⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟𝑴𝑨𝑳𝑰𝑲⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟
  ده الروم بتاعي 🧛
  https://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC
╰────────────────────
*─[𝑩𝑶𝑻⃟☣️𝑴𝑨𝑳𝑰𝑲🍷🇰🇼]*💜✨
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['infobot']
handler.command = /^(بوت)$/i


export default handler
