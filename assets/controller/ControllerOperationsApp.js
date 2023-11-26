import { checkBalance } from "../model/ModelOperationsApp.js";

import { depositModel } from "../model/ModelOperationsApp.js";

/*Control del logo*/
const logo = document.getElementById('logo')
logo.addEventListener('click', function () {
    document.getElementById('sound-wave').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('sound-wave').style.display = 'none'
        document.getElementById('login').style.display = 'none'
        document.getElementById('carouselExampleDark').style.display = 'block'
        document.getElementById('sectionCheckBalance').style.display = 'none'
        document.getElementById('sectionTransfer').style.display = 'none'
        document.getElementById('sectionRecord').style.display = 'none'
        document.getElementById('sectionWithdraw').style.display = 'none'
        document.getElementById('sectionMovements').style.display = 'none'
    }, 500);
})

/*Control BcheckBalance*/
const BcheckBalance = document.getElementById('BcheckBalance')
BcheckBalance.addEventListener('click', function () {
    document.getElementById('sectionCheckBalance').innerHTML += ''
    checkBalance.some(function (item) {
        // let balance = document.getElementById('balance')
        // let number = document.getElementById('number')
        // let account = document.getElementById('account')
        // let account = document.createElement('p')
        // let number = document.createElement('p')        
        // let balance = document.createElement('p')
        // let card = document.createElement('article')

        // balance.textContent = item.balance
        // number.textContent = item.number
        // account.textContent = item.account

        // account.textContent = item.account
        // number.textContent = item.number
        // balance.textContent = item.balance

        // card.classList.add('card')
        // card.append(account,number,balance)
        // document.getElementById('sectionCheckBalance').append(card)

    })


    document.getElementById('sound-wave').style.display = 'flex'
    setTimeout(() => {

        document.getElementById('sound-wave').style.display = 'none'
        document.getElementById('login').style.display = 'none'
        document.getElementById('sectionCheckBalance').style.display = 'block'
        document.getElementById('carouselExampleDark').style.display = 'none'
        document.getElementById('sectionTransfer').style.display = 'none'
        document.getElementById('sectionRecord').style.display = 'none'
        document.getElementById('sectionWithdraw').style.display = 'none'
        document.getElementById('sectionMovements').style.display = 'none'
    }, 500);
})

/*Control Transfer*/
const transfer = document.getElementById('transfer')
transfer.addEventListener('click', function () {

    checkBalance.some(function (items) {

        let accountBalance = document.getElementById('accountBalance')
        accountBalance.textContent = items.balance
    })

    document.getElementById('sound-wave').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('sound-wave').style.display = 'none'
        document.getElementById('login').style.display = 'none'
        document.getElementById('sectionTransfer').style.display = 'block'
        document.getElementById('carouselExampleDark').style.display = 'none'
        document.getElementById('sectionCheckBalance').style.display = 'none'
        document.getElementById('sectionRecord').style.display = 'none'
        document.getElementById('sectionWithdraw').style.display = 'none'
        document.getElementById('sectionMovements').style.display = 'none'
    }, 500);
})

/*Control Record*/
const record = document.getElementById('record')
record.addEventListener('click', function () {
    document.getElementById('sectionRecord').innerHTML += ''
    checkBalance.some(function (item) {

        let accountBalance = document.getElementById('accountBalances')
        accountBalance.textContent = item.balance
    })

    document.getElementById('depositForm').addEventListener('submit', function (event) {
        event.preventDefault();
        depositModel.accounts = event.target.elements.accounts.value;
        depositModel.amount = event.target.elements.amount.value;
        depositModel.date = new Date(event.target.elements.date.value);
        depositModel.bank = event.target.elements.bank.value;

        console.log("Cuenta Bancaria: " + depositModel.accounts);
        console.log("Valor: " + depositModel.amount);
        console.log("Fecha: " + depositModel.date);
        console.log("Banco: " + depositModel.bank);

        if (depositModel.amount < 10000) {
            alert('El valor a consignar debe der mayor a $10.0000')
        } else {
            let cuentaConsignacion = document.getElementById('cuentaConsignacion')
            cuentaConsignacion.textContent = depositModel.accounts

            let valorConsigacion = document.getElementById('valorConsigacion')
            valorConsigacion.textContent = depositModel.amount

            let fechaConsignacion = document.getElementById('fechaConsignacion')
            fechaConsignacion.textContent = depositModel.date

            let bancoConsignacion = document.getElementById('bancoConsignacion')
            bancoConsignacion.textContent = depositModel.bank

            //Configuración de alerta
            const AlertConfig = document.getElementById('liveToastConsignacionEnviada')
            const toastConsignacionEnviada = bootstrap.Toast.getOrCreateInstance(AlertConfig)
            toastConsignacionEnviada.show()
            document.getElementById('depositForm').reset();
        }

        // if (depositModel.amount >= depositModel.amount) {
        //     alert('No tienes suficiente dinero para transferir')
        // } else {
        //     let cuentaConsignacion = document.getElementById('cuentaConsignacion')
        //     cuentaConsignacion.textContent = depositModel.accounts

        //     let valorConsigacion = document.getElementById('valorConsigacion')
        //     valorConsigacion.textContent = depositModel.amount

        //     let fechaConsignacion = document.getElementById('fechaConsignacion')
        //     fechaConsignacion.textContent = depositModel.date

        //     let bancoConsignacion = document.getElementById('bancoConsignacion')
        //     bancoConsignacion.textContent = depositModel.bank

        //     //Configuración de alerta
        //     const AlertConfig = document.getElementById('liveToastConsignacionEnviada')
        //     const toastConsignacionEnviada = bootstrap.Toast.getOrCreateInstance(AlertConfig)
        //     toastConsignacionEnviada.show()
        //     document.getElementById('depositForm').reset();
        // }


    });

    document.getElementById('sound-wave').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('sound-wave').style.display = 'none'
        document.getElementById('login').style.display = 'none'
        document.getElementById('sectionRecord').style.display = 'block'
        document.getElementById('carouselExampleDark').style.display = 'none'
        document.getElementById('sectionCheckBalance').style.display = 'none'
        document.getElementById('sectionTransfer').style.display = 'none'
        document.getElementById('sectionWithdraw').style.display = 'none'
        document.getElementById('sectionMovements').style.display = 'none'
    }, 500);
})

