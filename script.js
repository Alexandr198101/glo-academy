'use strict';
 
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные');
let screensPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let answer1 = prompt('Какой дополнительный тип услуги нужен?','Макет','Верстка');
let answer2 = +prompt("Сколько это будет стоить?");
let answer3 = prompt('Какой дополнительный тип услуги нужен?','Макет','Верстка');
let answer4 = +prompt("Сколько это будет стоить?");

let fullPrice;
let servicePercentPrice;
let allServicePrices;
let commission = 5;

//showTypeOf
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

//getAllServicePrices
let getAllServicePrices = function () {
  return answer2 + answer4;
};

//getFullPrice
let getFullPrice = function() {
  return screensPrice + allServicePrices;
};

//getTitle
function getTitle() {
  console.log(title[0].toUpperCase() + title.substring(1));
}

//getServicePercentPrice
let getServicePercentPrice = function () {
  return fullPrice - (fullPrice * (commission / 100));
};

//getRollbackMessage;
const getRollbackMessage = function (price) {
if (price >= 30000) {
  return'Даем скидку в 10%';
} else if (price >= 15000 && price < 30000) {
  return 'Даем скидку в 5%';
} else if (price < 15000 && price >= 0) {
  return 'Скидка не предусмотрена';
} else {
  return 'Что то пошло не так';
}
};

showTypeOf(title);
showTypeOf(screensPrice);

title = getTitle();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
allServicePrices = getAllServicePrices();

console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

console.log(allServicePrices);

console.log(fullPrice);


