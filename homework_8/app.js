'use strict'

const button = document.querySelector('[data-js-button]');
const calcResult = document.querySelector('[data-js-result]');


button.addEventListener ('click', (event) => {
  let num1 = document.querySelector('[data-js-number1-input]').value;
  let num2 = document.querySelector('[data-js-number2-input]').value;
  let operator = document.querySelector('[data-js-operator-input]').value;
  let result;

  event.preventDefault();

  
  if (isNaN(num1) === true || isNaN(num2) === true || (num1.trim() === '' && num2.trim() === '')) {
    console.log('Некорректный ввод чисел');
    return calcResult.innerText = 'Некорректный ввод чисел';
  } else if (num1.trim() === '') {
    console.log('Певрое число не указано');
    return calcResult.innerText = 'Первое число не указано';
  } else if (num2.trim() === '') {
    console.log('Второе число не указано');
    return calcResult.innerText = 'Второе число не указано';
   } else if (operator.trim() === '') {
    console.log('Не введён знак');
    return calcResult.innerText = 'Не введён знак'; 
  }; 

  switch (operator.trim()) {
    case '+':
    result = Number(num1) + Number(num2);
    break;
    case '-':
    result = Number(num1) - Number(num2);
    break;
    case '*':
    result = Number(num1) * Number(num2);
    break;
    case '/':
    result = Number(num1) / Number(num2);
    break;
    default:
    console.log('Программа не поддерживает такую операцию'); 
    return calcResult.innerText = 'Программа не поддерживает такую операцию';
  }

  if (result == Infinity  || result == -Infinity) {
    console.log('Операция некорректна');
    return calcResult.innerText = 'Операция некорректна';
  };
  
  console.log(result);
  return calcResult.innerText = `Результат: ${result}`;
})

