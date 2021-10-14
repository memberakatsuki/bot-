const { WAConnection, MessageType, Presence, Mimetype } = require('@adiwajshing/baileys')
const chalk = require('chalk')
const fs = require('fs')
const axios = require('axios')
const util = require('util')
const { exec } = require('child_process')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ms = require('ms')
const encodeUrl = require('encodeurl')


const {  pSmoky, pOuro, pSemi, pFogo, pShadow, pRomantic, pSmoke, pBurnPapper, pNaruto, pLoveMsg, pMsgGrass, pDoubleHeart, pCoffeCup,pLoveText, pHarryPotter, pAwolfMetal, pCup, pCaptain, pButterfly,  pGlitch,  pGooglesg } = require('./media/config/photooxy')
const { convertSticker, getGroupAdmins, getRandom, color, fetchJson, getBuffer, formatDate } = require('./functions.js')
const settings = JSON.parse(fs.readFileSync('./media/settings.json'));
const premium = JSON.parse(fs.readFileSync('./media/user/prem.json'));
const setting = JSON.parse(fs.readFileSync('./media/config/settings.json'))
//const { kauan } = require('./main.js')

const prefix = setting.prefix
const limiteca = setting.limite
ownerNumber = setting.owner

const watchFile = (file) => { fs.watchFile(file, async () => { return new Promise((resolve, reject) => { try { console.log(color('[EDIÇÃO]', 'crimson'), color(`Uuuu! Melhorias em tempo real! Irei usar agora mesmo, estou reiniciando!`, 'yellow'));delete require.cache[require.resolve(file)];resolve();console.log(color('[EDIÇÃO]', 'lime'), color(`Reiniciei com sucesso! Testa, Testa!`, 'yellow')) } catch (error) { reject(error) } }) }) }
watchFile('./index.js')



