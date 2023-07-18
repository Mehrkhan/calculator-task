var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var addBtn = document.getElementById("Add");
var subBtn = document.getElementById("Sub");
var multBtn = document.getElementById("Mult");
var divBtn = document.getElementById("Divide");
var printResult = document.getElementById("result");
function AddNumbers() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printResult.textContent = result.toString();
}
addBtn.addEventListener("click", AddNumbers);
function SubtractNumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printResult.textContent = result.toString();
}
subBtn.addEventListener("click", SubtractNumber);
function MultiplyNumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printResult.textContent = result.toString();
}
multBtn.addEventListener("click", MultiplyNumber);
function DivideNumber() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printResult.textContent = result.toString();
}
divBtn.addEventListener("click", DivideNumber);
