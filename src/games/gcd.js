import gameLogic from '../index.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const rulesFunction = () => {
    const number = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    const question = `${number} ${number2}`;
    const answer = `${gcd(number, number2)}`;
    return [question, answer];
  };

  gameLogic(rules, rulesFunction);
};
