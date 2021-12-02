'use strict';
//Задание 3
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?',
  'Простые, Сложные, Интерактивные');
let screensPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm("Нужен ли адаптив на сайте?");
let answer1 = prompt(
  'Какой дополнительный тип услуги нужен?',
 "Макет", "Верстка");
let answer2 = +prompt('Сколько это будет стоить?', 100);
let answer3 = prompt(
  'Какой дополнительный тип услуги нужен?', 'Макет', 'Верстка');
let answer4 = +prompt('Сколько это будет стоить?',120);
let fullPrice = screensPrice + answer2 + answer4;
//let servicePercentPrice = fullPrice - Math.ceil(fullPrice * 0.05);

/////////

let allServicePrices = function (a, b) {
  return a + b;
};
console.log(allServicePrices(answer2, answer4));


function getfullPrice(a, b) {
  return a + b;
}
getfullPrice(screensPrice,allServicePrices);


function getTitle() {
  console.log(title[0].toUpperCase() + title.substring(1));
} 
getTitle();

let servicePercentPrice = function (a, b) {
  return a - (b * 0.05);
};
console.log(servicePercentPrice(fullPrice, fullPrice * 0.05));



if (fullPrice >= 30000){
  alert('Даем скидку в 10%'); 
} else if (fullPrice >= 15000 && fullPrice < 30000){
  alert('Даем скидку в 5%');
} 
  else if (fullPrice < 15000 && fullPrice >= 0) {
    alert('Скидка не предусмотрена');
} else {
    alert('Что то пошло не так');
} 

console.log(title);
console.log(screens[0]);
console.log(screensPrice);
console.log(adaptive);
console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
console.log(fullPrice);
//console.log(servicePercentPrice);


//Переменные 

//let title = 'Lesson02';
//let screens = 'Простые, Сложные, Интерактивные';
//let screenPrice = 1;
//let rollback = 50;
//let fullPrice = 10000000;
//let adaptive = 'false';

//Определение типа данных

//console.log(typeof title);
//console.log(typeof fullPrice);
//console.log(typeof adaptive);

//Длина строки
//console.log(screens.length);

//Вывод стоимости
//console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
//console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

//Приведение строки к нижнему регистру и вывод массива в консоль
//console.log(screens.toLocaleLowerCase().split(", "));

//Процент отката 
//console.log(fullPrice * (rollback / 100));










