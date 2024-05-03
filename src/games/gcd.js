import { generateRandom } from '../utils.js';
import playGame from '../index.js';

function firstGcd(num1, num2) {
  return (num2 === 0) ? num1 : firstGcd(num2, num1 % num2);
}

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = generateRandom(1, 50);
  const num2 = generateRandom(1, 50);
  const answer = firstGcd(num1, num2).toString();
  const question = `${num1} ${num2}`;

  return [question, answer];
};

const gcd = () => playGame(description, generateRound);

export default gcd;