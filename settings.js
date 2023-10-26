/*
SC INI DALAM TAHAB PERKEMBANGAN JIKA ADA FITUR YANG RUSAK TOLOLNG DI MAKLUMIN

KONTAK DEVOLOPER : 6289635946324
YOUTUBE : KAYZEN OFFC
INSTAGRAM : kayzennreall_
*/


const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6282223095204'] //ur owner number
global.ownernomer = "6282223095204" //ur owner number2
global.ownername = "Z SANG PENGUASA MALAM" //ur owner name
global.ytname = "Z LAH" //ur yt chanel name
global.socialm = "GitHub: gada" //ur github or insta name
global.location = "Indonesia, Jatim, gresik" //ur location

//new
global.botname = "BUDAK Z"
global.ownernumber = '6282223095204'
global.ownername = 'Z'
global.ownerNumber = ["6282223095204@s.whatsapp.net"]
global.ownerweb = "https://youtube.com"
global.websitex = "https://chat.whatsapp.com"
global.wagc = "https://chat.whatsapp.com"
global.themeemoji = '🗿'
global.wm = "Z OFFICIAL."
global.botscript = 'Minta Ke Owner wa.me/6282223095204' //script link
global.packname = "Sticker By"
global.author = "Z\n\n\nA whatsapp bot developed by\BOT Z \n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : 6282223095204"
global.creator = "6282223095204@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/Thumb.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/Thumb.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/Thumb.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/Thumb.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Nih kak!',
    admin: 'Fitur khusus admin grup kak!',
    botAdmin: 'Bot nya jadiin admin dulu!',
    premime: 'Fitur khusus pengguna premium',
    owner: 'Fitur nya khusus owner aku kak 🐣',
    group: 'Pakai fitur ini di dalam grup aja kak!',
    private: 'Fitur khusus private chat!',
    bot: 'Biar saya aja kak yg pake command nya >_<',
    wait: 'In process...',
    linkm: 'Link nya?',
    endLimit: 'Limit nya habis, coba lagi tahun depan',
    nsfw: 'Fitur nsfw belum aktif!',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
