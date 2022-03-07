const fs = require("fs")

//User
exports.senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
exports.ban = JSON.parse(fs.readFileSync('./database/banned.json'))



exports.premium = JSON.parse(fs.readFileSync('./database/premium.json'))
exports._claim = JSON.parse(fs.readFileSync('./database/claim.json'))
exports.sewa = JSON.parse(fs.readFileSync("./database/sewa.json"))
exports.user = JSON.parse(fs.readFileSync('./database/user.json'))
exports.hitnya = JSON.parse(fs.readFileSync('./database/hitToday.json'))
exports.blocked = JSON.parse(fs.readFileSync('./database/userblocked.json'))

exports._reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));

//List
exports.listcmdblock = JSON.parse(fs.readFileSync('./database/blockcmd.json'))
exports.listerror = JSON.parse(fs.readFileSync('./database/listerror.json'))
exports._scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
exports.commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))