function tempo(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var days = Math.floor(seconds / (60*60*60));
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(days)} days ${pad(hours)} Hours ${pad(minutes)} Minutes ${pad(seconds)} Seconds`
}


async function starts() {
const conn = new WAConnection();
conn.logger.level = 'warn'
conn.on('qr', () => {
conn.on('qr', () => {
})
console.log(color('[','white'), color('!','red'), color(']','white'), color('Escaneie o qr !!!'))
	})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
	conn.on('connecting', () => {
console.log(chalk.keyword("green")(''), chalk.keyword("blue")('⌈ '), chalk.keyword("aqua")(' conect '), chalk.keyword("blue")(' ⌉'), chalk.keyword("green")(''))	
	})
conn.on('open', () => { console.log(chalk.keyword("green")(''), chalk.keyword("blue")('⌈ '), chalk.keyword("aqua")('conectado'), chalk.keyword("blue")(' ⌉'), chalk.keyword("green")('')) }); conn.connect({timeoutMs: 30*1000}); fs.writeFileSync('./session.json', JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t')) 




conn.on('chats-received', async ({ hasNewChats }) => {
        console.log(`Você tem ${conn.chats.length} chats, novos chats recebidos: ${hasNewChats}`)

        const unread = await conn.loadAllUnreadMessages ()
        console.log ("Você tem " + unread.length + " mensagens não lidas")
    })

conn.on('group-participants-update', async (zeks) => {
		try {
	        const mdata = await conn.groupMetadata(zeks.jid)
			console.log(zeks)
			if (zeks.action == 'promote') {
			num = zeks.participants[0]
			k = `[ PROMOTE DETECTED ]\n@${num.split("@")[0]} foi promovido a adm`
			conn.sendMessage(mdata.id, k, MessageType.text)
			console.log(color('[PROMOTE]', 'red')),(color(`${num.split('@')[0]} \nfoi promovido a adm`, 'blue'))
			} else if (zeks.action == 'demote') {
			num = zeks.participants[0]
			conn.sendMessage(mdata.id, `[DEMOTE jDETECTED]\n@${num.split("@")[0]} nao é mais adm kkkkk`, MessageType.text)
			console.log(color('[DEMOTE]', 'red')), (color(`${num.split('@')[0]} foi rebaixado a membro comum kkkk`, 'blue'))
			} else if (zeks.action == 'add') {
const grupo = await conn.groupMetadata(zeks.jid)
num = zeks.participants[0]
console.log(color('[ADD] entraram via link ou foi adicionado', 'red'))
await conn.sendMessage(grupo.id, `bem vindo ${num.split('@')[0]}`, MessageType.text)
}else if (zeks.action == 'remove') {
num = zeks.participants[0]
const grupo = await conn.groupMetadata(zeks.jid)
await conn.sendMessage(grupo.id, `tchau ${num.split("@")[0]}`, MessageType.text)
}
}catch (e) {
console.log('Erro : %s', color(e, 'red'))
}})




conn.on('chat-update', async(info) => {
if (!info.hasNewMessage) return
info = info.messages.all()[0]
if (!info.message) return
info.message = (Object.keys(info.message)[0] === 'ephemeralMessage') ? info.message.ephemeralMessage.message : info.message
if (!info.message) return
global.prefix
global.blocked
const content = JSON.stringify(info.message)
const speed = require('performance-now');
const from = info.key.remoteJid
const type = Object.keys(info.message)[0]
try{
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const jam = moment.tz('America/Sao_Paulo').format('HH:mm')
const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
body = (type === 'conversation' && info.message.conversation.startsWith(prefix)) ? info.message.conversation : (type == 'imageMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'videoMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'extendedTextMessage') && info.message[type].text.startsWith(prefix) ? info.message[type].text : (type == 'listResponseMessage') && info.message[type].singleSelectReply.selectedRowId ? info.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && info.message[type].selectedButtonId ? info.message[type].selectedButtonId : (type == 'stickerMessage') && ((info.message[type].fileSha256.toString('base64')) !== null && (info.message[type].fileSha256.toString('base64')) !== undefined) ? (info.message[type].fileSha256.toString('base64')) : ""			         
budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedDisplayText : ''
button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
listMessage = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''
const listmsg = (from, title, desc, list) => { 
po = conn.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "Selecione","listType": 1,"sections": list}}, {}); return conn.relayWAMessage(po, {waitForAck: true})}
listmes = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''
pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const testat = body
const isCmd = body.startsWith(prefix)
const isGroup = from.endsWith('@g.us')
const botNumber = conn.user.jid
const q = args.join(' ')
const sender = isGroup ? info.participant : info.key.remoteJid
const pushname = conn.contacts[sender] != undefined ? conn.contacts[sender].vname || conn.contacts[sender].notify : undefined || `[ SELF ]`
const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isWhite = settings.white.includes(sender)
const isAutosticker = isGroup ? settings.autofigu.includes(from) : false
const isOwner = ownerNumber.includes(sender) || info.key.fromMe
const isLeveling = isGroup ? settings.leveling.includes(from) : false
const level = settings.level
const msgbot = await fs.readFileSync('./reply.txt').toString().split('\n')
const chatBot = msgbot[Math.floor(Math.random() * msgbot.length)].replace('%name$', `${groupName}`).replace('%battery%', `1000Bala`)
mess = {wait: '❬❗❭ Espere',success: '️❬ ✔ ❭ Sucesso 🖤',					levelon: '❬ ✔ ❭ *leveling* *ativado*',					leveloff: ' ❬ X ❭  *leveling* *desativado*',					levelnoton: '❬ X ❭ *leveling não ativado*',					levelnol: '*error* 0 °-°',					error: { stick: '*Bem, falhe, tente novamente ^_^*', Iv: 'Link inválido☹️'},only: {					group: '[❗] Este comando só pode ser usado em grupos! ❌',					premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',					mod: '[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD*',					admin: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',					Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌'}}
const reply = (texto) => { conn.sendMessage(from, texto, text, {quoted:info})}
const sendMediaURL = async(to, url, text="", mids=[]) =>{ if(mids.length > 0){text = normalizeMention(to, text, mids)};const fn = Date.now() / 10000;const filename = fn.toString();let mime = "";var download = function (uri, filename, callback) { request.head(uri, function (err, res, body) { mime = res.headers['content-type'];request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);});};download(url, filename, async function () { console.log('done');let media = fs.readFileSync(filename);let type = mime.split("/")[0]+"Message";if(mime === "image/gif"){type = MessageType.video;mime = Mimetype.gif};if(mime.split("/")[0] === "audio"){mime = Mimetype.mp4Audio};conn.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}});fs.unlinkSync(filename);});};const sendFileFromUrl = async(link, type, options) => {hasil = await getBuffer(link);conn.sendMessage(from, hasil, type, options).catch(e => {fetch(link).then((hasil) => {conn.sendMessage(from, hasil, type, options).catch(e => { conn.sendMessage(from, { url : link }, type, options).catch(e => { reply('_[ ! ] Erro ao baixar e enviar mídia_');console.log(e)});})});});}
const mentions = (texto, membro, id) => { (id == null || id == undefined || id == false) ? conn.sendMessage(from, texto.trim(), extendedText, {contextInfo: {"mentionedJid": membro}}) : conn.sendMessage(from, texto.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": membro}})}
const msgs = (message) => { if (budy.startsWith(prefix)) { if (message.length >= 10) { return `${message.substr(0, 15)}`   } else { return `${message}`}}}   
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')


//FUNCTIONS
function addMetadata(packname, author) {	if (!packname) packname = 'ALEATORY-BOT'; if (!author) author = 'ALE';	author = author.replace(/[^a-zA-Z0-9]/g, '');	let name = `${author}_${packname}`;if (fs.existsSync(`./media/${name}.exif`)) return `./media/${name}.exif`;const json = {	"sticker-pack-name": packname,"sticker-pack-publisher": author};const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	;const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	;let len = JSON.stringify(json).length	;let last	;if (len > 256) {	len = len - 256	;bytes.unshift(0x01)	} else {	bytes.unshift(0x00)	};if (len < 16) {	last = len.toString(16)	;last = "0" + len	} else {	last = len.toString(16)	}	;const buf2 = Buffer.from(last, "hex")	;const buf3 = Buffer.from(bytes)	;const buf4 = Buffer.from(JSON.stringify(json))	;const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	;fs.writeFile(`./media/${name}.exif`, buffer, (err) => {	return `./media/${name}.exif`	})	};
const getpc = async function(totalchat){pc = [];a = [];b = [];for (c of totalchat){a.push(c.jid)};for (d of a){if (d && !d.includes('g.us')){b.push(d)}}return b};
const getGroup = async function(totalchat){ let grup = [];let a = [];let b = [];for (c of totalchat){a.push(c.jid)};for (d of a){if (d && d.includes('g.us')){b.push(d)}};for (e of b){ let ingfo = await conn.groupMetadata(e);grup.push(ingfo)} return grup };const addPremiumUser = (userId, expired, _data) => { let success = false;if (expired === undefined) { expired = 'PERMANENT' } else { expired = expired}; let expired_at = 'PERMANENT' ;if (expired === 'PERMANENT') { expired_at = 'PERMANENT' } else { expired_at = Date.now() + toMs(expired)}; const obj = { id: userId, expired: expired_at}; _data.push(obj); fs.writeFileSync('./media/user/prem.json', JSON.stringify(_data))};


///LEVEL2
const getLevelcash2 = (userId, from) => {
let position = false
Object.keys(settings.level).forEach((i) => {
if (settings.level[i].pessoa === userId && settings.level[i].grupo === from) {
position = i
}}); if (position !== false) {
return settings.level[position].cash
}}

const getLevellevel2 = (userId, from) => {
let position = false
Object.keys(settings.level).forEach((i) => {
if (settings.level[i].pessoa === userId && settings.level[i].grupo === from) {
position = i
}}); if (position !== false) {
return settings.level[position].level
}}

const getLeveling2 = (userId, from) => {
let position = false
Object.keys(settings.level).forEach((i) => {
if (settings.level[i].pessoa === userId && settings.level[i].grupo === from) {
position = i
}}); if (position !== false) {
return settings.level[position].pessoa
}}

const addCash2 = (userId, from, quanto) => {
let position = false
Object.keys(settings.level).forEach((i) => {
if (settings.level[i].pessoa === userId && settings.level[i].grupo === from) {
position = i
}}); if (position !== false) {
settings.level[position].cash += quanto
fs.writeFileSync('./media/settings.json', JSON.stringify(settings))
}}

const addLevel2 = (userId, from, quanto) => {
let position = false
Object.keys(level).forEach((i) => {
if (settings.level[i].pessoa === userId && settings.level[i].grupo === from ){
position = i
}}); if (position !== false) {
settings.level[position].level += quanto
fs.writeFileSync('./media/settings.json', JSON.stringify(settings))
}}

const addLevelingId2 = (userId, from) => {
const obj = { grupo: from, pessoa: userId, cash: 1, level: 1}
settings.level.push(obj)
fs.writeFileSync('./media/settings.json', JSON.stringify(settings))
}
/////FIM2 

const nivelAtual = getLevellevel2(sender, from)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {
patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {
patt = 'Bronze II🥉'} else if (nivelAtual === 3) {
patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {
patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {
patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {
patt = 'Prata I🥈'} else if (nivelAtual === 7) {
patt = 'Prata II🥈'} else if (nivelAtual === 8) {
patt = 'Prata III🥈'} else if (nivelAtual === 9) {
patt = 'Prata IV🥈'} else if (nivelAtual === 10) {
patt = 'Prata V🥈'} else if (nivelAtual === 11) {
patt = 'Ouro I🥇'} else if (nivelAtual === 12) {
patt = 'Ouro II🥇'} else if (nivelAtual === 13) {
patt = 'Ouro III🥇'} else if (nivelAtual === 14) {
patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {
patt = 'Ouro V🥇'} else if (nivelAtual === 16) {
patt = 'Campeão I🏆'} else if (nivelAtual === 17) {
patt = 'Campeão II🏆'} else if (nivelAtual === 18) {
patt = 'Campeão III🏆'} else if (nivelAtual === 19) {
patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {
patt = 'Campeão V🏆'} else if (nivelAtual === 21) {
patt = 'Diamante I 💎'} else if (nivelAtual === 22) {
patt = 'Diamante II 💎'} else if (nivelAtual === 23) {
patt = 'Diamante III 💎'} else if (nivelAtual === 24) {
patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {
patt = 'Diamante V 💎'} else if (nivelAtual === 26) {
patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {
patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {
patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {
patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {
patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {
patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {
patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {
patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {
patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {
patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {
patt = 'God I🕴'} else if (nivelAtual === 37) {
patt = 'God II🕴'} else if (nivelAtual === 38) {
patt = 'God III🕴'} else if (nivelAtual === 39) {
patt = 'God IV🕴'} else if (nivelAtual === 40) {
patt = 'God V🕴'} else if (nivelAtual > 41) {
patt = '🛐Grande Mestre🛐'}
//////////
if (isGroup && isLeveling && !info.key.fromMe ) {
currentLevel = getLevellevel2(sender, from)
checkin = getLeveling2(sender, from)
try {
if (currentLevel === undefined && checkin === undefined) addLevelingId2(sender, from)
const amountXp = Math.floor(Math.random() * 10) + 200
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevellevel2(sender, from)
addCash2(sender, from, amountXp)
if (requiredXp <= getLevelcash2(sender, from)) {
addLevel2(sender, from, 1)
b = `            ◪ *LEVEL UP* ◪
            
