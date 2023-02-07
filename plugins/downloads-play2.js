
import { youtubeSearch } from '@bochilteam/scraper'
import yts from 'yt-search'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (!text) throw `Que esta buscado? ingrese el nombre del tema Ingresa\nEjemplo*\n*${usedPrefix + command}* bad bunny `
    m.react('📀')
    let result = await yts(text)
    let ytres = result.all
    let listSections = []
	Object.values(ytres).map((v, index) => {
	listSections.push([`${index}┃ ${v.title}`, [
          ['🎶  AUDIO', `${usedPrefix}fgmp3 ${v.url}`, `▢ ⌚ *Duración:* ${v.timestamp}\n▢ 👀 *Vistas:* ${v.views}\n▢ 📌 *Título* : ${v.title}\n▢ 📆 *Publicado:* ${v.ago}\n`],
          ['🎥 VIDEO', `${usedPrefix}fgmp4 ${v.url}`, `▢ ⌚ *Duración:* ${v.timestamp}\n▢ 👀 *Vistas:* ${v.views}\n▢ 📌 *Título* : ${v.title}\n▢ 📆 *Publicado:* ${v.ago}\n`]
        ]])
	})
	return conn.sendList(m.chat, '  ≡ *Buscado 🔎', `\n 📀 Aqui una lista de resultados de :\n *${text}*`, fgig, `selecciones aqui`, listSections, m)
}
handler.help = ['play2']
handler.tags = ['downloader']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 

export default handler
