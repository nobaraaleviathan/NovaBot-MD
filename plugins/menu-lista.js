import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 

let pp = '.media/menu2.jpg'
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, diamond, registered, self, level, role } = global.db.data.users[m.sender]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
}) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

const sections = [  
{
title: `ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ ✨ sᴇʟᴇᴄᴄɪᴏɴᴇs ᴀǫᴜɪ`,
rows: [
       {title: "/info", description: "para vez el cuentos grupos esta el bot", rowId: `${usedPrefix}grouplist`},
        {title: "/creador", description: "numero del creador", rowId: `${usedPrefix}owner`},
        {title: "/menu completo", description: "para vez la lista del menu completo", rowId: `${usedPrefix}menucompleto`},
      {title: "/hidetag", description: "Para mencionar a todos con un texto", rowId: `${usedPrefix}hidetag`},
      {title: "/tagall️", description: "Para mencionar a todos en una lista", rowId: `${usedPrefix}tagall`},
      {title: "/del", description: "Para eliminar un mensaje del bot", rowId: `${usedPrefix}del`},
              {title: "/work", description: "para trabaja y ganar xp", rowId: `${usedPrefix}work`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `~ HOLA ${taguser}*`, footer: `
╭┄〔 ≪ •🌐• ≫ 〕┄⊱
┆📡 ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀʟ ᴍᴇɴᴜ ʟɪsᴛᴀ
┆◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┆🎁 ɪɴғᴏ  ᴅᴇʟ ʙᴏᴛ 🎁
┆◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┆□ ⏱️ *ʜᴏʀᴀ:* ${time}    
┆□ ⏰ *ᴀᴄᴛɪᴠɪᴅᴀᴅ:* ${uptime}
┆□ 𓃠 *ᴠᴇʀsɪᴏɴ ᴅᴇʟ ʙᴏᴛ:* ${vs}
┆□ 👥 *ᴜsᴜᴀʀɪᴏ(s):* ${Object.keys(global.db.data.users).length} 
┆□ ♨️ *ᴍᴏᴅᴏ:* ${self ? '*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*' : '*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*'}
┆◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┆💞 ɪɴғᴏ ᴅᴇʟ ᴜsᴜᴀʀɪᴏ 💞
┆◤━━━━━ ☆. ∆ .☆ ━━━━━◥
┆□ 👑 ᴘʀᴇᴍɪᴜᴍ: ${user.premiumTime > 0 ? '✅' : '❌'}
┆□ ❇️ ʀᴇɢɪsᴛʀᴀᴅᴏ: ${registered ? '✅': '❎'}
┆□ 🎖️ ɴɪᴠᴇʟ: ${level}
┆□ 💎 ᴅɪᴀᴍᴀɴᴛᴇs: ${diamond}
┆□ 🧰 ᴇxᴘᴇʀɪᴇɴᴄɪᴀ: ${exp}
└────ׂ─ׂ─ׂ─ׂ─────
*ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ ✨*`, pp,
title: null,
buttonText: "🅗🅐🅖🅐 🅒🅛🅘🅒🅚 🅐🅠🅤🅘", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.register = true
export default handler


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `𝙱𝚄𝙴𝙽𝙾𝚂 𝙳𝙸𝙰𝚂 | 𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶`
  if (time >= 4) {
    res = `𝙱𝚄𝙴𝙽𝙾𝚂 𝙳𝙸𝙰𝚂 | 𝙶𝙾𝙾𝙳 𝙼𝙾𝚁𝙽𝙸𝙽𝙶`
  }
  if (time >= 11) {
    res = `𝙱𝚄𝙴𝙽𝙰𝚂 𝚃𝙰𝚁𝙳𝙴𝚂 | 𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶`
  }
  if (time >= 15) {
    res = `𝙱𝚄𝙴𝙽𝙰𝚂 𝚃𝙰𝚁𝙳𝙴𝚂 | 𝙶𝙾𝙾𝙳 𝙴𝚅𝙴𝙽𝙸𝙽𝙶`
  }
  if (time >= 17) {
    res = `𝙱𝚄𝙴𝙽𝙰𝚂 𝙽𝙾𝙲𝙷𝙴𝚂 | 𝙶𝙾𝙾𝙳 𝙽𝙸𝙶𝚃𝙷`
  }
  return res
} 