├─ ❏ *NÚMERO*: ${sender.split("@")[0]}.  
├─ ❏ *HORA*: ${time}.                                                                                    
├─ ❏ *PATENTE*: ${patt}
├─ ❏ *CASH*: ${getLevelcash2(sender, from)}
└─ ❏ *LEVEL*: ${getLevel} -> ${getLevellevel2(sender, from)}`
await reply(b)
}} catch (err) {
console.error(err)
}}




//TERMINAL 
if (!isCmd && !isGroup) {  console.log('> MENSAGEM AS', color(time, 'yellow'), 'DE', color(`"${pushname} - [${sender.replace('@c.us', '')}]"`)) }
if (!isCmd && isGroup) {  console.log('> MENSAGEM AS', color(time, 'yellow'), 'DE', color(`"${pushname} - [${sender.replace('@c.us', '')}]"`), 'EM', color(`"${groupName || formattedTitle}"`)) }
if (isCmd && !isGroup) { console.log(color(`> COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS', color(time, 'yellow'), 'DE', color(`"${pushname} - [${sender.replace('@c.us', '')}]"`)) }
if (isCmd && isGroup) { console.log(color(`> COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS', color(time, 'yellow'), 'DE', color(`"${pushname} - [${sender.replace('@c.us', '')}]"`), 'EM', color(`"${groupName || formattedTitle}"`)) }

await conn.updatePresence(from, Presence.available)

//SPAM
if(isGroup && !groupAdmins && budy.length > limiteca && !isWhite) {reply(`Adms😡 ve esse cara aqui ele está dando spam\n@${groupMetadata.owner.split("@")[0]} @${ownerNumber.split("@")[0]}`);console.log(color('deram Spam','red'))}
if ( !isMedia && !isCmd && !info.key.fromMe) { try { if (budy.includes(`${conn.user.jid.split('@')[0]}`)) { await reply(chatBot) } } catch (error) { return } }
if(isAutosticker){ if(type === 'imageMessage'){var getbuff = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info ;var dlfile = await conn.downloadMediaMessage(getbuff);reply(`Vai toma um cafezinho...\n já já eu volto`);var bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`;var mantap = await convertSticker(bas64, `Pack💀`, `Kauanzito`);var imageBuffer = new Buffer.from(mantap, 'base64');conn.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: info})}}

//INICIO COMANDOS STARTSWITH
if (budy.startsWith('>')){
if(!isOwner) return
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)}}

