import { usuarios } from "../model/ModelLogin.js";
// console.log(usuarios);

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
    let userAttempt = 0


    // while (userAttempt > 0) {
    //Validación del Usuario 1
    /* find o filter */
    usuarios.some(function (user) {

        if (user.usuario === username && user.contrasena === password) {
            console.table(user);
            console.log('Inicio de sesión exitoso. ' + username)

            let userName = document.getElementById('userName')
            userName.textContent = user.usuario

            let emailUSer = document.getElementById('emailUSer')
            emailUSer.textContent = user.correo

            let account = document.getElementById('account')
            account.textContent = user.account

            let number = document.getElementById('number')
            number.textContent = user.number

            let balance = document.getElementById('balance')
            balance.textContent = user.balance

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
            }, 1000);

            return true;
        } else {
            userAttempt++
            // console.log('Prueba ' + userAttempt);
            if (userAttempt >= 0) {
                //Impresiones en consola
                console.log('Datos incorrectos. Te quedan ' + userAttempt)
                console.log('Acceso denegado')

                //Configuración de alerta
                const AlertConfig = document.getElementById('liveToastIncorrecto')
                const toastIncorrecto = bootstrap.Toast.getOrCreateInstance(AlertConfig)
                toastIncorrecto.show()
            } else {
                //Impresiones en consola
                console.log('Has excedido el número máximo de intentos. Cuenta bloqueda.❌')

                //Configuración de alerta
                const AlertConfig = document.getElementById('liveToastBloqueda')
                const toastBloqueda = bootstrap.Toast.getOrCreateInstance(AlertConfig)
                toastBloqueda.show()
            }
        }
    })
})

//Control del profile
const profile = document.querySelector('.profile')
const dropdown = document.querySelector('.dropdown__wrapper')
profile.addEventListener('click', () => {
    dropdown.classList.remove('none')
    dropdown.classList.toggle('hide')
})

document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target)
    const isProfileClicked = profile.contains(event.target)

    if (!isClickInsideDropdown && !isProfileClicked) {
        dropdown.classList.add('hide')
        dropdown.classList.add('dropdown__wrapper--fade-in')
    }
})

//Control de cerrar sesión
const cerrarSesion = document.getElementById('cerrarSesion')
cerrarSesion.addEventListener('click', function () {
    document.getElementById('sound-wave').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('sound-wave').style.display = 'none'
        document.getElementById('login').style.display = 'block'
        document.getElementById('panel').style.display = 'none'
        document.getElementById('sectionCheckBalance').style.display = 'none'
        document.getElementById('sectionTransfer').style.display = 'none'
        document.getElementById('sectionRecord').style.display = 'none'
        document.getElementById('sectionWithdraw').style.display = 'none'
        document.getElementById('sectionMovements').style.display = 'none'
    }, 1000);
})

// Control de registerGoogle
const registerGoogle = document.getElementById("registerGoogle");
registerGoogle.addEventListener("click", function () {
    document.getElementById("sound-wave").style.display = "flex";
    setTimeout(() => {
        document.getElementById("sound-wave").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("sectionRegisterGoogle").style.display = "block";
    }, 1000);
});

//Botón del cerrar el registro de google
const botoncerrar = document.getElementById("botoncerrar");
botoncerrar.addEventListener("click", function () {
    document.getElementById("sound-wave").style.display = "flex";
    setTimeout(() => {
        document.getElementById("sound-wave").style.display = "none";
        document.getElementById("sectionRegisterGoogle").style.display = "none";
        document.getElementById("login").style.display = "block";
    }, 1000);
});

let ingresarGoogle = document.getElementById("botonGoogle");

