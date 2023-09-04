const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const newGame = document.querySelector('.newGame')
const div = document.querySelector('.playerComputerScore')
const playerP = document.createElement('p');
const computerP = document.createElement('p');
let playerscore = 0;
let computerscore = 0;

let endgame = false;
function getcomputerchoice() {
   
   let random = Math.floor(Math.random() * 3);//function to pick a random number out of the 3 choices

   switch (random) {//switch method! alternative to an array
      case 0:
         return "rock";
         break;
      case 1:
         return "paper";
         break;
      case 2:
         return "scissors"
         break;
   }

}
   

function playround(getuserinput, getcomputerchoice) {
   if (getuserinput === 'rock' && getcomputerchoice === 'scissors') {
      playerscore++;
         div.textContent = 'YOU WIN!'
   } else if (getuserinput === 'paper' && getcomputerchoice === 'rock') {
      playerscore++; //adds 1 to the player score 
      div.textContent = 'YOU WIN!'
   } else if (getuserinput === 'scissors' && getcomputerchoice === 'paper') {
      playerscore++;
      div.textContent = 'YOU WIN'
   } else if (getuserinput === getcomputerchoice) {
      div.textContent = "TIE!"
   } else {
      computerscore++; //adds 1 to the computer score
      div.textContent = 'COMPUTER WINS'
   }
   endGame();
}


function endGame() {
   if (playerscore >= 5) {
      div.textContent = 'Game Over you win';
      endgame = true;
   } else if (computerscore >= 5) {
      div.textContent = 'Game Over Computer Wins';
      endgame = true;
   } else {
      div.textContent = 'Tie Start New Game';
      endgame = true;
   }
}
function updateScore() {
   playerP.innerHTML = `Player Score Is: <b>${playerscore}</b>`
   computerP.innerHTML = `computer Score Is: <b>${computerscore}</b>`
   div.appendChild(playerP)
   div.append(computerP)
}
function startNewGame() {
   if (endgame) {
      playerscore = 0;
      computerscore = 0;
   }
   updateScore()
}
let userChoice = ''
function cleanCode() {
   const computerChoice = getcomputerchoice()
   const playRound = playround(userChoice, computerChoice)
   return playRound;
}
rock.addEventListener('click', function () {
   userChoice = 'rock';
   cleanCode()
   updateScore()
   //endGame()
   })
paper.addEventListener('click', function () {   
   userChoice = 'paper';
   cleanCode()
   updateScore()
   //endGame()
   
})
scissors.addEventListener('click', function () {
   userChoice = 'rock';
   cleanCode()
   updateScore()
   //endGame()
})
endGame();
newGame.addEventListener('click',startNewGame)