if (budy.startsWith('=>')){
if (!isOwner) return reply('somente meu criador')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}; return reply(bang)}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}}
if (body.startsWith('$')) {
if (!isOwner) return reply('somente meu criador')
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){}


//INICIO DE COMANDO DE PREFIXO
switch(command) {

case 'leveis':
if (!isGroup) return reply('Só em Grupo')
//if (!groupAdmins) return reply('BOT PRECISA SER ADM')
if (args.length < 1) return reply('Ative pressione -on, Desativar pressione -off')
if (args[0] === '-on') {
if (isLeveling) return reply('*O recurso de nível já estava ativo antes*')
settings.leveling.push(from)
fs.writeFileSync('./media/settings.json', JSON.stringify(settings))
reply(mess.levelon) 
} else if (args[0] === '-off') {
settings.leveling.splice(from, 1)
fs.writeFileSync('./media/settings.json', JSON.stringify(settings))
reply('_o recurso de leveis está desativado_')
} else {
reply('「* Adicionar parâmetro 1 / habilitar ou 0 / desabilitar*」')
}
break


case 'level':
if (!isLeveling) return reply(mess.levelnoton)
if (!isGroup) return reply(mess.only.group)
userLevel = getLevellevel2(sender, from)
userXp = getLevelcash2(sender, from)
if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
sem = sender.replace('@s.whatsapp.net','')
resu = await getBuffer(`https://api-gdr2.herokuapp.com/api/canvas/rank?avatar=https://i.ibb.co/NjwhcWW/viniciuswelcome.jpg&fotoFundo=https://i.ibb.co/NjwhcWW/viniciuswelcome.jpg&xp=${encodeUrl(userXp)}&requerXp=100000&nome=${encodeUrl(pushname)}&numero=1010&level=${encodeUrl(userLevel)}&rank=10`)
                resul = `     
            *REGISTRO*                                                               
            
  ├─ 💸 *NICK* : ${pushname}
  ├─ 💸 *NÚMERO* : ${sender.split("@")[0]}
  ├─ 💸 *PATENTE* : ${patt}               
  ├─ 💸 *XP* : ${userXp}
  ├─ 💸 *HORA* : ${time}
  └─ 💸 *LEVEL* : ${userLevel}`
conn.sendMessage(from, resu, image, { quoted: info,caption:resul})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break





///COMANDOS COM JSON

case 'listawhite':
case 'whitelist':
if(args[0] === '-list'){
tkks = '╭────*「 *white list* 」\n'
for (let V of settings.white) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${settings.white.length}\n╰──────*「 *LAYLA BOT* 」*────`
conn.sendMessage(from, tkks.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": settings.white}})
}else if((args[0]) === '-add'){
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return  reply(mess.only.ownerB)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
settings.white.push(`${mentioned}`)
fs.writeFileSync('./media/settings.json', JSON.stringify(settings))
susp = `@${mentioned[0].split('@')[0]} foi adicionado à lista e não sera banida caso de spam`
mentions(`${susp}`, mentioned, true)   
}
break

case 'autosticker':
if (!isGroup) return reply(ind.groupo())
if (!groupAdmins) return reply('só adm')
if (args.length < 1) return reply('Digite 1 para ativar\nDigite 0 para desativar')
if (args[0] === '-on') {
if (isAutosticker) return reply('*RECURSOS AUTOSTICKER JÁ ESTAVA ATIVO*')
settings.autofigu.push(from)
fs.writeFileSync('./media/settings.json', JSON.stringify(settings))
reply('*autosticker ativado com sucesso ✓*')
} else if (args[0] === '-off') {
if (!isAutofigu) return reply('*Já está desativado!!*')
settings.autofigu.splice(from)
fs.writeFileSync('./media/settings.json', JSON.stringify(settings))
reply('*Autosticker desativado com sucesso neste grupo ✔️*')
} else {
reply('-on para ativar, -off para desativar')
}
break









case 'perfil':
try {
ppimg = await conn.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
palavras = ["*Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos. – James Cameron, Cineastra*", "*O sucesso normalmente vem para quem está ocupado demais para procurar por ele – Henry David Thoreau, filósofo*", "*A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden, jogador e treinador de basquete*", "*Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência – Lisa M. Amos, executiva*", "*Se você não está disposto a arriscar, esteja disposto a uma vida comum – Jim Rohn, empreendedor*", "*Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso – Swami Vivekananda, pensador hindu*", "*Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor*", "*Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los – Walt Disney, desenhista e empreendedor", "*Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo – Winston Churchill, político*", "*Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali – Vaibhav Shah, pensador*", "*Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior – Denzel Washington, ator*", "*Oportunidades não surgem. É você que as cria – Chris Grosser, fotógrafo*", "*Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor – Albert Einstein, físico*", "*Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança – Charles Darwin, biólogo*", "*A melhor vingança é um sucesso estrondoso – Frank Sinatra, cantor*", "*Eu não falhei. Só descobri 10 mil caminhos que não eram o certo – Thomas Edison, inventor*", "*Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele – David Brinkley, jornalista*", "*Ninguém pode fazer você se sentir inferior sem o seu consentimento – Eleanor Roosevelt, primeira-dama dos EUA", "*O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo – Henry Ford, empreendedor*", "*Se você está atravessando um inferno, continue atravessando – Churchill*", "*O que nos parece uma provação amarga pode ser uma bênção disfarçada – Oscar Wilde, escritor*", "A distância entre a insanidade e a genialidade é medida pelo sucesso – Bruce Feirstein, roteirista", "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*", "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*", "*A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro – Nathaniel Hawthorne, escritor*", "*Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer – Einstein*", "*Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem – Ray Goforth, executivo*", "*Comece de onde você está. Use o que você tiver. Faça o que você puder – Arthur Ashe, tenista*","*As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo – Kevin Kline, ator*","*Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter – Thomas Jefferson, político*","*O ponto de partida de qualquer conquista é o desejo – Napoleon Hill, assessor político*"]
conselho = palavras[Math.floor(Math.random() * palavras.length)]

dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}

➻ *~_CONSELHO_~* :
${conselho}`
daftarimg = await getBuffer(ppimg)
conn.sendMessage(from, daftarimg , image, {caption: dptr, quoted: info})
break

case 'gerador':
exec(`cd media && bash config.sh dados`, async (error, stdout, stderr) => { if (error || stderr || stdout == null || stdout == '') {await reply('```FAIL```');console.log(error, stderr) } else { k = await getBuffer('https://thispersondoesnotexist.com/image')
conn.sendMessage(from, k, image,{caption:stdout})}})
break

case 'conselho':
palavras = ["*Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos. – James Cameron, Cineastra*", "*O sucesso normalmente vem para quem está ocupado demais para procurar por ele – Henry David Thoreau, filósofo*", "*A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden, jogador e treinador de basquete*", "*Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência – Lisa M. Amos, executiva*", "*Se você não está disposto a arriscar, esteja disposto a uma vida comum – Jim Rohn, empreendedor*", "*Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso – Swami Vivekananda, pensador hindu*", "*Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor*", "*Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los – Walt Disney, desenhista e empreendedor", "*Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo – Winston Churchill, político*", "*Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali – Vaibhav Shah, pensador*", "*Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior – Denzel Washington, ator*", "*Oportunidades não surgem. É você que as cria – Chris Grosser, fotógrafo*", "*Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor – Albert Einstein, físico*", "*Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança – Charles Darwin, biólogo*", "*A melhor vingança é um sucesso estrondoso – Frank Sinatra, cantor*", "*Eu não falhei. Só descobri 10 mil caminhos que não eram o certo – Thomas Edison, inventor*", "*Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele – David Brinkley, jornalista*", "*Ninguém pode fazer você se sentir inferior sem o seu consentimento – Eleanor Roosevelt, primeira-dama dos EUA", "*O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo – Henry Ford, empreendedor*", "*Se você está atravessando um inferno, continue atravessando – Churchill*", "*O que nos parece uma provação amarga pode ser uma bênção disfarçada – Oscar Wilde, escritor*", "A distância entre a insanidade e a genialidade é medida pelo sucesso – Bruce Feirstein, roteirista", "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*", "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*", "*A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro – Nathaniel Hawthorne, escritor*", "*Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer – Einstein*", "*Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem – Ray Goforth, executivo*", "*Comece de onde você está. Use o que você tiver. Faça o que você puder – Arthur Ashe, tenista*","*As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo – Kevin Kline, ator*","*Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter – Thomas Jefferson, político*","*O ponto de partida de qualquer conquista é o desejo – Napoleon Hill, assessor político*"]
conselho = palavras[Math.floor(Math.random() * palavras.length)]
k = `• *_CONSELHO_* :

${conselho}`
reply(k)
break
case 'audio':
ass = JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await conn.downloadAndSaveMediaMessage(ass)
bass = fs.readFileSync(`./${bas}`)
conn.sendMessage(from, bass, audio,{mimetype:'audio/mp4'})
break

case 'tempo':
if(args.length === 0)return reply('cade a city')
reply( `Verificando com São Pedro como está o clima em ${args.join(' ')}... pera um pouco`)
clima = await axios.get(`https://weather.contrateumdev.com.br/api/weather/city/?city=${body.slice(7)}`)
if (clima.data.cod == '404') return await reply( `Uai... ${clima.data.message}`)
await conn.sendMessage( from, `*Temperatura:* ${clima.data.main.temp} ºC \n*Sensação térmica:* ${clima.data.main.feels_like} ºC \n*Temperatura mínima:* ${clima.data.main.temp_min} ºC \n*Temperatura máxima:* ${clima.data.main.temp_max} ºC \n*Pressão atmosférica:* ${clima.data.main.pressure}\n*Umidade:* ${clima.data.main.humidity}%\n----------------------\n${clima.data.name} - lat: ${clima.data.coord.lat} lon: ${clima.data.coord.lon}`,text)
break

case 'ping':
		    timestamppp = speed();
		    latensi = speed() - timestamppp		
			 pingnya = `*Latensi: ${latensi.toFixed(4)} Second*`
			conn.sendMessage(from, pingnya, text, {quoted: info})
			
			break

case 'exe':
konsol = body.slice(5)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
break

case 'play':
try{
if (!q) return reply(`Example : ${prefix + command} musica`)
reply(`Espere estou a procurar sua musica🎧`)
res = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${q}`)
thumbnfo = `*Resultado Encontrado*
               
📜 Título : ${res.result.title}
🌐 Data : ${res.result.published}
🎞️ Views : ${res.result.views}
⚖️ Duração : ${res.duration}
🎥 Video Yt : ${res.url}`

buttons = [{buttonId:`${prefix}playmp4 ${res.url}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}mp3 ${res.result.url}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await conn.prepareMessageMedia({url: res.result.thumb},'imageMessage',{thumbnail: fs.readFileSync('./media/img/ft.png')})).imageMessage

buttonsMessage = {
contentText: thumbnfo,
footerText:'```LAYLA BOT```',
imageMessage,
buttons,
headerType:4
}
inibut = await conn.prepareMessageFromContent(from,{buttonsMessage},{})
conn.relayWAMessage(inibut)
}catch (e){
reply(`desculpe mas não achei sua musica`)
//reply(`Caso o problema persistir:\nreclame com meu dono\nwa.me/554491150998`)
console.log(e)
}
break

case 'videourl':
case 'videopralink':

if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(mess.wait)
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
owgi = await conn.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('Marque um vídeo')
}
break
case 'imgpralink': case 'tourl': 

if (isQuotedImage)return reply('marque ou envie uma imagem')
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
var jnckk = await  conn.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('220519c5c11d04f12a1e039bf4304b', jnckk)
.then(data => {
var caps = `╭─「 IMAGEM PARA LINK 」\n│\n│• ID : ${data.id}\n│• Tipo : ${data.image.mime}\n│• Extensão : ${data.image.extension}\n│\n│• LINK : ${data.display_url}\n╰─────────────────────`
ibb = fs.readFileSync(jnckk)
conn.sendMessage(from, ibb, image, { quoted: info, caption: caps })
})
.catch(err => {
throw err 
})
break

case 'mp3':
if(!q) return reply('?')
reply(`Espere estou a baixar sua musica🎧🎧`)
res = await getBuffer(`${q}`).catch(e => {
reply('_[ ! ] Erro [ ! ]_')
})
conn.sendMessage(from, res, audio,{mimetype: 'audio/mp4',quoted:info})
break

case 'playmp4':
//
reply(mess.wait) 
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Musica Sad`)
query = args.join(" ")
get_resullt = await fetchJson(`https://api.zeks.me/api/ytmp4?apikey=7Goaf062ZczBHYBJItMuYqAw9kw&url=${query}`)
get_result = get_resullt.result
 get_video = await getBuffer(get_result.url_video)
