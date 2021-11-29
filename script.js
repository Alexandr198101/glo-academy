let title = 'Lesson02';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 1;
let rollback = 50;
let fullPrice = 10000000;
let adaptive = 'false';

//Определение типа данных
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

//Длина строки
console.log(screens.length);

//Вывод стоимости
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

//Приведение строки к нижнему регистру и вывод массива в консоль
console.log(screens.toLocaleLowerCase());
console.log(screens.split(''));

//Процент отката 
console.log(fullPrice * (rollback / 100));





