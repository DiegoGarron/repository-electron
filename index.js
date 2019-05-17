const remote = require('electron').remote

const main = remote.require('./main.js')

let button = document.createElement('button')
button.textContent = "Log In"
button.setAttribute('class', 'btn btn-block btn-login')
document.getElementById("formulario").appendChild(button)
button.addEventListener('click', () => {
    /*let parrafo = document.createElement('p')
    let text = document.createTextNode(document.getElementById("usuario"))
    parrafo.appendChild(text)
    document.body.appendChild(parrafo)*/
    main.openWindow()
})
