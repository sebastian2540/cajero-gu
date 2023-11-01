import { UserModel } from '../model/ModelLogin.js';
console.table(UserModel.users)

document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const btnIniciar = document.getElementById('login-button');
    const message = document.getElementById('message');

    btnIniciar.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        const usernameRegex = usernameInput.value;
        const passwordRegex = passwordInput.value;

        const userRegex = UserModel.authenticateRegex(usernameRegex, passwordRegex);

        if (userRegex) {
            message.textContent = 'Usuario o contraseña no cumplen con los requisitos';
        } else {
            message.textContent = 'Usuario o contraseña no cumplen con los requisitos';
        }

        // if (!UserModel.usernameRegex.test(username) || !UserModel.passwordRegex.test(password)) {
        //     message.textContent = 'Usuario o contraseña no cumplen con los requisitos';
        //     return;
        // }

        const user = UserModel.authenticate(username, password);

        if (user) {
            message.textContent = 'Inicio de sesión exitoso';
        } else {
            message.textContent = 'Usuario o contraseña invalido';
        }
    });
});