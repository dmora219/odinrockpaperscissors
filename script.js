function getcomputerchoice() {
   let random = Math.floor(Math.random() * 3);

   switch (random) {
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
   
function getuserinput() {
   let userinput = prompt('rock paper scissors SHOOT!')
   if (userinput.toLowerCase() === 'rock' || userinput === 'paper' || userinput === 'scissors') {
      return userinput
   } else {
      return 'error';
   }
}
let playerscore = 0;
let computerscore = 0;
function playround(getuserinput, getcomputerchoice) {
   if (getuserinput === 'rock' && getcomputerchoice === 'scissors') {
      playerscore++;
         return 'YOU WIN!'
   } else if (getuserinput === 'paper' && getcomputerchoice === 'rock') {
      playerscore++;
      return 'YOU WIN!'
   } else if (getuserinput === 'scissors' && getcomputerchoice === 'paper') {
      playerscore++;
      return 'YOU WIN'
   } else if (getuserinput === getcomputerchoice) {
      return "TIE!"
   } else {
      computerscore++;
      return 'COMPUTER WINS'
   }
}

function game() {
   for (let i = 0; i < 5; i++) { 
      let userinput = getuserinput();
      let computerchoice = getcomputerchoice();
       console.log(playround(userinput,computerchoice));
   }
}

game();

function results() {
   if (playerscore < computerscore) {
      return 'COMPUTERS RULE!';
   } else if (playerscore > computerscore) {
      return 'player is the winner!!'
   } else {
      return 'lets play again.'
   }
}
console.log('playerscore: ' + playerscore);
console.log('computerscore: ' + computerscore);
console.log(results());