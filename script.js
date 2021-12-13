'use strict';

const appData = {
  title: '',
  screens: '',
  screensPrice: 0,
  adaptive: '',
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  commission: 5,
  answer1: '',
  answer3: '',
  asking: function () {
  appData.title = prompt('Как называется ваш проект?');
  appData.screens = prompt('Какие типы экранов нужно разработать?',
    'Простые, Сложные, Интерактивные');
  appData.screensPrice = prompt('Сколько будет стоить данная работа?');

  do {
    appData.screensPrice = prompt('Сколько будет стоить данная работа?');
  }
  while (!isNumber(appData.screensPrice));

  appData.adaptive = confirm('Нужен ли адаптив на сайте?');
},
//getAllServicePrices
getAllServicePrices: function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      appData.answer1 = prompt(
        'Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      appData.answer3 = prompt(
        'Какой дополнительный тип услуги нужен?');
    }
    sum += +prompt('Сколько это будет стоить?');
    while(!isNumber(sum)){
      sum = prompt('Сколько это будет стоить?');
    }
  }
  return sum;
},
//getFullPrice
getFullPrice: function() {
  return appData.screensPrice + appData.allServicePrices;
},
//getServicePercentPrice
getServicePercentPrice: function () {
  return appData.fullPrice - appData.fullPrice * (appData.commission / 100);
},
//getTitle
getTitle: function() {
  //console.log(title[0].toUpperCase() + title.substring(1));
  console.log(appData.title[0].toUpperCase() + appData.title.substring(1).toLowerCase());
},
//getRollbackMessage;
getRollbackMessage: function (price) {
if (price >= 30000) {
  return'Даем скидку в 10%';
} else if (price >= 15000 && price < 30000) {
  return 'Даем скидку в 5%';
} else if (price < 15000 && price >= 0) {
  return 'Скидка не предусмотрена';
} else {
  return 'Что то пошло не так';
}
},
start: function() {
  appData.asking();
  appData.getAllServicePrices();
  appData.getFullPrice();
  appData.getServicePercentPrice();
  appData.getTitle();
  appData.getRollbackMessage();
  appData.logger();
},
logger: function() {
  console.log(appData.fullPrice);
  console.log(appData.servicePercentPrice);
}
};

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}; 

appData.start();

appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice();
appData.servicePercentPrice = appData.getServicePercentPrice();
appData.title = appData.getTitle();

for (let kay in appData.logger) {
  console.log(appData);
}





