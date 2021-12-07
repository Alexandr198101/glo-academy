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

//getAllServicePrices
let getAllServicePrices = function () {
  return answer2 + answer4;
};

//showTypeOf
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

//getFullPrice
let getFullPrice = function() {
  return screensPrice + allServicePrices;
};

//getServicePercentPrice
let getServicePercentPrice = function () {
  return fullPrice - (fullPrice * (commission / 100));
};

//getTitle
function getTitle() {
  //console.log(title[0].toUpperCase() + title.substring(1));
  console.log(title[0].toUpperCase() + title.substring(1).toLowerCase());
}

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
showTypeOf(adaptive);

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

console.log(getRollbackMessage(fullPrice));
console.log(typeof 'title');
console.log(typeof screensPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);
//console.log(title[0].toUpperCase() + title.substring(1).toLowerCase());




