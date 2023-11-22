import { checkBalance } from "../model/ModelOperationsApp.js";
console.log(checkBalance);

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
