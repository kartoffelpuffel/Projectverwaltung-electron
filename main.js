const { app, BrowserWindow } = require("electron");
//const RED = require("node-red");

app.whenReady().then(() => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    });

    setTimeout(() => {
        window.loadURL("http://localhost:1880/dashboard")
    }, 4000)
})