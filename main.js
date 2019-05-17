const electron = require('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url = require('url')

let win

function createWindow(){
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
            frame: false,
            //hace que en la barra de tareas no salga el icono de la aplicacion.
            skipTaskbar: true,
        })
        win.maximize()
        win.setMenu(null)
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        }))
}

exports.openWindow = () => {
    let newWin = new BrowserWindow({
        webPreferences: {
            //frame: false,
            //skipTaskbar: true hace que en la barra de tareas no salga el icono de la aplicacion.
            //skipTaskbar: true,
            nodeIntegration: true,
            alwaysOnTop: true,
        },
        frame: false,
        skipTaskbar: true,
    })
    win.close()
    newWin.maximize()
    newWin.setMenu(null)
    newWin.loadURL(url.format({
        pathname: path.join(__dirname, 'enupal.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow)