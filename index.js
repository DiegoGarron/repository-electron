const remote = require('electron').remote

const main = remote.require('./main.js')

let button = document.createElement('button')
button.textContent = "Log In"
button.setAttribute('class', 'btn btn-block btn-login')
document.getElementById("formulario").appendChild(button)
button.addEventListener('click', () => {
    main.openWindow()
})