/*Control Withdraw*/
const withdraw = document.getElementById('withdraw')
withdraw.addEventListener('click', function () {

    var miCajero = miCajero || {};

    (function (namespace) {

        namespace.info = {
            bank: "GrahoBank",
            saldo: 1000000, //--> Deposito inicial 
            user: "Admin",
            moneda: "$",
            numOp: 0
        }

    })(miCajero);
    miCajero.Operaciones = (function () {

        var total;
        total = miCajero.info.saldo;
        return {
            restar: function (cantidad) {
                total -= cantidad;
                return total;
            },
            total: function () {
                return total;
            }
        }

    })();

    miCajero.updateSaldo = function (newValue) {

        miCajero.info.saldo = newValue;
        miCajero.Print("ON", miCajero.info.user, newValue, "exito");
        miCajero.cleanInput();

    };

    //Input
    miCajero.Input = function (operation) {

        var inputValue = document.getElementById("moneyInput").value;

        if (inputValue !== null && inputValue !== undefined && inputValue !== "") {

            var opResult;
            inputValue = parseInt(inputValue);

            if (operation === "get") {

                opResult = miCajero.Operaciones.restar(inputValue);
                if (opResult < 0) {
                    miCajero.Error(501);
                    miCajero.Operaciones.sumar(inputValue);
                } else {
                    miCajero.updateSaldo(opResult);
                }
            }
        } else {
            miCajero.Error(401);
        }

    };
    miCajero.cleanInput = function () {

        document.getElementById("moneyInput").value = "";
        document.getElementById("moneyInput").placeholder = "Cantidad Retirar $";

    };

    //Botones
    miCajero.Botones = (function () {
        var getBtn = document.querySelector(".getMoney");
        getBtn.addEventListener("click", function () {
            miCajero.Input("get")

            //Configuración de alerta
            const AlertConfig = document.getElementById('liveToastRetiro')
            const toastRetiro = bootstrap.Toast.getOrCreateInstance(AlertConfig)
            toastRetiro.show()
        });

    })();

    //Errores
    miCajero.Error = function (error) {
        var errorMsg;
        if (error === 401) {
            errorMsg = "Por favor introduzca una cantidad correcta.";
        }
        else if (error === 501) {
            errorMsg = "Saldo en Cajero insuficiente.";
        } else if (error === 502) {
            errorMsg = "Cliente no dispone de saldo suficiente en su cuenta.";
        }
        document.querySelector(".result").innerHTML += "<br><span class='msg error'>*** ERROR *** " + errorMsg + "<br></span>";
        miCajero.cleanInput();
    }

    miCajero.Print = function (status, user, saldo, msgType) {

        var _currency = miCajero.info.moneda;
        miCajero.info.numOp += 1;
        var _operationID = miCajero.info.numOp;
        var msgType;
        var info2print = "<br>" + _operationID + " - Movimientos:<br> Cajero: " + status + " · " + user + " · Saldo: " + _currency + saldo + "<br></span>";
        document.querySelector(".result").innerHTML += "<span class='msg " + msgType + "'>" + info2print;
    };

    miCajero.Print("ON", miCajero.info.user, miCajero.info.saldo, "load");

    document.getElementById('sound-wave').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('sound-wave').style.display = 'none'
        document.getElementById('login').style.display = 'none'
        document.getElementById('sectionWithdraw').style.display = 'block'
        document.getElementById('carouselExampleDark').style.display = 'none'
        document.getElementById('sectionCheckBalance').style.display = 'none'
        document.getElementById('sectionTransfer').style.display = 'none'
        document.getElementById('sectionRecord').style.display = 'none'
        document.getElementById('sectionMovements').style.display = 'none'
    }, 500);
})


/*Control Movements*/
const movements = document.getElementById('movements')
movements.addEventListener('click', function () {

    
    
    document.getElementById('sound-wave').style.display = 'flex'
    setTimeout(() => {
        document.getElementById('sound-wave').style.display = 'none'
        document.getElementById('login').style.display = 'none'
        document.getElementById('sectionMovements').style.display = 'block'
        document.getElementById('carouselExampleDark').style.display = 'none'
        document.getElementById('sectionCheckBalance').style.display = 'none'
        document.getElementById('sectionTransfer').style.display = 'none'
        document.getElementById('sectionRecord').style.display = 'none'
        document.getElementById('sectionWithdraw').style.display = 'none'
    }, 500);
})