conn.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: info })
break 


case 'execut':
try{
return eval(`(async() => { ${args.join(' ')}})()`)
}catch (e) {
reply(`${e}`)
}
break

case 'calc':
try {
return reply(JSON.stringify(eval(budy.slice(6)),null,'\t'))
} catch(e) {
reply(`Desculpe não foi possivel fazer essa conta use os simbolos \nex: 2*2 \n 2+2\n 2-2 \n 2/2`)
}
break

case 'product':
p = {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./media/img/ft.png`)},
"title": `OLA ONICHAN👉👈\n${pushname}`,
"description": "ALADIN_BOT",
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": "ALADIN_BOT",
"productImageCount": 1}
conn.sendMessage(from, p, product,{"businessOwnerJid": `554491150998@s.whatsapp.net`})
break 

case 'status':
notlida = await conn.loadAllUnreadMessages()
k = conn.chats.all()
bahh = await getGroup(k)
bahhh = await getpc(k)
uptime = process.uptime()
timestamppp = speed();
latensi = speed() - timestamppp
pingnya = `${latensi.toFixed(4)} Seconds*`
inf =
`    STATUS BOT

  _Date : ${date}_  
  _Totalchats: ${k.length}_
  _TotalGP: ${bahh.length}_
  _TotalPVS: ${bahhh.length}_
  _Msg não lida: ${notlida.length}_
  _Versão whatsapp: ${conn.user.phone.wa_version}_ 
  _Latencia: ${pingnya}_
  
  _Uptime: ${tempo(uptime)}_
`
 conn.sendMessage(from, inf, text)

break        


case 'exec':
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;					
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break





case 's':
case 'f':
case 'sticker':
case 'figu':
if (!isQuotedImage)return reply('cade a ft')
var getbuff = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
var dlfile = await conn.downloadMediaMessage(getbuff)
reply(`Vai toma um cafezinho...\n já já eu volto`)
var bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `Pack💀`, `Kauanzito`)
var imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: info})
break


case 'ytsrc':
if(args === 0 )return reply('oq vc quer procurar?')
 teks = body.slice(7)
anu = await fetchJson(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
const objs = []
for(i=0;i< anu.resultados.length; ++i) {
let data = {
rowId: `${prefix}play `+ anu.resultados[i].title,
title: `${prefix}play `+ anu.resultados[i].title
}
objs.push(data)
}
pyloa = {
listMessage: {
title: "✅ Músicas encotradas ✅",
buttonText: "Mostra lista de músicas",
description: `Palavra chave: ${teks}`,
listType: 1,
sections: [
{
title: "Músicas relacionadas",
rows: objs
}
]
}}
let preparedPyloa = await conn.prepareMessageFromContent(from, pyloa,{});
await conn.relayWAMessage(preparedPyloa, {waitForAck: true})
break

case 'cassino':
  valueRand = (value) => { valres = value[Math.floor(Math.random() * value.length)];return valres }
cassin = ['🍒 ', '🎃 ', '🍐 ']
			 cassinend = valueRand(cassin) + valueRand(cassin) + valueRand(cassin)
			 cas = valueRand(cassin) + valueRand(cassin) + valueRand(cassin)
			cass = valueRand(cassin) + valueRand(cassin) + valueRand(cassin)
				if (cassinend == '🍒 🍒 🍒 ' || cassinend == '🍐 🍐 🍐 ' || cassinend == '🎃 🎃 🎃 '){
k = `\n┏━━━━❪🎰❫━━━━\n┣► ${cass}\n┣► ${cassinend} ◄┛\n┣► ${cas}\n┗━━━━❪💸❫━━━━\nvc Ganhou ${pushname}`
reply(`${k}`)
} else {
k = `\n┏━━━━❪🎰❫━━━━\n┣► ${cass}\n┣► ${cassinend} ◄┛\n┣► ${cas}\n┗━━━━❪💸❫━━━━ \nvc Perdeu ${pushname}\nmais sorte na proxima`
reply(`${k}`)
}
break



case 'localizacao':
ppp = body.slice(13)
send = ppp.split("|")[0];
lok = ppp.split("|")[1];
conn.sendMessage(from, {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:send,address:lok}, MessageType.location)
break


case 'mek':
 paramsQuoted = info.message
 sul = paramsQuoted
sat = JSON.stringify(sul, null, 2)
reply(`${sat}`)
break

case 'kickme':
if (!isGroup) return reply(mess.only.group)
if (groupAdmins || isOwner) {
conn.groupLeave(from)
} else {
reply(mess.only.admin)
}
break

case 'bc':
if (!isOwner) return reply('Quem é Você, você não é meu dono 😂?')
if (args.length < 1) return reply('.......')
anu = await conn.chats.all()
bahh = conn.chats.array.filter(v => v.jid.endsWith('g.us'))
bahhh = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
if(args[0].toLowerCase() === '-all'){
if (isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buff = await conn.downloadMediaMessage(encmedia)
for (i = 0; i < anu.length; i++) {
conn.sendMessage(anu[i].jid, buff, image, {caption: `[ TRANSMIÇÃO DE MY DONO ]\n\n${body.slice(9)}`})
}
reply(`transmição foi emviada a ${bahh.length} grupos e ah ${bahhh.length} pvs`)
} else {
for (i = 0; i < anu.length; i++) {
conn.sendMessage(anu[i].jid, `[ TRANSMISSÃO DO MY DONO ]\n\n${body.slice(9)}`,text)
}
reply(`transmição foi enviada a ${bahh.length} grupos e ah ${bahhh.length} pvs`)
}
}else if(args[0].toLowerCase() === '-pvs'){
if (isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buff = await conn.downloadMediaMessage(encmedia)
for (i = 0; i < bahhh.length; i++) {
conn.sendMessage(bahhh[i].jid, buff, image, {caption: `[ TRANSMIÇÃO DE MY DONO ]\n\n${body.slice(9)}`})
}
reply(`transmição foi emviada para ${bahhh.length} pvs`)
} else {
for (i = 0; i < bahhh.length; i++) {
conn.sendMessage(bahhh[i].jid, `[ TRANSMISSÃO DE MY DONO ]\n\n${body.slice(9)}`,text)
}
reply(`transmição foi emviada a ${bahhh.length} pvs`)
}

} else if(args[0].toLowerCase() === '-gps'){
if (isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
buff = await conn.downloadMediaMessage(encmedia)
for (i = 0; i < bahh.length; i++) {
conn.sendMessage(bahh[i].jid, buff, image, {caption: `[ TRANSMIÇÃO DE MY DONO ]\n\n${body.slice(9)}`})
}
reply(`transmição foi emviada a ${bahh.length} grupos`)
} else {
for (i = 0; i < bahh.length; i++) {
conn.sendMessage(bahh[i].jid, `[ TRANSMISSÃO DE MY DONO ]\n\n${body.slice(9)}`,text)
}
reply(`transmição foi emviada a ${bahh.length} grupos`)
}
}
break
case 'listagp': 
if (!isOwner) return reply('~SOMENTE MEU DONO LINDÃO~')
tdufg = await conn.chats.all();
ingfoo = await getGroup(tdufg)
teks1 = `*LISTA  DE  GRUPOS*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n*Total msg:${tdufg[i].messages.length}* \n\n`
}
reply(teks1)
break



case 'calunia':
            if (args.length < 1) return reply(`Use :\n${prefix}calunia [@tag|fala da pessoa|fala bot]]\n\nEx : \n${prefix}calunia @tagmember|oi|oi juca`)
            gh = args.join('')
            mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
            replace = gh.split("|")[0];
            target = gh.split("|")[1];
            bot = gh.split("|")[2];
            conn.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, },caption: `${target}`})
            break
            
            case 'teste':
          //  if (args.length < 1) return reply(`Use :\n${prefix}calunia [@tag|fala da pessoa|fala bot]]\n\nEx : \n${prefix}calunia @tagmember|oi|oi juca`)
            gh = args.join('')
            conn.sendMessage(from, `${gh}`, text, {quoted: { key: { fromMe: false, participant: `554491150998@s.whatsapp.net`,...(from ? { remoteJid: "554491150998-1632531701@g.us" } : {}) } }})
            break

case 'join':
   if (!isOwner) return reply('Só my dono')
            try {
           // if (!args.includes('whatsapp.com')) return reply('cade o link')            
            if (!q) return reply('cade o link do grupo')
            hen = args[0]
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply ('pastikan link sudah benar!')
             await conn.acceptInvite(codeInvite)
            reply('Sucesso')
            } catch (e) {
            reply('LINK ERROR!')
            console.log(e)
  }
  break

case 'menu2':

       pii = conn.prepareMessageFromContent(from, {
 "listMessage": {
						"title": "MENU ",
						"description": `olá ${pushname}`,
						"buttonText": "CLIQUE AQUI",
						"listType": 1,
						"sections": [
							{
								"title": "To sem menu kkkk",
								"rows": [
									{
										"title": "menu",
										"rowId": `${prefix}menu`
									}																
								]
							}
						]
					}}, {})
 conn.relayWAMessage(pii, {waitForAck: true})
break

case 'menu':
chatss = conn.chats.all();
menu = `「 MENU

