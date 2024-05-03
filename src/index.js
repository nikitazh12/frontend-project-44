import * as readlineSync from 'readline-sync';

// Объявление глобальных переменных
let userName;
let sign;
let firstRandomNumber;
let secondRandomNumber;
let resultOfCorrectAnswer;
let isGameOver;
let hideOfProgressionNumber;
let stepForProgression;
// Функция приветствия юзера
const greetings = () => {
  userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`${'Hello,'} ${userName}${'!'}`);
};

// Функкция определения имени юзера
const getUsersName = () => userName;

// Функция описания правил игры
const rulesOfGame = (nameGame) => {
  switch (nameGame) {
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      break;
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      console.log('Sorry, something wrong');
      break;
  }
};

// Функция вывода рандомного числа
function getRandom(min, max) {
  const minCopy = Math.ceil(min);
  const maxCopy = Math.floor(max);
  return Math.floor(Math.random() * (maxCopy - minCopy)) + minCopy;
}
// Функция вывода рандомного математического знака
const getRandomMathSign = () => {
  const arr = ['+', '-', '*'];
  const i = Math.floor(Math.random() * arr.length);
  const operator = arr[i];
  return operator;
};

// Доп функция для вывода вопроса в игре brain-progression
const progression = () => {
  stepForProgression = getRandom(2, 10);
  const hideOfIndexNumber = getRandom(1, 10);
  let arr = [];
  const endProgression = firstRandomNumber + stepForProgression * 10;
  for (
    let i = firstRandomNumber;
    i < endProgression;
    i += stepForProgression
  ) {
    arr.push(i);
  }
  hideOfProgressionNumber = arr.splice(hideOfIndexNumber, 1, '..');
  arr = arr.join(' ');
  return arr;
};

// Функция, задающая вопрос юзеру

const question = (nameGame) => {
  firstRandomNumber = getRandom(2, 100);
  secondRandomNumber = getRandom(1, 100);
  sign = getRandomMathSign();
  let questionResult;
  switch (nameGame) {
    case 'brain-calc':
      questionResult = console.log(`${'Question:'} ${firstRandomNumber} ${sign} ${secondRandomNumber}`);
      break;
    case 'brain-even':
      questionResult = console.log(`${'Question:'} ${firstRandomNumber}`);
      break;
    case 'brain-gcd':
      questionResult = console.log(`${'Question:'} ${firstRandomNumber} ${secondRandomNumber}`);
      break;
    case 'brain-progression':
      questionResult = console.log(`${'Question:'} ${progression(firstRandomNumber, stepForProgression)}`);
      break;
    case 'brain-prime':
      questionResult = console.log(`${'Question:'} ${firstRandomNumber}`);
      break;
    default:
      console.log('Sorry, something wrong');
      break;
  }
  return questionResult;
};

// Функция получения ответа от пользователя
const getUsersAnswer = () => readlineSync.question('Your answer: ');

// Функция расчета правильно ответа для игры brain-calc
const brainCalcCorrectAnswer = (a, b) => {
  if (sign === '+') {
    resultOfCorrectAnswer = a + b;
  } else if (sign === '-') {
    resultOfCorrectAnswer = a - b;
  } else {
    resultOfCorrectAnswer = a * b;
  }
  return resultOfCorrectAnswer;
};

// Функция расчета правильно ответа для игры brain-even
const brainEvenCorrectAnswer = (a) => {
  if (a % 2 === 0) {
    resultOfCorrectAnswer = 'yes';
  } else if (a % 2 !== 0) {
    resultOfCorrectAnswer = 'no';
  }
  return resultOfCorrectAnswer;
};

// Функция расчета правильно ответа для игры brain-gcd

const brainGcdCorrectAnswer = (a, b) => {
  if (!b) {
    return a;
  }
  return brainGcdCorrectAnswer(b, a % b);
};

// Функция расчета правильно ответа для игры brain-prime
const brainPrimeCorrectAnswer = (a) => {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// Функция определения правильного ответа в зависимости от названия игры
const correctAnswer = (nameGame) => {
  switch (nameGame) {
    case 'brain-calc':
      brainCalcCorrectAnswer(firstRandomNumber, secondRandomNumber);
      break;
    case 'brain-even':
      brainEvenCorrectAnswer(firstRandomNumber);
      break;
    case 'brain-gcd':
      resultOfCorrectAnswer = brainGcdCorrectAnswer(firstRandomNumber, secondRandomNumber);
      break;
    case 'brain-progression':
      resultOfCorrectAnswer = hideOfProgressionNumber;
      break;
    case 'brain-prime':
      resultOfCorrectAnswer = brainPrimeCorrectAnswer(firstRandomNumber);
      break;
    default:
      console.log('Sorry, something wrong');
      break;
  }
  return resultOfCorrectAnswer.toString();
};

// Функция с выводом текста правильного ответа
const textOfcorrectAnswer = () => {
  console.log('Correct!');
};

// Функция сравнения правильного результата с результатом юзера
const compareOfAnswer = (nameGame) => {
  const userAnswer = getUsersAnswer();
  const answer = correctAnswer(nameGame);
  if (answer === userAnswer) {
    textOfcorrectAnswer();
  } else {
    console.log(`${userAnswer} ${'is wrong answer ;(. Correct answer was'} ${answer}.\n${"Let's try again,"} ${getUsersName()}!`);
    isGameOver = 'true';
  }
};

// Функция запуска игры со счетчиком 
const runGameWithCounter = (nameGame) => {
  greetings();
  rulesOfGame(nameGame);
  const count = 3;
  let i = 0;
  while (i < count && isGameOver !== 'true') {
    question(nameGame);
    correctAnswer(nameGame);
    compareOfAnswer(nameGame);
    i += 1;
  }
  if (i === 3 && isGameOver !== 'true') {
    console.log(`${'Congratulations,'} ${getUsersName()}!`);
  }
};
export default runGameWithCounter;