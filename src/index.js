import readlineSync from 'readline-sync';

export default (rules, rulesFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  let winPlus = 0;
  while (winPlus < 3) {
    const [question, answer] = rulesFunction();
    const yourAnswer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${yourAnswer}`);
    if (yourAnswer === answer) {
      console.log('Correct!');
      winPlus += 1;
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
