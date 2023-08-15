const { AoiClient, LoadCommands } = require("aoi.js");
const {Panel} = require("@akarui/aoi.panel")
require('dotenv').config()

const bot = new AoiClient({
    token: process.env.TOKEN,
    prefix: "$getServerVar[prefix]",
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
    }, // Example refers to @akarui/aoi.db, other databases are not included in this Example.
    fetchInvites: {
        cacheInviters : true,
        enabled : true,
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

const panel = new Panel({
    port: 3000,
    client: bot
})

panel.loadAPI({
    auth: " Authentication key here (random string)"
})

panel.loadGUI({
    username: "justmammt",
    password: "mariop2009",
})

bot.command({
    name: "ping",
    code: `Pong! $pingms`
});

bot.variables({
    prefix: "p!"
})