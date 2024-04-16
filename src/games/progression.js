import gameLogic from '../index.js';

export default () => {
  const rules = 'What number is missing in the progression?';

  function getProgression(start) {
    const members = [];
    for (let i = start; i < start + 10; i += 2) {
      const result = (start + i);
      members.push(result);
    }
    return members;
  }

  function rulesFunction() {
    const num = Math.floor(Math.random() * 10);
    const progression = getProgression(num);
    const hiddenIndex = Math.floor(Math.random() * progression.length);

    const correctAnswer = `${progression[hiddenIndex]}`;
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
  }
  gameLogic(rules, rulesFunction);
};
