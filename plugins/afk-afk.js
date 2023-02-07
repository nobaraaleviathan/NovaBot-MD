//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  😴 AKF 
 ESTE USUARIOS ${conn.getName(m.sender)} ESTA INACTIVO. 
☣️ NO LOS ETIQUETE ☣️ 
☣️ MOTIVOS: ${text ? text : ''}
  `)
}
handler.help = ['afk <razon>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
