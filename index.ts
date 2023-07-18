const number1 = document.getElementById("num1") as HTMLInputElement
const number2 = document.getElementById("num2") as HTMLInputElement

const addBtn = document.getElementById("Add") as HTMLButtonElement
const subBtn = document.getElementById("Sub") as HTMLButtonElement
const multBtn = document.getElementById("Mult") as HTMLButtonElement
const divBtn = document.getElementById("Divide") as HTMLButtonElement

const printResult = document.getElementById("result") as HTMLOutputElement

function AddNumbers(){
let a = parseFloat(number1.value);
let b = parseFloat(number2.value);
let result = a+b;
printResult.textContent = result.toString();
}
addBtn.addEventListener("click",AddNumbers)

function SubtractNumber(){
let a = parseFloat(number1.value);
let b = parseFloat(number2.value);
let result = a-b;
printResult.textContent = result.toString();
}
subBtn.addEventListener("click",SubtractNumber)

function MultiplyNumber(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a*b;
    printResult.textContent = result.toString();
}
multBtn.addEventListener("click",MultiplyNumber)

function DivideNumber(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a/b;
    printResult.textContent = result.toString();
}
divBtn.addEventListener("click",DivideNumber)
