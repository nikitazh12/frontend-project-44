import gameLogic from '../index.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const rulesFunction = () => {
    const number = Math.floor(Math.random() * 100);
    const simbols = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (simbols.length - 1));
    const randomSimbol = simbols[randomIndex];
    let answer = 0;
    switch (randomIndex) {
      case 0:
        answer = number + number;
        break;
      case 1:
        answer = number - number;
        break;
      case 2:
        answer = number * number;
        break;
      default:
        answer = 1;
    }
    const question = `${number} ${randomSimbol} ${number}`;
    return [question, answer.toString()];
  };
  gameLogic(rules, rulesFunction);
};
