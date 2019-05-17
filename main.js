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
            show: false,
            frame: false,
            //hace que en la barra de tareas no salga el icono de la aplicacion.
            skipTaskbar: true,
        })
        win.once('ready-to-show', () => {
            win.show()
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
        show: false,
        frame: false,
        skipTaskbar: true,
    })
    win.close()
    /*let parrafo = document.createElement('p')
    let text = document.createTextNode(document.getElementById("usuario"))
    parrafo.appendChild(text)
    document.body.appendChild(parrafo)*/
    newWin.once('ready-to-show', () => {
        newWin.show()
      })
    newWin.maximize()
    newWin.setMenu(null)
    newWin.loadURL(url.format({
        pathname: path.join(__dirname, 'enupal.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow)