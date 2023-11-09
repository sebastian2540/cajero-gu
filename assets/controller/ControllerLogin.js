import { usuarios } from "../model/ModelLogin.js";
console.log(usuarios);

let inputs = document.querySelectorAll('.controls')
inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario)
})

// Validaciones de Expresiciones Regulares
let username = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
let password = /.*?.(?=[1-9])/

function validarFormulario(e) {
    console.log(e)
    switch (e.target.name) {
        case 'username':
            if (username.test(e.target.value)) {
                document.getElementById('username').style.backgroundColor = 'rgb(176, 204, 176)'
            }
            break;

        case 'password':
            if (password.test(e.target.value)) {
                document.getElementById('password').style.backgroundColor = 'rgb(176, 204, 176)'
            } else {
                document.getElementById('password').style.backgroundColor = 'rgb(204, 176, 176)'
            }
            break;

        default:
            break;
    }
}

// Control del Inicio de Sesión
let loginButton = document.getElementById('loginButton')
loginButton.addEventListener('click', function () {

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    // const message = document.getElementById('message');
    let intentos = 3

    while (intentos > 0) {
        //Validación del Usuario 1
        if (username == 'Administrador001') {
            if (password == '1526') {

                //Impresiones en consola
                console.log('Inicio de sesión exitoso. ' + username)

                //Configuración de alerta
                const AlertConfig = document.getElementById('liveToastCorrecto')
                const toastCorrecto = bootstrap.Toast.getOrCreateInstance(AlertConfig)
                toastCorrecto.show()

                //Control de ventanas
                document.getElementById('sound-wave').style.display = 'flex'
                setTimeout(() => {
                    document.getElementById('sound-wave').style.display = 'none'
                    document.getElementById('login').style.display = 'none'
                    document.getElementById('panel').style.display = 'block'
                }, 5000);
                break;

            } else {
                intentos--
                if (intentos > 0) {

                    //Impresiones en consola
                    console.log('Datos incorrectos. Te quedan ' + intentos)
                    console.log('Acceso denegado')

                    //Configuración de alerta
                    const AlertConfig = document.getElementById('liveToastIncorrecto')
                    const toastIncorrecto = bootstrap.Toast.getOrCreateInstance(AlertConfig)
                    toastIncorrecto.show()

                }else {

                    //Impresiones en consola
                    console.log('Has excedido el número máximo de intentos. Cuenta bloqueda.')
                    console.log('Acceso denegado')

                    //Configuración de alerta
                    const AlertConfig = document.getElementById('liveToastBloqueda')
                    const toastBloqueda = bootstrap.Toast.getOrCreateInstance(AlertConfig)
                    toastBloqueda.show()

                }
            }
        } 
    }
})