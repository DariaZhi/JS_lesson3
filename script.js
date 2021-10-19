// // Область видимости переменных
// // Глобальная область ----------------------------
// var a = 'var' // объявление через var имеет глобальную область видимости и область видимости, ограниченную только телом функции.
// let b = 'let' // а  объявления через let и const имеют глобальную обл видимости и обл видимости, ограниченную телом блока
// const c = 'const'

// console.log(a, b, c)

// // -----------------------------------------------
// // Блочная область -------------------------------
// if (true) {
//   var a1 = 'var'
//   let b1 = 'let'
//   const c1 = 'const'
// }

// // console.log(a1, b1, c1) // error b1, c1

// // -----------------------------------------------
// // Область функции -------------------------------
// function test() {
//   var a2 = 'var'
//   let b2 = 'let'
//   const c2 = 'const'
// }

// // console.log(a2, b2, c2) // error

// // -----------------------------------------------
// // Хойстинг (всплытие) переменных
// console.log(userName) // всплытие

// var userName = 'Alex'

// // Function Declaration (Объявление Функции)
// // seyHello()
// // seyHello()
// // seyHello()

// function sayHello () { // Функции тоже имеют свойство хойстинг, поэтому вызов функции можно разместить перед объявлением функции
//     alert('Hello')
//   }
  
//   // console.log(sayHello())
//   // sayHello()
  
  
//   // Function Expression (Функциональное Выражение)
//   const sayHelloExpression = function () { // Придаём переменной значение — анонимную функцию
//     alert('Hello')
//   }
  
//   // console.log(sayHelloExpression)
//   // sayHelloExpression()
  


// // let num = 0;

// // while (num <= 9) {
// //    console.log(num);
// //    num = num + 1; 
// // }

// // Посчитать сумму чисел от 0 до 10 и вывести эту сумму в консоль

// function calculateSum(number) {
//     let sum = 0;
//     for (let i = 0; i < number; i++) {
//         sum += i; //  то же самое что sum = sum + i  
//     }
//     return sum;
// }

// function showMessage() {
//     alert('Идет второй подсчет суммы от 0 до 20'); 
// }

// console.log(calculateSum(10)); // совместили 2 строчки в одну, код читается с права налево 
// showMessage();
// let sum2 = calculateSum(20);
// console.log(sum2);

// Возврат значения ---------------------------------------------------------
  
// function sum(a, b) {
//     return a + b;
// }
//  console.log(sum(2, 5));

//  let number = sum(3, 8);
//  console.log(number);

// ----------------------------------------------------------------
// 1. Создать функцию calcSum(arr), принимает массив, как параметр
// 2. Считает сумму всех чисел в массиве
// 3. Возвращает результат

const numbers =[8, 123, 3, 5, 245, 346, 345, 7, 23, 76];
function calcSum (arr) {
  let sum = 0;
  for (let number of arr) {
    sum = sum + number;
  }
  if (sum == 0) {
    return 'Сумма не рассчиталась' // если задаем внутри функции дополнительную инструкцию (что угодно с {}), то там тоже може быть return. Он таким образом может повторяться 
  }
  return sum;
} 
  
const resultSum = calcSum (numbers);
console.log(resultSum);

// -----------------------------
function isEven (number) {
    if (number % 2 == 0) {
      return true
    }
    // else {         // блок else можно убрать, сократить код.
    return false
    // }
}

const resultSum = calcSum(numbers) 
alert(isEven(resultSum))
console.warn(resultSum)

function sayHello (userName = 'Anonym', userPatronymic = ' ') {
    console.log('Привет, ' + userName + ' ' + userPatronymic);
}
sayHello ('Лилия', 'Георгиевна');
sayHello ('Мартышка');
sayHello ();