ingresarGoogle.addEventListener("click", () => {
    var user = document.getElementById("user");
    var documento = document.getElementById("documento");
    var email = document.getElementById("email");
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var valor = document.getElementById("valor");
    var elementoCHECK = document.getElementById("terminos");

    if (user.value.length == 0) {
        // console.log(user.value.length)
        // console.log("Debe ingresar el Usuario");

    } else if (documento.value.length === 11) {
        // console.log(documento.value.length)
        // console.log("Debe ingresar el Documento");

    } else if (email.value.length == 0) {
        // console.log(email.value.length)
        // console.log("Por favor, ingrese su Email");

    } else if (pass1.value.length === 4) {
        // console.log(pass1.value.length)
        // console.log("Debe ingresar una contraseña de 4 números");

    } else if (pass1.value === pass2.value) {
        // console.log(pass2.value.length)
        // console.log("Las contraseñas no coinciden");

    } else if (valor.value.length >= 100000) {
        // console.log(valor.value.length)
        // console.log("Ingrese un valor IGUAL o SUPERIOR a 100.000$");

    } else if (!elementoCHECK.checked) {
        // console.log("Debe aceptar los términos y condiciones");        
    } else {
        // console.log("Datos de formulario enviados exitosamente.");
        document.getElementById("myForm").reset();
    }

    //Botón del registro de google
    const botonGoogle = document.getElementById("botonGoogle");
    botonGoogle.addEventListener("click", function () {

        //Configuración de alerta
        const AlertConfig = document.getElementById('liveToastRegistroCorrecto')
        const toastRegistroCorrecto = bootstrap.Toast.getOrCreateInstance(AlertConfig)
        toastRegistroCorrecto.show()

        document.getElementById("sound-wave").style.display = "flex";
        setTimeout(() => {
            document.getElementById("sound-wave").style.display = "none";
            document.getElementById("sectionRegisterGoogle").style.display = "none";
            document.getElementById("login").style.display = "block";
        }, 2000);
    });

});

// Control de registerApple
const registerApple = document.getElementById('registerApple')
registerApple.addEventListener('click', function () {
    document.getElementById('sound-wave').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('sound-wave').style.display = 'none'
        document.getElementById('login').style.display = 'none'
        document.getElementById('sectionRegisterApple').style.display = 'block'
    }, 1000);
})

//Botón del cerrar el registro de Apple
const botoncerrarapple = document.getElementById("botoncerrarapple");
botoncerrarapple.addEventListener("click", function () {
    document.getElementById("sound-wave").style.display = "flex";
    setTimeout(() => {
        document.getElementById("sound-wave").style.display = "none";
        document.getElementById("sectionRegisterApple").style.display = "none";
        document.getElementById("login").style.display = "block";
    }, 1000);
});

let ingresarApple = document.getElementById("botonapple");

ingresarApple.addEventListener("click", () => {
    var user = document.getElementById("user");
    var documento = document.getElementById("documento");
    var email = document.getElementById("email");
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var valor = document.getElementById("valor");
    var elementoCHECK = document.getElementById("terminos");

    if (user.value.length == 0) {
        // console.log(user.value.length)
        // console.log("Debe ingresar el Usuario");

    } else if (documento.value.length === 11) {
        // console.log(documento.value.length)
        // console.log("Debe ingresar el Documento");

    } else if (email.value.length == 0) {
        // console.log(email.value.length)
        // console.log("Por favor, ingrese su Email");

    } else if (pass1.value.length === 4) {
        // console.log(pass1.value.length)
        // console.log("Debe ingresar una contraseña de 4 números");

    } else if (pass1.value === pass2.value) {
        // console.log(pass2.value.length)
        // console.log("Las contraseñas no coinciden");

    } else if (valor.value.length >= 100000) {
        // console.log(valor.value.length)
        // console.log("Ingrese un valor IGUAL o SUPERIOR a 100.000$");

    } else if (!elementoCHECK.checked) {
        // console.log("Debe aceptar los términos y condiciones");        
    } else {
        // console.log("Datos de formulario enviados exitosamente.");
        document.getElementById("myForm").reset();
    }

    //Botón del registro de google
    const ingresarApple = document.getElementById("botonapple");
    ingresarApple.addEventListener("click", function () {

        //Configuración de alerta
        const AlertConfig = document.getElementById('liveToastRegistroCorrecto')
        const toastRegistroCorrecto = bootstrap.Toast.getOrCreateInstance(AlertConfig)
        toastRegistroCorrecto.show()

        document.getElementById("sound-wave").style.display = "flex";
        setTimeout(() => {
            document.getElementById("sound-wave").style.display = "none";
            document.getElementById("sectionRegisterApple").style.display = "none";
            document.getElementById("login").style.display = "block";
        }, 2000);
    });

});