
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const yts = require( 'yt-search')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const zee = require('./lib/api-alphabot')
const { color, bgcolor } = require('./lib/color')
const bad = JSON.parse(fs.readFileSync('./lib/bad.json'))
const _prem = require("./lib/premium");
const { uploadImages } = require('./lib/uploadimage')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { addBanned, unBanned, cekBannedUser } = require("./lib/banned")
const {getDateId, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } = require("./lib/user");
const { gethitUser, checkHit, AddHit, isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/user");
const { premium, _claim, sewa, user, ban } = require("./database/jsonfile");
const { addAutoClear,autoClearChat,checkAutoClear, checkDataName, createDataId, getDataId, addDataId, removeDataId, checkDataId, checkClaim, getClaim, expiredClaim, addUserClaim, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd")
const { smsg, formatp, tanggal,calender, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
thumbnail = ('./lib/hisoka.jpg')

// read database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

module.exports = zidni = async (zidni, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await zidni.decodeJid(zidni.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const senderNumber = sender.split("@")[0] 
        const from = mek.key.remoteJid	
	
        // Group
        const groupMetadata = m.isGroup ? await zidni.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const gcounti = global.gcount
		limitCount = global.limitCount
		autoLevel = global.autoLevel    		
		const isPremium = isCreator? true : _prem.checkPremiumUser(sender, premium)
        const gcount = isPremium ? gcounti.prem : gcounti.user
         let timestamp = speed()
         let latensi = speed() - timestamp
         const nama = `Speed ${latensi.toFixed(4)}s`
		const buttonsDefault = [{ urlButton: { displayText: `Email`, url : `zidniganz@yahoo.com`} },{ callButton: { displayText: `Contact`, phoneNumber : `${global.owner}` } },{ quickReplyButton: { displayText: `Sewa`, id: `yntks` } },{ quickReplyButton: { displayText: `Owner`, id: `repat` } },{ quickReplyButton: { displayText: `Script`, id: `ts` } }]		      
		const pickRandom = (arr) => {return arr[Math.floor(Math.random() * arr.length)]}
		const randomNomor = (angka) => {
        return Math.floor(Math.random() * angka) + 1}
        	const math = (teks) => {
            return Math.floor(teks)}  
     	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
        } catch (err) {
            console.error(err)
        }
	        let d1 = new Date(new Date + 3600000)
       let locale = 'id'
       let islam = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
       day: 'numeric',
       month: 'long',
       year: 'numeric'
       }).format(d1)
   	   var hariRaya = new Date('Apr 03, 2022 07:00:00')
			var sekarang = new Date().getTime();
			var Selisih = hariRaya - sekarang;
			var hari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			var jam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			var menit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			var detik = Math.floor( Selisih % (1000 * 60) / 1000);
		    const ultah = `${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`    
        myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
        myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
        var tgl = new Date();
        detik = tgl.getSeconds();
        menit = tgl.getMinutes();
        jam = tgl.getHours();
	    var ampm = jam >= 12 ? 'PM' : 'AM';
	    var day = tgl.getDate()
	    bulan = tgl.getMonth()
	    var thisDay = tgl.getDay(),
	    thisDay = myDays[thisDay];
	    var yy = tgl.getYear()
	    var year = (yy < 1000) ? yy + 1900 : yy;
	    const tanggal = `${day} - ${myMonths[bulan]} - ${year}`
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapan = `Selamat Malam ${pushname}🌃`
}
        if(time2 < "19:00:00"){
        var ucapan = `Selamat Petang ${pushname}🌆`
}
        if(time2 < "18:00:00"){
        var ucapan = `Selamat Sore ${pushname}🌇`
}
        if(time2 < "15:00:00"){
        var ucapan = `Selamat Siang ${pushname}🏙️`
}
        if(time2 < "11:00:00"){
        var ucapan = `Selamat Pagi ${pushname}🌅`
}
        if(time2 < "05:00:00"){
        var ucapan = `Selamat Malam ${pushname}🌃`
}	       
const { blocked,hitnya } = require("./database/jsonfile");
 const isHit = checkHit(senderNumber, user)
if (!isHit && isCmd ){ 
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
}
if(command){
AddHit(senderNumber, user)
cmdAdd("run", "1d", hitnya)
}
expiredCmd(hitnya)
const thisHit = `${getHit("run", hitnya)}`
  const userLevel = getLevelingLevel(senderNumber, user)
  const userExp = getLevelingXp(senderNumber, user)
  const userId = getLevelingId(senderNumber, user)
  const amountExp = Math.floor(Math.random() * 10) + 50
  const requiredExp = 1000 * userLevel
  const userPersen = userExp/requiredExp*100
  const userVerified = getDateId(senderNumber, user)
    const isBanned = cekBannedUser(sender, ban)
   try {
if (userLevel === undefined && userId === undefined) {
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
}

if (autoLevel){
addLevelingXp(senderNumber, amountExp, user)
}
if (autoLevel && userExp >= requiredExp || autoLevel && userExp == requiredExp) {
addLevelingLevel(senderNumber, 1, user)
resetLevelingXp(senderNumber, userExp, user)


anune =`${userLevel}00`
susu = randomNomor(math(anune))
addBalance(senderNumber, susu, user)


//Hadiah Limit
if(userLevel >= 25){
anuitu =`${userLevel}`
 sapi = randomNomor(math(anuitu))
giveLimit(senderNumber, sapi, user)
} else {
sapi = "0"
}


//Hadiah Premium
if(userLevel >= 50){
zidni = randomNomor(24) + "h"
_prem.addPremiumUser (sender, zidni, premium)         
} else {
	zidni = "0"
}

levelnih = userLevel + 1
tek = `*]───「 LEVEL UP 」───[*

Nama : ${pushname}\nLevel : ${levelnih}\nRank : ${userLeveling(levelnih)}`
    try {
                    ppuser = await zidni.profilePictureUrl(`${sender.split('@')[0]}@c.us`,'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                let ppmem1 = await getBuffer(ppuser)
						let ppmem3 = await uploadImages(ppmem1)	    
              var bang = await getBuffer (`https://ziy.herokuapp.com/api/canvas/levelup?pp=${ppmem3}`)
const baad = [
	{ urlButton: { displayText: `Api`, url : `https://wa.me/${sender.split("@")[0]}` } }
		]
    zidni.sendMessage(m.chat, { caption:  tek, location: { jpegThumbnail : bang }, templateButtons: baad, footer: `${pushname}`, })
}
} catch (err) {
console.error(err)
}
	if (isCmd) {      							
     const { user } = require("./database/jsonfile");   
        if (isLimit(senderNumber, isPremium, isCreator, limitCount, user)) return m.reply(`Limit Kamu Habis`)    
      limitAdd(senderNumber, user)
				   }
				   		   if (isCmd) {
				   anune =`${userLevel}00`
susu = randomNomor(math(anune))
addBalance(senderNumber, susu, user)
}



    // Public & Self
        if (!zidni.public) {
            if (!m.key.fromMe) return
        }
        // Reply
         const reply = (teks) => {
            zidni.sendMessage(m.chat, {text: teks},  { quoted: mek, thumbnail})	
               }
        // Push Message To Console && Auto Read
     	if (!m.isGroup && isCmd ) {
		console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (m.isGroup && isCmd ) {
		console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}
		//OTHER
		badword = ["anjing","memek","kontol","bangsat","goblok","tolol","peler","pler","ajg","asw","asu","gblk","mmk","bgst","bngst"]
	    salam = ["assalamualaikum","assalamu'alaikum"]
	    humor = ["wkwkwk","wkwk","haha","awokawok","awok"]
	// AUTO
   if (!m.key.fromMe && !m.isGroup && !/webp/.test(mime) && /image/.test(mime)) {
         let p = await zidni.downloadAndSaveMediaMessage(quoted)         
     	zidni.sendImageAsSticker(m.chat, p, m, { packname: `Auto Sticker\nCreated By`, author: `\nZidniGanz` })
									}           
	if (!m.key.fromMe && badword.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://d.top4top.io/m_2248jzsk00.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
		}
	if (!m.key.fromMe && salam.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://f.top4top.io/m_22521bnrt0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
		}		
	if (!m.key.fromMe && humor.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://j.top4top.io/m_2252nduc70.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
		}					


	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 12 hours
        let cron = require('./lib/node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
	    
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: zidni.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, zidni.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        zidni.ev.emit('messages.upsert', msg)
        }		    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
          case 'sound':{
song = ['sound1','sound2','sound3','sound4','sound5','sound6','sound7','sound8','sound9','sound10','sound11','sound12','sound13','sound14','sound15','sound16','sound17','sound18','sound19','sound20','sound21','sound22','sound23','sound24','sound25','sound26','sound27','sound28','sound29','sound30','sound31','sound32','sound33','sound34','sound35','sound36','sound37','sound38','sound39','sound40','sound41','sound42','sound43','sound44','sound45','sound46','sound47','sound48','sound49','sound50','sound51','sound52','sound53','sound54','sound55','sound56','sound57','sound58','sound59','sound60','sound61','sound62','sound63','sound64','sound65','sound66','sound67','sound68','sound69','sound70','sound70']
let bba1 = pickRandom(song)
let ppo = await getBuffer (`https://hansxd.nasihosting.com/sound/${bba1}.mp3`)
   zidni.sendMessage(m.chat, {audio: ppo, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
          }
	    break
	    case 'afk': {
                let user = global.db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
       case 'report':{
reply(`Wait`)     
       	zidni.sendMessage(`6281215205433@s.whatsapp.net`, { text: `*[ PANGGILAN USER ]*\nMessage nya : ${q}\nDari : wa.me/${sender.split("@")[0]}` }, { quoted: m })            
           reply(`Sukses`)
      }
        break
        
case 'chat':{
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''							
      	zidni.sendMessage(`${teks1}@s.whatsapp.net`, { text: `*[ CHAT BOT ]*\nPesan : ${teks2}\nDari : wa.me/${sender.split("@")[0]}` }, { quoted: m })           
          reply(`Sukses`)      
        }
   break
            case 'masuk': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await zidni.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await zidni.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	   
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                await zidni.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
         
                case 'hidetag': {
            if (!isCreator) throw mess.owner
            zidni.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: `${nama}`,
                buttons: buttonsVote,
                headerType: 1
            }
            zidni.sendMessage(m.chat, buttonMessageVote)
	    }
            break
             case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!m.isGroup) throw mess.group          
               if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
        
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await zidni.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await zidni.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
           
            	break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: `${nama}`,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            zidni.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: `${nama}`,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            zidni.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${zidni.user.id}
`
zidni.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await zidni.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await zidni.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await zidni.sendButtonText(m.chat, buttons, `Mode Group`, `${nama}`, m)

             }
            }
            break
          
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await zidni.groupInviteCode(m.chat)
                zidni.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
           
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                zidni.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/zidni-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      fatihgans = fs.readFileSync('./lib/zidni.jpg')
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      zidni.send5ButImg(yoi, txt, `${nama}`, fatihgans, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
          
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await zidni.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
    
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    zidni.sendText(m.chat, 'List Online:\n\n' + online.map(v => '=> @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
          
                 case 'swm': case 'colong': case 'take': {
          	
										if (!quoted) return reply(`Reply Gambar!`)
									
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
                        if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
        
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await zidni.sendImageAsSticker(m.chat, media, m, { packname: `${teks1}`, author: `${teks2}`  })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await zidni.sendVideoAsSticker(m.chat, media, m, { packname: `${teks1}`, author: `${teks2}`  })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
           
            
            break
            case 'shaun':{
               if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
        
             m.reply(mess.wait)         
              let poto = await zidni.downloadAndSaveMediaMessage(quoted)
             if (/image/.test(mime)) {
                    let anu5 = await TelegraPh(poto)
           let bangc = await getBuffer(`https://xteam.xyz/videomaker/shaunthesheep?url=${anu5}&APIKEY=cristian9407`)
            zidni.sendMessage(m.chat, {video: bangc, caption: `${mess.success}`}, {quoted:m})
	  }
	  }
	  break
	  case 'wait':{
	     if (!quoted) throw `Balas Sticker/Image Dengan Caption ${prefix + command}`
        
	  m.reply(mess.wait)      
	    let poto = await zidni.downloadAndSaveMediaMessage(quoted)
             if (/image/.test(mime)) {
                    let anu5 = await TelegraPh(poto)
                   let ana = await fetchJson(`https://api.lolhuman.xyz/api/googlereverse?apikey=${lolkey}&img=${anu5}`)
               	anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${ana.result}`)
					thum = await getBuffer(anu.screenshot)
  let btn = [{
                                urlButton: {
                                    displayText: 'Url',
                                    url: `${ana.result}`
                                }
                            }]                    
                      zidni.send5ButImg(m.chat, `Nih kak`, `${nama}`, thum, btn)
	}
}
break
            case 'smeme2':
								if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!quoted) return reply(`Reply Gambar!`)
									
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
							
          
              let poto1 = await zidni.downloadAndSaveMediaMessage(quoted)         
                    let aaa = await TelegraPh(poto1)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.webp?background=${aaa}`)
								zidni.sendImageAsSticker(m.chat, resu, m, { packname: global.packname, author: global.author })
										
										} catch (e) {
											console.log(e)
										}
									break
									case 'smeme': case 'stickermeme': case 'stickmeme': {
reply(mess.wait)
arg = args.join(' ')
mee = await zidni.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await zidni.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'patrik': case 'patrick':
var c = await getBuffer (`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)								
zidni.sendImageAsSticker(m.chat, c, m, { packname: global.packname, author: global.author })
break				
					  case 'hd':
                 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`        
            m.reply(mess.wait)         
              let poto = await zidni.downloadAndSaveMediaMessage(quoted)
             if (/image/.test(mime)) {
                    let anu5 = await TelegraPh(poto)
           let bangc = await getBuffer(`http://zekais-api.herokuapp.com/upscale?url=${anu5}&apikey=${global.zekais}`)
            zidni.sendMessage(m.chat, {image: bangc, caption: mess.success}, {quoted:m})
	  }
	  break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await zidni.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    zidni.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zidni.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zidni.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zidni.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${`${nama}`}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            zidni.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zidni.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await zidni.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    zidni.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	   case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let url = ' '
                let name = ' '
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                let capt = await fetchJson (`http://zekais-api.herokuapp.com/yts?query=${text}&apikey=Ddglle8M`)
                let bgd = await getBuffer(search.all[0].thumbnail)
                for (let i of search.all) {
                    teks += `🐓 No : ${no++}\n🐔 Type : ${i.type}\n🦃 Video ID : ${i.videoId}\n🐣 Title: ${i.title}\n🐤 Views : ${i.views}\n🐥 Duration : ${i.timestamp}\n🐦 Upload At : ${i.ago}\n🦜 Author : ${i.author.name}\n🕊️ Url : ${i.url}\n\n─────────────────\n\n`                  
              url += `${i.url}`
              name += `${i.title}`
                    }
                const butsa = [
			{ urlButton: { displayText: `${name}`, url : `${url}` } },
					{ quickReplyButton: { displayText: `Video`, id: `ytmp4 ${url}` } },
							{ quickReplyButton: { displayText: `Audio`, id: `ytmp3 ${url}` } }
			 ]
   zidni.sendMessage(m.chat, { caption:  teks, location: { jpegThumbnail : bgd }, templateButtons: butsa, footer: '`${nama}`', })
     	  }
            break
            	   
           case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `🐣 *Title* : ${g.title}\n`
                teks += `🐥 *Description* : ${g.snippet}\n`
                teks += `🐤 *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                let buttons = [
                        { buttonId: `image ${text}`, buttonText: { displayText: `Pencarian Image🔎` }, type: 1 }
                           ]
                   zidni.sendButtonText(m.chat, buttons, teks, `${nama}`, m)
                })
                }
                break
       case 'image': case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
     
            
         case 'yt4':{
         const { user } = require("./database/jsonfile");   
           if (isLimit(senderNumber, isPremium, isCreator, limitCount, user)) return reply (`Limit kamu sudah habis. Limit Akan Diriset setiap Bot Mati`)
           
        const { y2mateA, y2mateV } = require('./lib/y2mate3')
         teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
             let buttons = [
                    {buttonId: `ytmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: res[0].link },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
   
            break
               case 'ythd': case 'yt5':{
                  const { user } = require("./database/jsonfile");   
                 if (isLimit(senderNumber, isPremium, isCreator, limitCount, user)) return reply (`Limit kamu sudah habis. Limit Akan Diriset setiap Bot Mati`)
           
        const { y2mateA, y2mateV } = require('./lib/y2mate4')
         teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
             let buttons = [
                    {buttonId: `ytmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: res[0].link },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
   
            break
           case 'yt6':{
              const { user } = require("./database/jsonfile");   
       
        const { y2mateA, y2mateV } = require('./lib/y2mate5')
         teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
             let buttons = [
                    {buttonId: `ytmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: res[0].link },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
   
            break
              case 'play':{
                 const { y2mateA, y2mateV } = require('./lib/y2mate3')
          	 if (!q) return reply('Linknya?')
			 let query = args.join(" ")   
			 m.reply(mess.wait)
			 res = await yts(text)
			  resu = await y2mateV(res.all[0].url).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
           })
         let buttons = [
                    {buttonId: `ytmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: resu[0].link  },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
			
                break
	       
	        case 'ytdl': case 'ytv': case 'yt': case 'ytmp4': {
	         const { user } = require("./database/jsonfile");   
        if (isLimit(senderNumber, isPremium, isCreator, limitCount, user)) return reply (`Limit kamu sudah habis. Limit Akan Diriset setiap Bot Mati`)
            m.reply(mess.wait)
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')
	mp4 = await fetchJson(`https://api.zekais.com/ytmp4?url=${text}&apikey=zekais`)

bufa = await getBuffer(mp4.thumb)


                       const { y2mateA, y2mateV } = require('./lib/y2mate3')
         teks = args.join(' ')
    
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
             let buttons = [
             	   {buttonId: `yt5 ${text}`, buttonText: {displayText: 'Video 720p'}, type: 1},
               {buttonId: `yt6 ${text}`, buttonText: {displayText: 'Video 1080p'}, type: 1}
                  ]
                let buttonMessage = {
                    video: { url: res[0].link },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
  
             break                 
              case 'ytmp3': {
                     const { user } = require("./database/jsonfile");   
         if (isLimit(senderNumber, isPremium, isCreator, limitCount, user)) return reply (`Limit kamu sudah habis. Limit Akan Diriset setiap Bot Mati`)                           
	if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			await reply(mess.wait)
                  const { y2mateA, y2mateV } = require('./lib/y2mate3')
         teks = args.join(' ')
    
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
           zidni.sendMessage(from, { document: { url: res[0].link }, fileName: `${res[0].output}`, mimetype: 'audio/mp3' }, { quoted: m })
			      
           
                }
                  break
              case 'mediafire':{
               if (args.length < 1) return reply('Link Nya Mana? ')
                  m.reply(mess.wait)
               teks = args.join(' ')
               link = await fetchJson(`https://api.neoxr.eu.org/api/mediafire?url=${text}&apikey=yourkey`)               
           zidni.sendMessage(from, { document: { url: link.data.link }, fileName: link.data.filename+link.data.extension, mimetype: link.data.mime }, { quoted: m })
	      
	      }
             break
             case 'zipy': case 'zippyshare':{
               if (args.length < 1) return reply('Link Nya Mana? ')
                  m.reply(mess.wait)
               teks = args.join(' ')
               link = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${text}`)               
           zidni.sendMessage(from, { document: { url: link.result.download_url }, fileName: link.result.name_file, mimetype:  'application/zip'  }, { quoted: m })
	      
	      }
             break
            case 'git': case 'gitclone':
             if (args.length < 1) return reply('Link Nya Mana? ')
              let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = text.match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
  zidni.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m })
			 break        
			 case 'tiktoknowm':   case 'tiktok': case 'tt':{
	if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(mess.wait)
			let nowem = q
			zee.Ttdownloader(nowem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					noweem = await getBuffer(nowm)
	  let buttons = [
                    {buttonId: `tiktokaudio ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: nowm },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
      })
				}).catch((err) => reply(`Link tidak valid`))
			}
             break 

case 'tiktokmusic': case 'tiktokaudio':  case 'tiktokmp3':
	if (!q) return reply('Linknya?')
	m.reply(mess.wait)
		  zidni.sendMessage(m.chat, { audio: {url : `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${global.lolkey}&url=${text}` }, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
             break	    
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                zidni.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                zidni.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                zidni.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                zidni.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
  
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                zidni.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                zidni.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                zidni.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                zidni.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                zidni.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	
	case 'igfoto': {
if (!text) throw 'Masukkan Link Foto Instragram'
m.reply(mess.wait)
webapi = await fetchJson(`https://zeroyt7-api.xyz/igfoto?link=${text}&apikey=gysnzbsja`)
zidni.sendMessage(m.chat, { image: { url: webapi.result.link }, caption: `Nih Dek`}, { quoted: m})
}
break
case 'igdl': case 'ig': case 'igvideo': {
if (!text) throw 'Masukkan Link Video Instragram'
m.reply(mess.wait)
webapi = await fetchJson(`https://zenzapi.xyz/downloader/instagram2?url=${text}&apikey=${global.zenkey}`)
zidni.sendMessage(m.chat, { video: { url: webapi.data }, caption: `Nih Dek`}, { quoted: m })
}
break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await zidni.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                zidni.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await zidni.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                zidni.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                zidni.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break           
	        case 'twiter': case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://zenzapi.xyz/downloader/twitter?url=${text}&apikey=${global.zenkey}`)
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD},
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://zenzapi.xyz/downloader/twitter?url=${text}&apikey=${global.zenkey}`)
              
                zidni.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: mek })
            }
            break
            case 'storyff':{
	   reply(mess.wait)
                 let buttons = [
                    {buttonId: `storyff`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: `https://apidhani.herokuapp.com/api/randomvideo/jedagjedugff?apikey=NisaaCantik` },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
                    break
            case 'storyml':{
	   reply(mess.wait)
                 let buttons = [
                    {buttonId: `storyml`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: `https://apidhani.herokuapp.com/api/randomvideo/jedagjedugml?apikey=NisaaCantik` },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
                    break
               case 'storypubg':{
	   reply(mess.wait)
                 let buttons = [
                    {buttonId: `storypubg`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: `https://apidhani.herokuapp.com/api/randomvideo/jedagjedugpubg?apikey=NisaaCantik` },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
                    break
	   case 'storyislam':{
	   reply(mess.wait)
                 let buttons = [
                    {buttonId: `storysholawatan`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: `https://apidhani.herokuapp.com/api/randomvideo/storysholawatan?apikey=NisaaCantik` },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
                    break
      case 'storywa': case 'storygalau': case 'storybus': case 'storytruk':  case 'storyanime':{
     reply(mess.wait)
                 let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: `https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=NisaaCantik` },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
                    break
            
case 'chara':
	{
    reply(mess.wait)
	  let im = await fetchJson(`https://api.reysekha.xyz/api/anime/chara?query=${text}&apikey=apirey`)
	  let ph = im.result
            let acak = ph[Math.floor(Math.random() * ph.length)]
            let li = await getBuffer(acak)
              m.reply(mess.wait)
                 let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: acak },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })               
					       }
            break            
         case 'art': case 'wallnime':  case 'cecan': case 'cogan': case 'elf': case 'loli': case 'neko': case 'waifu': case 'shota': case 'husbu': case 'sagiri': case 'elaina': case 'shinobu': {
                m.reply(mess.wait)
                 let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${global.lolkey}` },
                    caption: `${mess.success}`,
                    footer: `${nama}`,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
            break
            
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n${result.anime}\n\n- ${result.up_at}`,
                    footer: `By ${result.karakter}`,
                    buttons: buttons,
                    headerType: 2
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
          case 'quoteagamis': case 'quotes':{
	         let ano = await fetchJson(`http://zekais-api.herokuapp.com/${command}?apikey=Ddglle8M`)
             await zidni.sendButtonText(m.chat, [{ buttonId: `${command}`, buttonText: { displayText: 'Next' }, type: 1 }], ano.quotes+'\n', `${nama}`, m)
            }
            break
case 'bijak':  case 'bucin': case 'fakta':{
	         let ao = await fetchJson(`http://zekais-api.herokuapp.com/${command}?apikey=Ddglle8M`)
             await zidni.sendButtonText(m.chat, [{ buttonId: `${command}`, buttonText: { displayText: 'Next' }, type: 1 }], ao.result+'\n', `${nama}`, m)
            }
            break
            case 'bucinquote':{
	         let aoa = await fetchJson(`http://zekais-api.herokuapp.com/bijak?apikey=Ddglle8M`)
             await zidni.sendButtonText(m.chat, [{ buttonId: `${command}`, buttonText: { displayText: 'Next' }, type: 1 }], aoa.result+'\n', `${nama}`, m)
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: `${nama}`,
			buttons,
			headerType: 4
		    }
		    zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        zidni.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		zidni.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	      case 'ss': case 'ssweb':
 reply(mess.wait)
  zidni.sendMessage(from, { image: { url: `https://hadi-api.herokuapp.com/api/ssweb?url=${q}&device=phone&full=on`}})
  break
            case 'say': case 'tts': case 'simi':
  simi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
                     sami = simi.success
                    	dtt = (sami)						
				zidni.sendMessage(m.chat, { audio: {url : `https://hadi-api.herokuapp.com/api/tts?text=${sami}&language=id`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
   break
   case 'sholawat':
   reply(mess.wait)
 zidni.sendMessage(m.chat, { audio: {url : `https://apidhani.herokuapp.com/api/muslim/audiosholawatan?apikey=NisaaCantik`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
break
case 'nabi': case 'kisahnabi':
if (!text) return reply(`Kirim perintah ${command} Nama Nabi\nContoh : ${command} Muhammad`)
		var data = await fetchJson(`https://hardianto.xyz/api/muslim/kisahnabi?nabi=${text}&apikey=hardianto`)
				var kisahnya = `*Nama Nabi :* ${data.result.name}\n*Kelahiran :* ${data.result.wafat_usia}\n*Tempat Tinggal :* ${data.result.singgah}\n*Kisah Nabi :* ${data.result.kisah}`
			    reply(kisahnya)
			case 'quranaudio': 
reply(mess.wait)
zidni.sendMessage(from, { audio: {url : `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=${global.lolkey}`}, mimetype: 'audio/mp4', ptt: true})

break

case 'meme': 
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next" }, type: 1 }]
  var data = await fetchJson(`https://hadi-api.herokuapp.com/api/darkjokes`)
				zidni.sendMessage(from, { caption: "Nih dek", image: { url: data.result }, buttons: but, footer: '`${nama}`' }, { quoted: mek })
break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		zidni.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		zidni.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		zidni.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		zidni.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		zidni.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		zidni.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}		
              break
              case 'doaharian': {
webapi = await fetchJson(`https://zeroyt7-api.xyz/doaharian?apikey=gysnzbsja`)
resultnya = webapi.result
txgt =`Title : ${resultnya.Title}
Arabic : ${resultnya.Arabic}
Latin : ${resultnya.Latin}
Translate : ${resultnya.Translate}`
let buttons = [{buttonId: `doaharian`, buttonText: {displayText: 'Next'}, type: 1}]
let buttonMessage = {
text: txgt,
footerText: `${nama}`,
buttons: buttons,
headerType: 2
}
zidni.sendMessage(m.chat, buttonMessage, { quoted: mek})
}
break
               case 'niatsholat': {

webapi = await fetchJson(`https://api.lolhuman.xyz/api/niatsholat/${text}?apikey=Deffbotz`)
resultnya = webapi.result
txet =`Title : ${resultnya.name}
Arabic : ${resultnya.ar}
Latin : ${resultnya.latin}
Translate : ${resultnya.id}`
reply(txet)
}
break
case 'tahlil': {

webapi = await fetchJson(`http://zekais-api.herokuapp.com/tahlil?apikey=Ddglle8M`)
resultnya = webapi
tsxt =`Title : ${resultnya.title}
Arabic : ${resultnya.arabic}
Translation : ${resultnya.translate}`
let buttons = [{buttonId: `tahlil`, buttonText: {displayText: 'Next'}, type: 1}]
let buttonMessage = {
text: tsxt,
footerText: `${nama}`,
buttons: buttons,
headerType: 2
}
zidni.sendMessage(m.chat, buttonMessage, { quoted: mek})
}
break
case 'wirid': {

webapi = await fetchJson(`https://zeroyt7-api.xyz/wirid?apikey=gysnzbsja`)
resultnya = webapi.result
txta =`Id : ${resultnya.id}
Times : ${resultnya.times}
Arabic : ${resultnya.arabic}
Tnc : ${resultnya.tnc}`
let buttons = [{buttonId: `wirid`, buttonText: {displayText: 'Next'}, type: 1}]
let buttonMessage = {
text: txta,
footerText: `${nama}`,
buttons: buttons,
headerType: 2
}
zidni.sendMessage(m.chat, buttonMessage, { quoted: mek })
}
break
case 'ayatkursi': {

webapi = await fetchJson(`https://zeroyt7-api.xyz/ayatkursi?apikey=gysnzbsja`)
resultnya = webapi.result
txat =`Tafsir : ${resultnya.tafsir}
Translation : ${resultnya.translation}
Arabic : ${resultnya.arabic}
Latin : ${resultnya.latin}`
m.reply(txat)
}
break
case 'bacaansholat': {

webapi = await fetchJson(`https://zeroyt7-api.xyz/bacaansholat?apikey=gysnzbsja`)
resultnya = webapi.result
alok =`Id : ${resultnya.id}\nName : ${resultnya.name}\nArabic : ${resultnya.arabic}\nLatin : ${resultnya.latin}\nTerjemahan : ${resultnya.terjemahan}`
let buttons = [{buttonId: `bacaansholat`, buttonText: {displayText: 'Next'}, type: 1}]
let buttonMessage = {
text: `${alok}`,
footerText: `${nama}`,
buttons: buttons,
headerType: 2
}
zidni.sendMessage(m.chat, buttonMessage, { quoted: mek })
}
break
case 'asmaulhusna': {

webapi = await fetchJson(`https://zeroyt7-api.xyz/asmaulhusna?apikey=gysnzbsja`)
resultnya = webapi.result
txqt =`Number : ${resultnya.number}
Latin : ${resultnya.latin}
Arabic : ${resultnya.arab}
Translate Id : ${resultnya.translate_id}
Translate En : ${resultnya.translate_en}`
let buttons = [{buttonId: `asmaulhusna`, buttonText: {displayText: 'Next'}, type: 1}]
let buttonMessage = {
text: txqt,
footerText: `${nama}`,
buttons: buttons,
headerType: 2
}
zidni.sendMessage(m.chat, buttonMessage, { quoted: mek })
}
break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                zidni.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                zidni.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                zidni.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	   
          
            case 'public': {
                if (!isCreator) throw mess.owner
                zidni.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                zidni.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
          case 'repat': case 'sc': case 'owner': case 'creator': {
                zidni.sendContact(m.chat, global.owner, m)
            }
            break
            case 'yntks':{
            let thumbnail = await getBuffer (`https://telegra.ph/file/f72f88a4374d134953cfc.png`)
            const tod = generateWAMessageFromContent(m.chat,
{"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/ApB9FM5wpdh-vIFBU_eh6oNUGfydsIPHeH5g948qu8ei.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "p4HuRqm7bqae/spDY4q6UCGc8pmIt+Nw4T7AqCYjI1U=",
								"fileLength": "999999999999999",
								"mediaKey": "PocZSjTMz/cehHKI0CiPG0J7gMHZHWUP+asVhdNHwuQ=",
								"fileEncSha256": "WmHKTxEV8v82TwD1CwOHSNG9wxUkJ53j8/7YUvQkwUY=",
								"jpegThumbnail": thumbnail
						},
							"productId": "9999",
							"title": `Yntks`,
							"description": `Sewa Bot 10k S/d nomer Bot Di Banned 🧸\n\nUntuk Lebih Lengkapnya Tanya Nomer Di bawah🕊️`,
							"currencyCode": "IDR",
							"priceAmount1000": "10000000",
							"url": "zidniganz@yahoo.com",
							"productImageCount": 1,
							"salePriceAmount1000": "0"
						},
						"businessOwnerJid": `6281215205433@s.whatsapp.net`
					}
				}, {quoted : m})
			


zidni.relayMessage(m.chat, tod.message, {messageId: tod.key.id})
}
break
            case 'list': case 'menu': case 'help': case '?': {
            	            try {
                    ppuser = await zidni.profilePictureUrl(`${sender.split('@')[0]}@c.us`,'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                tum = await getBuffer(ppuser)			
       const { premium, _claim, sewa, user, ban } = require("./database/jsonfile");
             let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
nana =`${userExp}/${requiredExp}`
persenya =`${userPersen}`
                             anu = `*${ucapan}*
                              
*• Tanggal* : ${tanggal}
*• Tanggal Islam* : ${islam}
*• Ramadhan* : ${ultah}
*• Status* : ${isCreator ? 'Owner':'User'}
*• Speed* : ${latensi.toFixed(4)}s
*• Tipe* : Multi Device
*• Limit Harian* : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
*• Limit Game* : ${cekGLimit(senderNumber, gcount, user)}/${gcount}
*• Balance* : $${getBalance(senderNumber, user).toLocaleString()}
*• Exp* : ${nana}
*• Bars* : ${userXp(userPersen)} ${persenya.split(".")[0]}%
${readmore}
  *「 Islam 」* 
*▸* ${prefix}asmaulhusna
*▸* ${prefix}quran [nomer]
*▸* ${prefix}quranaudio [nomer]
*▸* ${prefix}kisahnabi [nama]
*▸* ${prefix}niatsholat [query]
*▸* ${prefix}hadist [query]
*▸* ${prefix}bacaansholat
*▸* ${prefix}doaharian
*▸* ${prefix}wirid
*▸* ${prefix}iqra
*▸* ${prefix}juzamma
*▸* ${prefix}tafsirsurah
*▸* ${prefix}ayatkursi
*▸* ${prefix}tahlil
*▸* ${prefix}sholawat  
${readmore}
  *「 Download 」* 
*▸* ${prefix}play [query]
*▸* ${prefix}yts [query]
*▸* ${prefix}google [query]
*▸* ${prefix}gimage [query]
*▸* ${prefix}pinterest [query]
*▸* ${prefix}tiktoknowm [url]
*▸* ${prefix}tiktokmp3 [url]
*▸* ${prefix}igdl [url]
*▸* ${prefix}twitter [url]
*▸* ${prefix}twitteraudio [url]
*▸* ${prefix}ytmp3 [url]
*▸* ${prefix}ytmp4 [url]
*▸* ${prefix}gitclone [url]
*▸* ${prefix}mediafire [url]
${readmore}
  *「 Story 」*
*▸* ${prefix}Storyislam
*▸* ${prefix}Storywa
*▸* ${prefix}Storyanime
*▸* ${prefix}Storygalau
*▸* ${prefix}Storytruk
*▸* ${prefix}Storybus
*▸* ${prefix}Storypubg
*▸* ${prefix}Storyml
*▸* ${prefix}Storyff
${readmore}
  *「 Anime 」*
*▸* ${prefix}waifu
*▸* ${prefix}elaina
*▸* ${prefix}loli
*▸* ${prefix}wallnime
*▸* ${prefix}elf
*▸* ${prefix}husbu
*▸* ${prefix}sagiri
*▸* ${prefix}neko
${readmore}
  *「 Tools 」*
*▸* ${prefix}sticker [reply]
*▸* ${prefix}take [reply]
*▸* ${prefix}smeme [reply]
*▸* ${prefix}toimg [reply]
*▸* ${prefix}tourl [reply]
*▸* ${prefix}tovideo [reply]
*▸* ${prefix}toaudio [reply]
*▸* ${prefix}tovn [reply]
*▸* ${prefix}hd [reply]
*▸* ${prefix}wait [reply]
*▸* ${prefix}ssweb [url]
*▸* ${prefix}ebinary [query]
*▸* ${prefix}dbinary [reply]
${readmore}
 *「 Tqto 」* 
• Allah Swt
• Nabi Muhammad
• My Parents
• Dika Ardiant
• Fatih A.
• Nurutomo
• Zeeone
• My Self

𝑆𝑖𝑚𝑝𝑙𝑒 𝐵𝑜𝑡 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝 ッ
`
 zidni.sendMessage(from, { caption: anu, location: { jpegThumbnail: tum }, templateButtons: buttonsDefault, footer: `${nama}`, })
  }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    zidni.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
