const { app, BrowserWindow } = require("electron");
const http = require("http");
const express = require("express");
const RED = require("node-red");

const expressApp = express();
const server = http.createServer(expressApp);

const settings = {
  httpAdminRoot: "/", 
  httpNodeRoot: "/",
  userDir: __dirname + "/userDir",
  flowFile: "flows.json",
  uiPort: 1880
};


app.whenReady().then(() => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    });
    window.maximize()

    RED.init(server,settings);

    expressApp.use(settings.httpAdminRoot, RED.httpAdmin);
    expressApp.use(settings.httpNodeRoot, RED.httpNode);

    async function promiseRED(){
        await RED.start()
        return "Starting Node-RED..."
    }

    promiseRED().then(
        function(val){
            console.log(val)
            window.loadURL("http://localhost:1880/dashboard")
        },
        function(err){console.log(err)}
    )
})


server.listen(settings.uiPort, () => {
  console.log(`Node-RED läuft auf http://localhost:${settings.uiPort}`);
});