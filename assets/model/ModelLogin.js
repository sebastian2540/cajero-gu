export let usuarios = [
    {
        usuario: 'Administrador001',
        contrasena: 'Administrador.001',
        id: 1
    },

    {
        usuario: 'Administrador002',
        contrasena: 'Administrador.002',
        id: 2
    },

    {
        usuario: 'Cajero001',
        contrasena: 'Cajero.001',
        id: 3
    },

    {
        usuario: 'Cajero002',
        contrasena: 'Cajero.002',
        id: 4
    },
]

// export const UserModel = {
//     users: [
//         { username: "Administrador4585", password: "Admon123*" },
//         { username: "Cajero6933", password: "Cajero123*" },
//     ],

//     usernameRegex: /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
//     passwordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,

//     authenticateRegex(usernameRegex, passwordRegex){
//         if (!this.usernameRegex.test(username) || !this.passwordRegex.test(password)) {
//             return null;
//         }
//         return this.usernameRegex.find((userRegex) => userRegex.usernameRegex === usernameRegex && userRegex.passwordRegex === passwordRegex);
//     },

//     authenticate(username, password) {
//         return this.users.find((user) => user.username === username && user.password === password);
//     },
// };