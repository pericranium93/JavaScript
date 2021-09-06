//На реализацию проверки вводимого пользователем значения не хватило времени 
let amount = prompt('Введите сумму для зачисления');
let last1 = amount.substring(amount.length - 1);
let last2 = amount.substring(amount.length - 2);
let lastNums = ['2', '3', '4'];
let wrongLastNums = ['12', '13', '14']

if (last1 === '1' && last2 !== '11') {
    alert(`Ваша сумма в ${amount} рубль успешно зачислена.`);
}
else if (lastNums.includes(last1) && !wrongLastNums.includes(last2)) {
    alert(`Ваша сумма в ${amount} рубля успешно зачислена.`);
}
else {
    alert(`Ваша сумма в ${amount} рублей успешно зачислена.`);
}