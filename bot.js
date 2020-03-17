var Discord = require('discord.io');
var Discord_voice = require('discord.js');
const client = new Discord_voice.Client();
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
            var args = message.substring(1).split(' ');
            var cmd = args[0];
           
            args = args.splice(1);
            switch(cmd) {
                case 'fuck':
                    bot.sendMessage({
                        to: channelID,
                        message: 'RATSHIT BATSHIT DIRTY OLD TWAT, SIXTY NINE ASSHOLES TIED IN A KNOT, HOORAY LIZARD SHIT FUCK',
                        tts: true
                    });
                break;
                case 'dvd':
                    bot.sendMessage({
                        to: channelID,
                        message: 'STOP! STOP! STOP! THIS IS NOT A DVD. THIS IS NOT A DVD. THIS IS NOT A DVD. THIS IS NOT A DVD. THIS IS A DISCORD. ITS A DISCORD. ITS A DISCORD FOR SHENIGANS. THIS IS A DISCORD. THIS IS NOT A DVD. STOP! READ! READ THE DESCRIPTION! THIS IS NOT A DVD. STILL, AFTER THIS, PEOPLE WILL STILL BE IGNORANT AND USE MESSENGER. THIS IS NOT A DVD. STOP! READ! READ WHAT THIS IS. THIS IS A DISCORD. THIS IS NOT A DVD. STOP! AND READ. READ THE DESCRIPTION. READ THE DESCRIPTION!',
                        tts: true
                    });
                break;
            }
    }
    var i;
    for (i = 0; i < message.length; i++){
        if (message.substring(i, i+3) == 'sex') {
            if(userID != bot.id){
                bot.sendMessage({
                    to: channelID,
                    message: 'Did somebody say sex??!??!?!?',
                    tts: true
                });
            }
            
        }

     }
});

client.login('Njg5MzExNDM5MTA5ODgxODY3.XnBBgw.xAl_R3ELYVBja02bZI2RvTdamC8');

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'the last ship') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const ytdl = require('ytdl-core');
      connection.play(ytdl('https://www.youtube.com/watch?v=VOmUw6Y_z6I', { filter: 'audioonly' }));
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
