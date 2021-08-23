console.log("test")


const    rockBeatenBy = "paper";
const   paperBeatenBy = "scissors"; 
const sissorsBeatenBy = "rock";

const         choices = [rockBeatenBy,paperBeatenBy,sissorsBeatenBy]; // This beats this list
const           draws = [paperBeatenBy,sissorsBeatenBy,rockBeatenBy]; // Moves one in array to follow win/lose pattern to Draw
const           lost  = [sissorsBeatenBy,rockBeatenBy,paperBeatenBy]; // Moves one more in array to Lost

//ask the user to enter a selection RPS1
function playerPlay(){
    select = prompt("Rock? Paper? Scissor?");
    select = select.toLowerCase();
    return select;
}

//P2 selects RPS from this beats this list. 
function compPlay(){
        let select = choices [ranNum];
    return select;
} 
 
 function round(){
    ranNum = Math.floor(Math.random()*3);
    computerSelection = compPlay();
    playerSelection = playerPlay();
    console.log(playerSelection, lost [ranNum]);

    if (computerSelection === playerSelection){ //check if player beats computer choice is true for win
    console.log(`You won ${playerSelection} beats ${lost[ranNum]}!`)
    }else if(playerSelection != draws[ranNum]){ //if no match move array -1 and re check for match.
          console.log("A tie!");     
    }else{console.log(`You lost :( ${lost[ranNum]} beats ${playerSelection}`)}  
 }

 function game(){
    for (let i=0; i<5; ++i) { 
        round();}       
 }

 game();


//add score to winner
