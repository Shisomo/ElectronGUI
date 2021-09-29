var electron = require('electron')

var app = electron.app

var BrowserWindow = electron.BrowserWindow 

var mainWindow = null

app.on('ready',()=>{
    const mainWindow = new BrowserWindow({
//     webPreferences: {
//         preload: path.join(__dirname, 'vue.js')
//     }
})
    mainWindow.loadFile('index.html')
    mainWindow.on('closed', ()=>{
        mainWindow = null
    })
})