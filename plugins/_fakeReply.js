
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: 'support group', title: packname, body: 'grupo de soporte', thumbnailUrl: pp, sourceUrl: dygp }}} 
	
	//reply link PayPal
    global.fgig = { contextInfo: { externalAdReply: { mediaUrl: fgig, mediaType: 'VIDEO', description: '🌟', title: 'Github', body: 'apoyar al bot con una 🌟', thumbnailUrl: pp, sourceUrl: fgig }}}
	
	//reply link yt
    global.yt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: 'Suscribete : ' + yt, title: 'YouTube', body: 'tutorial del instalación', thumbnailUrl: pp, sourceUrl: yt }}}

} 
export default handler
