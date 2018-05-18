const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({ width: 800, height: 600, frame: false })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    mainWindow.on('closed', () => {
        mainWindow = null
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

ipcMain.on('layout:closeApp', () => {
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
    BrowserWindow.addDevToolsExtension('C:/Users/Winterfresh/AppData/Local/Google/Chrome/User Data/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/4.1.4_0')
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
        BrowserWindow.addDevToolsExtension('C:/Users/Winterfresh/AppData/Local/Google/Chrome/User Data/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/4.1.4_0')
    }
})