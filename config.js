const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Accra,Ghana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Accra/Ghana";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "234 704 798 9309";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "234 704 798 9309";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "Your session ld"  /SUHAIL_20_12_05_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI4LFxuICAgICAgICA5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgOTksXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDExLFxuICAgICAgICA2OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY0LFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDU4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFendyL0pkZjV3S25VZUtSSFJTZ3BZYVI2V0phc29sMW5la3poem9rVXhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1Rm5idVp0S1FVQzhwSXc4T1dZUm5RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJiZjczZGMzLWJiZjAtNDVlYi1iMDliLTdhZjg2NTE4NjY4MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDIzOSxcbiAgICAgIDc0LFxuICAgICAgOTksXG4gICAgICAxNzQsXG4gICAgICAxNzQsXG4gICAgICAyNDksXG4gICAgICAyMTAsXG4gICAgICA1MSxcbiAgICAgIDE1LFxuICAgICAgNDEsXG4gICAgICA3MixcbiAgICAgIDIxNixcbiAgICAgIDEwMCxcbiAgICAgIDQwLFxuICAgICAgMjMzLFxuICAgICAgMTI0LFxuICAgICAgMTIxLFxuICAgICAgMjQ3LFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDIzMSxcbiAgICAgIDEzMyxcbiAgICAgIDExNixcbiAgICAgIDEzNSxcbiAgICAgIDE4MyxcbiAgICAgIDE1NixcbiAgICAgIDE0OSxcbiAgICAgIDExNSxcbiAgICAgIDI0NixcbiAgICAgIDEwNixcbiAgICAgIDY1LFxuICAgICAgMjQ4LFxuICAgICAgODEsXG4gICAgICAxNTUsXG4gICAgICAyMjksXG4gICAgICAyNTIsXG4gICAgICAyMDQsXG4gICAgICAyMzEsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2NkdGMVpQRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0Nzk4OTMwOToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjEyMjU4ODgxNTc5MDI6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPTDFyZW9FRUozUGpzRUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjEzN3ZIOVZhSHRXWW01RWl1MnVtbW9oajE4MklqcUwramszVGY4alFpUkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN0d3N2NaRHJlZzNCQkNCUUNpdldKeEJmVFk4L0RPU1g1STZyK2tEeWxUUDh6akpuZEhWZEhXajN1SlBJMTFxVmVDa3YvRUpJTmZTUjA4SUxRekJ6RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic0dzcko2UUZROS9XbHBMdGl2a1UwWVB5MGtMUTNxbGJlUHhYaEIwMk56Qy9GdUhwT3VmNUYycDA0cFprWkdQdHRjc0JEa1BPb1pKVVJtSkV4Q0ljQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0Nzk4OTMwOToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDcxNjcxMzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGS3BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZLcC5qc29uIjogIntcImtleURhdGFcIjpcIkdDSUNRRUt2ZjFtV3g1ZnNWVWRzRHBOVURpTWMzcy9Gck1wdWVtdE4rdkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5Njc5MjI5MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ2NjQ1MDA0NDA0XCJ9Igp9/ PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "MRWILL-available",
  packname: process.env.PACK_NAME || "MRWILL-available",
  botname : process.env.BOT_NAME  || "MRWILL-available",
  ownername:process.env.OWNER_NAME|| "MRWILL-available",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
