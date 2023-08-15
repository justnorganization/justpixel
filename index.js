const { AoiClient, LoadCommands } = require("aoi.js");
require('dotenv').config()

const bot = new AoiClient({
    token: process.env.TOKEN,
    prefix: "p!",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    },
    fetchInvites: {
        cacheInviters: true,
        enabled: true,
    },
    suppressAllErrors: false,
    errorMessage: true,
    aoiAutoUpdate: true,
    aoiWarning: true,
    aoiLogs: true,
    respondOnEdit: {
        commands: true
    },
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")

bot.variables({
    prefix: "p!"
})

bot.status({
    type: "WATCHING",
    text: "GitHub - justnorganization/justpixel"
})

bot.command({
    name:"createCommands",
    code:`
    $createApplicationCommand[global;help;Get bot's command list;true;slash]
    $onlyForIDs[$clientOwnerIDs;no sufficient permission]`
})