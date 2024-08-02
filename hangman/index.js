const block1 = document.createElement('div');
block1.classList.add('block1');

const block2 = document.createElement('div');
block2.classList.add('block2');

document.body.appendChild(block1);
document.body.appendChild(block2);

const svgHang = document.createElement("object");
svgHang.setAttribute("data", "./assets/gallows.svg");
svgHang.setAttribute("type", "image/svg+xml");
svgHang.classList.add('svgHang');

block1.appendChild(svgHang);

const nameGame = document.createElement('h1');
nameGame.classList.add('nameGame');
nameGame.textContent = 'HANGMAN GAME';
block1.appendChild(nameGame);

const question = document.createElement('h2');
question.classList.add('hint');
question.textContent = 'Hint: ?';
block2.appendChild(question);

const wordBlock = document.createElement('div');
wordBlock.classList.add('wordBlock');
block2.appendChild(wordBlock);

const questionsAndAnswers = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'Which planet is known as the Red Planet?', answer: 'Mars' },
  { question: 'What is the biggest bird?', answer: 'Ostrich' },
  { question: 'How many bones are in a shark s body??', answer: 'Zero' },
  { question: 'What is the chemical symbol for gold?', answer: 'Au' }
];

let currentQuestion = {};
let incorrectAttempts = 0;
let answerLetters = [];
let underscoreSpans = [];

const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
currentQuestion = questionsAndAnswers[randomIndex];
question.textContent = `Hint: ${currentQuestion.question}`;

currentQuestion.answer.split('').forEach(() => {
  const underscoreSpan = document.createElement('span');
  underscoreSpan.classList.add('under-score-span');
  underscoreSpan.textContent = '_';
  wordBlock.appendChild(underscoreSpan);
});

document.addEventListener('keydown', function(event) {
  const guessedLetter = event.key.toLowerCase();

  if (answerLetters.includes(guessedLetter)) {
    answerLetters.forEach((letter, index) => {
      if (letter === guessedLetter) {
        underscoreSpans[index].textContent = letter;
      }
    });

    const currentWord = Array.from(underscoreSpans).map(span => span.textContent).join('');
    if (currentWord === currentQuestion.answer.toLowerCase()) {
      alert('Congratulations! You guessed the word!');
      clearAnswerAndGenerateNewQuestion();
    }
  } else {
    incorrectAttempts++;
    attempt.textContent = `${incorrectAttempts}/6`;

    if (incorrectAttempts === 6) {
      alert('Game over! You ran out of attempts.');
      incorrectAttempts = 0;
      attempt.textContent = `${incorrectAttempts}/6`;
      clearAnswerAndGenerateNewQuestion();
    }
  }
});

console.log(`Answer: ${currentQuestion.answer}`);

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

letters.forEach(letter => {
  const button = document.createElement('button');
  button.textContent = letter;
  keyboard.appendChild(button);

  button.addEventListener('click', function() {
    handleGuess(letter);
  });
});

block2.appendChild(keyboard);

const attemptBlock = document.createElement('div');
attemptBlock.classList.add('attemptBlock');
block2.appendChild(attemptBlock);

const attempt = document.createElement('h2');
attempt.classList.add('attempt');
attempt.textContent = '0/6';

const inCorrect = document.createElement('h2');
inCorrect.classList.add('inCorrect');
inCorrect.textContent = 'Incorrect guesses:';
attemptBlock.appendChild(inCorrect);
attemptBlock.appendChild(attempt);

function handleGuess(guessedLetter) {
  if (answerLetters.includes(guessedLetter)) {
    answerLetters.forEach((letter, index) => {
      if (letter === guessedLetter) {
        underscoreSpans[index].textContent = letter;
      }
    });

    const currentWord = Array.from(underscoreSpans).map(span => span.textContent).join('');
    if (currentWord === currentQuestion.answer.toLowerCase()) {
      alert('Congratulations! You guessed the word!');
      clearAnswerAndGenerateNewQuestion();
    }
  } else {
    incorrectAttempts++;
    attempt.textContent = `${incorrectAttempts}/6`;

    if (incorrectAttempts === 6) {
      alert('Game over! You ran out of attempts.');
      incorrectAttempts = 0;
      attempt.textContent = `${incorrectAttempts}/6`;
      clearAnswerAndGenerateNewQuestion();
    }
  }
}

function generateRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
  currentQuestion = questionsAndAnswers[randomIndex];
  question.textContent = `Hint: ${currentQuestion.question}`;
  wordBlock.innerHTML = '';
  answerLetters = currentQuestion.answer.toLowerCase().split('');
  underscoreSpans = [];

  answerLetters.forEach(() => {
    const underscoreSpan = document.createElement('span');
    underscoreSpan.classList.add('under-score-span');
    underscoreSpan.textContent = '_';
    wordBlock.appendChild(underscoreSpan);
    underscoreSpans.push(underscoreSpan);
  });

  console.log(`New Answer: ${currentQuestion.answer}`);
}

function clearAnswerAndGenerateNewQuestion() {
  wordBlock.innerHTML = '';
  incorrectAttempts = 0;
  attempt.textContent = `${incorrectAttempts}/6`;
  generateRandomQuestion();
}

generateRandomQuestion();
