//Задание 4
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

//Задание 5
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add':
            return addition(arg1, arg2);
        case 'sub':
            return subtraction(arg1, arg2);
        case 'mul':
            return multiplication(arg1, arg2);
        case 'div':
            return division(arg1, arg2);
    }
}

let num1 = Number(prompt('Введите первое число'))
let num2 = Number(prompt('Введите второе число'))
let oper = prompt('Укажите название операции:\nadd = сложение\nsub = вычитание\nmul = умножение\ndiv = деление')

switch (oper) {
    case 'add':
        alert(`Результат сложения равен ${mathOperation(num1, num2, oper)}`); break;
    case 'sub':
        alert(`Результат вычитания равен ${mathOperation(num1, num2, oper)}`); break;
    case 'mul':
        alert(`Результат умножения равен ${mathOperation(num1, num2, oper)}`); break;
    case 'div':
        alert(`Результат деления равен ${mathOperation(num1, num2, oper)}`); break;
}