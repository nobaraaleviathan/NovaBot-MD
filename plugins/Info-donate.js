
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇💖 𝙃𝙤𝙡𝙖!!*
*┇ ᴛᴇ ᴀɢʀᴀᴅᴇᴢᴄᴏ, ᴘᴏʀ ᴀʏᴜᴅᴀʀᴍᴇ ʏ ᴘᴏʀ ᴜsᴀʀ ᴍɪ ʙᴏᴛ*
*┇ ɢʀᴀᴄɪᴀs, ʏᴏ ɴᴏ ᴘɪᴅᴏ ᴅɪɴᴇʀᴏ.*
*┇ ɴᴏ ᴛᴇɴɢᴏ ᴘᴀʏᴘᴀʟ. sᴏᴍᴏs ʜᴜᴍɪʟᴅᴇs,*
*┇ ᴘᴇʀᴏ sɪ ǫᴜɪᴇʀᴇs ᴘᴜᴇᴅᴇ ᴀᴘᴏʏᴀʀ ᴀʟ ʙᴏᴛ.*
*┇ sᴜsᴄʀɪʙɪᴇɴᴅᴏsᴇ ᴀʟ ᴄᴀɴᴀʟ ᴏғɪᴄɪᴀʟ ᴅᴇʟ ʙᴏᴛ*
*┇ ᴘᴀʀᴀ ǫᴜᴇ ᴄᴀᴅᴀ ᴠᴇᴢ sᴏᴍᴏs ᴍᴀs ᴇʟ ʟᴀ ғᴀᴍɪʟɪᴀs ʟᴏʟɪʙᴏᴛ*
*┇ ʏᴀ ᴄᴏɴ ᴇsᴏ sᴏʏ ғᴇʟɪᴢ.😄*
*┇ ʏ ᴀᴘᴏʏᴀʀʟᴏs ᴄᴏɴ ᴜɴᴀ 🌟 ᴇʟ ɢɪᴛʜᴜʙ ᴏғɪᴄɪᴀʟ ᴅᴇʟ ʙᴏᴛ*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *ʏᴏᴜᴛᴜʙᴇ | sᴜsᴄʀɪʙɪʀᴛᴇ 🔕*
*┃*  *https://www.youtube.com/@TheLoliBot-MD*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  *ɢɪᴛʜᴜʙ 🌟*
*┃*  *
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  *ᴛɪᴋᴛᴏᴋ* 
*┃*  *https://www.tiktok.com/@thelolibot_md*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*   *ғᴀᴄᴇʙᴏᴏᴋ*
*┃* *https://facebook.com/groups/872989990425789/*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃*  *ᴀɢʀᴀᴄɪᴍɪᴇɴᴛᴏs:*
*┃* *ᴛʜᴇ-ʟᴏʟɪʙᴏᴛ-ᴍᴅ ᴛɪᴇɴᴇ ғᴜɴᴄɪᴏɴᴇs ǫᴜᴇ ᴘᴇʀᴛᴇɴᴇᴢᴄᴀɴ*
*┃* *ᴀ ʟᴀs sɪɢᴜᴇɴᴛᴇs ᴇᴍᴘʀᴇsᴀ(s)|ᴏʀɢᴀɴɪᴢᴀᴄɪᴏɴ(ᴇs)*
*┃* *ᴘᴇʀsᴏɴᴀ(s):*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *ᴛʜᴇᴍʏsᴛɪᴄ-ʙᴏᴛ-ᴍᴅ*
*┃* *https://github.com/BrunoSobrino*
*┃* ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*┃* *ɢᴀᴛᴀʙᴏᴛ-ᴍᴅ*
*┃* *https://github.com/GataNina-Li/GataBot-MD*
*┃* *ɢʀᴀᴄɪᴀs!!!*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendButton(m.chat, don, 'Haga click en boton si quiere comprar o alquilar al bot', img, [['Buy Premium', `${usedPrefix}buyprem`]],m, rpyp)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
