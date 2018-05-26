const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')
const preferences = require('./preferences.js'); 

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 800, 
        height: 600,
        minWidth: 450,
        minHeight: 550,

        frame: false,
        backgroundColor: '#303030',
        show: false,

    })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'static/index.html'),
        protocol: 'file',
        slashes: true
    }))

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    mainWindow.once('ready-to-show', () => {
        try {
            let pathName = path.join(__dirname, 'saveData/save.txt')
            let AppData = JSON.parse(fs.readFileSync(pathName, { encoding: "utf8" }))
            mainWindow.webContents.send('AppData', AppData)
        } catch(error) {
            console.log(error)
        }


        mainWindow.show()
    })
}



ipcMain.on('layout:openTools', () => {
    let contents = mainWindow.webContents

    if (contents.isDevToolsOpened()) {
        contents.closeDevTools()
    } else {
        contents.openDevTools({mode: 'detach'})
    }
})

ipcMain.on('layout:closeApp', (event, arg) => {
    try {
        let pathName = path.join(__dirname, 'saveData/save.txt')
        fs.writeFileSync(pathName, JSON.stringify(arg))
    } catch (error) {
        console.log(error)
    }

    app.quit()
})

ipcMain.on('layout:minimizeApp', () => {
    BrowserWindow.getFocusedWindow().minimize()
})

ipcMain.on('layout:maximizeApp', () => {
    if (BrowserWindow.getFocusedWindow().isMaximized()) {
        BrowserWindow.getFocusedWindow().unmaximize()
    } else {
        BrowserWindow.getFocusedWindow().maximize()
    }
})


app.on('ready', () => {
    createWindow()
    BrowserWindow.addDevToolsExtension(preferences.extensionPath)
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
        BrowserWindow.addDevToolsExtension(preferences.extensionPath)
    }
})