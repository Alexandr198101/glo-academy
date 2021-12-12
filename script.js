let a = 5;
let question = +prompt('Угадай число от 1 до 100');
if (question > a) {
  alert('Загаданное число меньше');
} else if (question < a) {
  alert('Загаданное число больше');
} else if (question === a) {
  alert('Поздравляю, Вы угадали!!!');
} else {
  alert('Введи число!');
}