「 BOT: V1.0 
════════════════════
     INFO BOT

「 NOME: LAYLA BOT ツ
「 PREFIXO : [  ${prefix}  ]
「 Horário:  ${hr}  
「 Data:  ${date}  
「 Total de chats:  ${chatss.length} chats  
「 DONO: KAUANツ 


    |═══════════════
   ┃
   ┃   「 MENU  
   ┃
   ┃  ${prefix}play
   ┃  ${prefix}play2
   ┃  ${prefix}ping
   ┃  ${prefix}tempo
   ┃  ${prefix}cassino
   ┃  ${prefix}figu
   ┃  ${prefix}ytsrc
   ┃  ${prefix}videopralink
   ┃  ${prefix}imgpralink
   ┃  ${prefix}localizacao
   ┃  ${prefix}conselho
   ┃  ${prefix}frases
   ┃  ${prefix}inspecionar
   ┃  ${prefix}gerador
   ┃  ${prefix}calc
   ┃  ${prefix}limparchat
   ┃
   ┣━━━━ PHOTHOXY ━━━━┓
   ┃
   ┃  ${prefix}love
   ┃  ${prefix}coffe
   ┃  ${prefix}copo
   ┃  ${prefix}escudo
   ┃  ${prefix}america
   ┃  ${prefix}googlelogo
   ┃  ${prefix}glitch
   ┃  ${prefix}fire
   ┃  ${prefix}butterfly
   ┃  ${prefix}shadow
   ┃  ${prefix}grass
   ┃  ${prefix}narutobanner
   ┃  ${prefix}metalgold
   ┃  ${prefix}cemiterio
   ┃  ${prefix}papel
   ┃  ${prefix}lobometal
   ┃  ${prefix}harryp
   ┃ 
   ┣━━━━ OWNER ━━━━┓
   ┃
   ┃  ${prefix}kickme
   ┃  ${prefix}get
   ┃  ${prefix}whitelist
   ┃  ${prefix}exec
   ┃  ${prefix}join
   ┃
   ┃ => [ eval ]
   ┃  > [ async ]
   ┃  $ [ termux ]
   ┃ 
   ┣━━━━ BY LAYLA ━━━━┓
   ┃
   ┃ATUALIZADO EM: 14/10/2021`
await conn.sendMessage(from, `𝐵𝑒𝑚 𝑣𝑖𝑛𝑑𝑜(𝑎) 𝒜𝑜 𝑚𝑒𝑛𝑢 𝑑𝑎 𝐿𝑎𝑦𝐿𝑎`, text)
await conn.sendMessage(from, `${menu}`, text, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": '```LAYLA-BOT```',"title": "hmm" }}}})
  break

case 'get':
if(!q) return reply('Cade o Link?')
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
reply(bu)
})   
break

case 'love':


if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pLoveMsg(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})

break
case 'coffe':


if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pCoffeCup(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})

break
case 'copo':


if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pCup(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})

break
case 'escudo':


if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pCaptain(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})

break
case 'america':


if(args.length < 1) return reply(`Utilize assim ${prefix + command} sad/sad`) 
pCaptain(args.join(' ').split('/')[0], args.join(' ').split('/')[1])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break
case 'glitch':

tdp = body.slice(8)
if(tdp.length < 5) return reply(`Utilize assim ${prefix + command} sad/sad`) 
pGlitch(args.join(' ').split('/')[0], args.join(' ').split('/')[1])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break
case 'googlesg':
case 'googlelogo': 

tdt = args.join(" ")
if(tdt.length < 7) return reply(`Utilize assim ${prefix + command} sad/sad/sad`) 
pGooglesg(args.join(' ').split('/')[0], args.join(' ').split('/')[1], args.join(' ').split('/')[2])
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break
case 'butterfly':


if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pButterfly(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 

case 'nicks':
data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=AriaGanzTzy`, {method: 'get'})
teks = '=================\n'
for (let i of data.result) {
teks += `Nick: ${i}\n--------------------------\n`
}
reply(teks.trim())
break
case 'play2':  
play2 = body.slice(7)
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play2}&apikey=AriaGanzTzy`)
if (anu.error) return reply(anu.error) 
client.sendMessage(from, 'Enviando sua música, aguarde 🎬',MessageType.text, { quoted: info} )
infomp3 = `*Título:* ${anu.result.title}\n*Fonte:* ${anu.result.source}\n*Tamanho:* ${anu.result.size}`
buffer = await getBuffer(anu.result.thumbnail) 
lagu = await getBuffer(anu.result.url_audio)
conn.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
conn.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: info})
break

case 'fire':
if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pFogo(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})

break
case 'shadow':
if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pShadow(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})

break
case 'grass':

if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pMsgGrass(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})

break
case 'narutobanner':


if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pNaruto(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})

break
case 'metalgold':


if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pOuro(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})

break 
case 'cemiterio':
case 'cemitério': 


if (!q) return reply('onde está o texto?')
pSemi(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
		})

break 
case 'papel':
if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pBurnPapper(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})
break 
case 'lobometal':

if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pAwolfMetal(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})

break 
case 'harryp':
if (args.length < 1) return reply('onde está o texto?')
reply(mess.wait)
pHarryPotter(`${q}`)
.then(res => {
console.log(res) 
sendMediaURL(from, res.url)
})

break

case 'limparchat':
reply("🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️")
reply("🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️")
reply("🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️")
reply('```CHAT LIMPO COM SUCESSO```')
break

case 'stiker':;case 'fi':
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
media = await conn.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
console.log(`webpmux -set exif ${addMetadata('bot','Bot')} ${rano} -o ${rano}`)
reply('*「 ❗ 」 Espere só um pouquinho amigo, a sua figurinha está sendo feita...*')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {

//console.log(`webpmux -set exif ${addMetadata('bot','Bot')} ${rano} -o ${rano}`)
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(mess.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 00:00 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, buffer, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
media = await conn.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Bot', 'Ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, buffer, sticker, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break


     case 'fig':
				if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
						encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
						media = await conn.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								conn.sendMessage(from, buffer, sticker, {quoted: info})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
						const media = await conn.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply('calma ai ...') 
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								conn.sendMessage(from, buffer, sticker, {quoted: info})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)}
					break

case 'inspect':
  try {
  if (!q) return reply(`se deseja inpecionar esse gp digite ${prefix}inspect -gp , caso queira inpecionar outro gp digite ${prefix}inspect -link 'link do gp'`)
  cos = args[0]
  cos2 = body.slice(15)
  if(args[0] === '-link'){
  net = cos2.split('https://chat.whatsapp.com/')[1]
  }else if (args[0] === '-gp'){
   net = await conn.groupInviteCode(from) 
  }
  jids = []
  let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await conn.query({ 
  json: ["query", "invite",net],
  expect200:true })
  let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nome Gp* : ${subject}
*data criação* : ${formatDate(creation * 1000)}
*total Membros* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : nao tem "-"'}
*Id desc* : ${descId}
${descOwner ? `*auterada por* : @${descOwner.split('@')[0]}` : '*☺* : -'}\n*em* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}`
 for ( let y of participants) {
   par += `\n> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'sim' : 'nao'}`
   jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
   }
   jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`);
   jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
   conn.sendMessage(from,par,text,{quoted:info,contextInfo:{mentionedJid:jids}})
   } catch (e){
   console.log(e)
   }
   break
   
   
   //////////FIM///////////
default:
if(isCmd && command.length != 0){
k = `
   NOT FOUND 404
comando: ${command}

`
reply(k)
}
}
}catch (err) {
e = String(err)
if (!e.includes("info.isZero" || !e.match("jid is not defined"))){
const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
console.log(color("[ ERRO ]", "aqua"),color('as'),color(time_error, "yellow"),  color(e, 'red'))

}
}
})
}


starts()
