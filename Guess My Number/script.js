let highscore = document.querySelector('.highscore');
let messageToDisplay = document.querySelector('.message');
let scoreDOM = document.querySelector('.score');
let again = document.querySelector('.again');
let score = 20;
let counter = 20;

const NO_NUMBER = '🔞 No Number';
const CORRECT_ANSWER = '🎉 CORRECT ANSWER';
const NUMBER_LOW = '⏬ LOW'
const NUMBER_HIGH = '⏫ HIGH';

let generateRandomNumber = () => Math.floor(Math.random() * 20);
let randomNumber = generateRandomNumber();

again.addEventListener('click', () => {
    reset();
})
const buttonInput = document.querySelector('.check');

buttonInput.addEventListener('click', () => {
    let inputFromUI = document.querySelector('.guess').value;
    if (!inputFromUI) {
        messageToDisplay.textContent = NO_NUMBER;
    } else {
        if (inputFromUI == randomNumber) {
            handleSuccess();
        } else if (inputFromUI < randomNumber) {
            messageToDisplay.textContent = NUMBER_LOW;
            handleScore(true);
        } else if (inputFromUI > randomNumber) {
            messageToDisplay.textContent = NUMBER_HIGH;
            handleScore(true);
        }
    }

})

let handleScore = (wrongAnswer) => {
    if (wrongAnswer) {
        score--;
    }
    scoreDOM.textContent = score;
}

let setHighScore = (value) => {
    highscore.textContent = value;
}

let handleSuccess = () => {
    messageToDisplay.textContent = CORRECT_ANSWER;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomNumber;
    buttonInput.setAttribute('disabled', true);
    handleScore(false);
    setHighScore(score);
}

let reset = () => {
    score = 20;
    randomNumber = generateRandomNumber();
    scoreDOM.textContent = score;
    messageToDisplay.textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.body.style.backgroundColor = '#222';
}