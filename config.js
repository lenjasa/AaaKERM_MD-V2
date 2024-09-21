//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "491787297129";
global.owner = process.env.OWNER_NUMBER || "491787297129";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU4rZ2lhRENPWDhNOHBIa0ZpRit0S1lLakJLZmRhbmdGTy9Gc1VRV25XOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDFKSDgrUzlGc0J2R0dJN0VBZmd4emdwODFzYStzRkhaSEdMZW9OWGQwMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTkgwWERXM0kwVzR4Z3FJRThlMVpkandIZE14ZzJHVU0wVi80SU9nWlZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBdWhFUXEvMWMzUUJRbE1pVndaWlRySVZxMHB4QzRRQlFncGdKMjdtVjJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNdjl5WXJIU2Zna2k0QTBDdXRaQzVHb3VGM0JCZ2hEbXRwczM5MDFtMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndpR0FkRmVEUmdqc3NhQ2FGNkVmY1hObUo4cWFMeXJuN0N2Q0daTzlJME09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUtBQTUvS1VJMFVlRjRmTDJqZGdIc3dYZ2lWSkdEeUxpa0tLWmk5WnpXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmZtUVlIM0JXWUdSUVV4aGljbHhuRVhFWWN2d2h5WEh0R2NyR3p4akpnbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9YdDdVV09SWjAvRFdTYW1zOHB5ejhZY1MzdllvYUovcFIyeEJVWE9NNTJuRDNvTXJzSXhoQURKZ0kva2d5S1dXdzQxZHBxQzVndVdNbkJNclUzOUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiI3SE5zTWRHckF0TEF3dGZUQTZnSGtjcm5JQTJvaFg1TitMWmZPOHdCdWM4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQ5MTc4NzI5NzEyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNTM3QUFBNDkxRjFBNEM1MTQwQjdDQzJFNUEzQTcwOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2OTQ5Mzg4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPRlhZSVdOZ1M2QzhnaWdncUFKMVhnIiwicGhvbmVJZCI6IjI2ZTJkOGM5LWViNzItNGYyNS05NmQyLWMxZjNhZDM5NGEzMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZUlQQ0ljOWNMVEJpKzNsbS9RQXkxSGhkZTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tEd2JhSVplWnZnWFNVblo1Smc4cXNSaXJZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllHUktTUFNEIiwibWUiOnsiaWQiOiI0OTE3ODcyOTcxMjk6NzZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTGVuaWkuIOKclu+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSW1Tbi9ZR0VQM1B2TGNHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSmlBV0JwUGlSL0xvVEpYNXA0REJ4eHZtVTg2WWFUN0huSlJCZGFWbEJpdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiamxtSzU5VUVhT3pRcGQwYUFFd210SzhIVWQ5cmd3WVRyeUN3Mm5wZVF3NXpwckk1TTFsZlFKRHdsWis5bjhrSVB1eitNaU54aTA3ZmcwZlB1V2I3Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IlpDbVM1aXNFN3RFL1IxS21SaGhhQTVkQjNkNXRsMnhpazM4UWNlMm9MS0pMMTcrZXNIRzdjUEJuMElrQUxFRmNWR1lMYmpGZWh3OHZyZzdtMGJjQURBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDkxNzg3Mjk3MTI5Ojc2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNZZ0ZnYVQ0a2Z5NkV5VithZUF3Y2NiNWxQT21Hayt4NXlVUVhXbFpRWXMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY5NDkzODYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWxoIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF L E N I I`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "DEINEFETTEMUTTA",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "lenii",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
