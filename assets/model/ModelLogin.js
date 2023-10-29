let inputs = document.querySelectorAll(".controls")
inputs.forEach(function (inputs) {
    inputs.addEventListener("keyup", validarFormulario)
})

let usuario = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
let contrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm