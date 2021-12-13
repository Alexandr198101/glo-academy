'use strict';

//Проверка на введение чисел
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function getGame() {

  //Получение случайного числа в заданном интервале
  function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random()) * (max - min) + min;
  }
    //Присваиваем переменную х
    let x = getRandomArbitrary(1, 100);
    console.log(x);
  //Условия 
  function getRandomInt() {
    let question = prompt('Угадай число от 1 до 100');
      if (question === null || question === "") {
        alert("Игра окончена");
      } else if (!isNumber(question)) {
        alert("Введите число");
        return getRandomInt();
      } else if (question === x) {
        alert('Поздравляю, Вы угадали!!!');
      } else if (question > x) {
        alert('Загаданное число меньше');
        return getRandomInt();
      } else if (question < x) {
        alert('Загаданное число больше');
        return getRandomInt();
      }
  }
  getRandomInt();
}
getGame();



