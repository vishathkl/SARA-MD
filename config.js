const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/vishathkl/SARA-MD/blob/main/Image/1761314494548.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello🌹💛 SARA-MD Is Alive Now🧡💚💙💛❤️*",
BOT_OWNER: '94765346615',  // Replace with the owner's phone number



};
