import { usuarios } from "../model/ModelLogin.js";
console.log(usuarios);

let inputs = document.querySelectorAll('.controls')
inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario)
})

// Validaciones de Expresiciones Regulares
let username = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

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

// Inicio de Sesión
let loginButton = document.getElementById('loginButton')
loginButton.addEventListener('click', function () {

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    const message = document.getElementById('message');
    let intentos = 5

    while (intentos > 0) {
        //Validación del Usuario 1
        if (username == 'Administrador001') {
            if (password == 'Administrador.001') {
                console.log('Inicio de sesión exitoso. ' + username)

                //Configuración de alerta
                const AlertConfig = document.getElementById('liveToastGuardar')
                const toastGuardar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
                toastGuardar.show()

                //Control de ventanas 
                setTimeout(() => {
                    document.getElementById('login').style.display = 'none'
                    document.getElementById('panel').style.display = 'block'
                }, 3000);
                break;
                
            } else {
                intentos--
                if (intentos > 0) {
                    console.log('Datos incorrectos. Te quedan ' + intentos)
                    console.log('Acceso denegado')

                    //Configuración de alerta
                    const AlertConfig = document.getElementById('liveToastCancelar')
                    const toastCancelar = bootstrap.Toast.getOrCreateInstance(AlertConfig)
                    toastCancelar.show()
                } else {
                    console.log('Has excedido el número máximo de intentos. Cuenta bloqueda.')
                    console.log('Acceso denegado')
                    const AlertConfig = document.getElementById('liveToastCancelarBloqueda')
                    const toastCancelarBloqueda = bootstrap.Toast.getOrCreateInstance(AlertConfig)
                    toastCancelarBloqueda.show()
                }

            }
        }
    }
})








































// import { UserModel } from '../model/ModelLogin.js';
// console.table(UserModel.users)

// document.addEventListener('DOMContentLoaded', () => {
//     const usernameInput = document.getElementById('username');
//     const passwordInput = document.getElementById('password');
//     const btnIniciar = document.getElementById('login-button');
//     const message = document.getElementById('message');

//     btnIniciar.addEventListener('click', () => {
//         const username = usernameInput.value;
//         const password = passwordInput.value;

//         const usernameRegex = usernameInput.value;
//         const passwordRegex = passwordInput.value;

//         const userRegex = UserModel.authenticateRegex(usernameRegex, passwordRegex);

//         if (userRegex) {
//             message.textContent = 'Usuario o contraseña no cumplen con los requisitos';
//         } else {
//             message.textContent = 'Usuario o contraseña no cumplen con los requisitos';
//         }

//         // if (!UserModel.usernameRegex.test(username) || !UserModel.passwordRegex.test(password)) {
//         //     message.textContent = 'Usuario o contraseña no cumplen con los requisitos';
//         //     return;
//         // }

//         const user = UserModel.authenticate(username, password);

//         if (user) {
//             message.textContent = 'Inicio de sesión exitoso';
//         } else {
//             message.textContent = 'Usuario o contraseña invalido';
//         }
//     });
// });