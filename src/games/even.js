import generateRandom from '../utils.js';
import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2) === 0;

const generateRound = () => {
  const num = generateRandom(1, 1000);
  const question = num;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

const even = () => playGame(description, generateRound);

export default even;
