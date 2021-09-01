const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const choices = [rock, paper, scissors, rock];
let playerScore = 0;
let cpuScore = 0;
const btns = document.querySelectorAll('.btn');
btns.forEach(item => item.addEventListener('click', playRound));

const winEvent = document.querySelectorAll('.winEvent');
const overlay = document.querySelector('.overlay');
const playBtn = document.querySelector('#playBtn');
playBtn.addEventListener('click', playAgain);

function declareWinner() {
    document.querySelector('#L').src = `images/open.png`;
    document.querySelector('#R').src = `images/open-r.png`;
    let winner = (playerScore === 5) ? "won!" : "lost!";
    document.querySelector('#message')
            .textContent = `You ${winner}`;
    winEvent.forEach(item => item.classList.remove('visible'));
    overlay.classList.remove('visible');
}
function playAgain() {
    winEvent.forEach(item => item.classList.add('visible'));
    overlay.classList.add('visible');
    playerScore = 0;
    cpuScore = 0;
    showScore();
}
function showScore() {
    const scores = document.querySelector('#scores');
    scores.textContent = `${playerScore} : ${cpuScore}`;
}
function cpuPlay() {
    let select = choices[ranNum];
    return select;
}
function playRound() {
    if (playerScore === 5 || cpuScore === 5) { return }
    ranNum = Math.floor(Math.random() * 3);
    cpuChoice = cpuPlay();
    playerChoice = this.id
    document.querySelector('#L').src = `images/${playerChoice}.png`;
    document.querySelector('#R').src = `images/${cpuChoice}-r.png`;
    compareChoices();
}
function compareChoices(){
    if (cpuChoice === playerChoice) {//draw     
    } else if (playerChoice === choices[ranNum + 1]) { //winners choice always 1 in front of losers choice.              
        ++playerScore;
    } else {
        ++cpuScore;
    }
    showScore();
    if (playerScore === 5 || cpuScore === 5) {
        declareWinner();
    }
}