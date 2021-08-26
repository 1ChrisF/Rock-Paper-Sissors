const     rock = "rock";
const    paper = "paper"; 
const scissors = "scissors";                   
const  choices = [rock,paper,scissors,rock];
let playerScore = 0;
let cpuScore   = 0;
const btns = document.querySelectorAll('.btn');
btns.forEach(item => item.addEventListener('click', round));
const winEvent = document.querySelectorAll('.winEvent');
let playBtn = document.querySelector('#playBtn');
playBtn.addEventListener('click', playAgain);
let overlay = document.querySelector('.overlay');

function declareWinner(){    
    document.querySelector('#L').src = `images/open.png`;
    document.querySelector('#R').src = `images/open-r.png`;
    const winner = (playerScore === 5) ? "won!" : "lost!";    
        const winEventMessage = document.querySelector('#message');    
        winEventMessage.textContent = `You ${winner}`;       
    winEvent.forEach(item => item.classList.remove('visible'));   
    overlay.classList.remove('visible');    
}
function playAgain(){    
    winEvent.forEach(item => item.classList.add('visible'));
    overlay.classList.add('visible');    
    playerScore = 0;
    cpuScore = 0;    
    updateScore();
}
function updateScore(){
    const scores = document.querySelector('#scores');
    scores.textContent = `${playerScore} : ${cpuScore}`; 
}
function compPlay(){
    let select = choices [ranNum];
    return select;
}
 function round(){
    if(playerScore === 5 || cpuScore === 5){return}     
    ranNum = Math.floor(Math.random()*3);    
    cpuSelection = compPlay();
    plySelection = this.id    
    document.querySelector('#L').src = `images/${plySelection}.png`;
    document.querySelector('#R').src = `images/${cpuSelection}-r.png`;   
    if (cpuSelection === plySelection){//draw do something..     
        }else if(plySelection === choices[ranNum+1]){ //wining pick always 1 in front of loser pick.  
            console.log
            ++playerScore;
            updateScore();
        }else{
             ++cpuScore;
             updateScore();
            }         
        if(playerScore === 5 || cpuScore === 5){
             declareWinner();        
            } 
        }