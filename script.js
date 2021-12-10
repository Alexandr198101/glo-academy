'use strict';
 
let title;
let screens;
let screensPrice;
let adaptive;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let commission = 5;
let answer1;
let answer3;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};
//asking 
const asking = function () {
  title = prompt('Как называется ваш проект?');
  screens = prompt('Какие типы экранов нужно разработать?',
    'Простые, Сложные, Интерактивные');
  screensPrice = prompt('Сколько будет стоить данная работа?');

  do {
    screensPrice = prompt('Сколько будет стоить данная работа?');
  }
  while (!isNumber(screensPrice));

  adaptive = confirm('Нужен ли адаптив на сайте?');
};

//getAllServicePrices
let getAllServicePrices = function () {

  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      answer1 = prompt(
        'Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      answer3 = prompt(
        'Какой дополнительный тип услуги нужен?');
    }
    sum += +prompt('Сколько это будет стоить?');
    while(!isNumber(sum)){
      sum = prompt('Сколько это будет стоить?');
    }
  }
  return sum;
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

asking();
showTypeOf(title);
showTypeOf(screensPrice);
showTypeOf(adaptive);

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

console.log("allServicePrices", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(typeof 'title');
console.log(typeof screensPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);





