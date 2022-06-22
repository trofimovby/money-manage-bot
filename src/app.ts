import {Telegraf} from 'telegraf'

const bot = new Telegraf("5400151287:AAGMaErASVaY_QMcYvmqxeX6CI3bsyCgUUY")
bot.start((ctx) => ctx.reply('Здарова заебал'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Здарова заебал'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))