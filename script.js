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
   
function getuserinput() { //prompts user to choose between rock paper scissors
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
      playerscore++; //adds 1 to the player score 
      return 'YOU WIN!'
   } else if (getuserinput === 'scissors' && getcomputerchoice === 'paper') {
      playerscore++;
      return 'YOU WIN'
   } else if (getuserinput === getcomputerchoice) {
      return "TIE!"
   } else {
      computerscore++; //adds 1 to the computer score
      return 'COMPUTER WINS'
   }
}

function game() { //loops for 5 rounds 
   for (let i = 0; i < 5; i++) { 
      let userinput = getuserinput();
      let computerchoice = getcomputerchoice();
       console.log(playround(userinput,computerchoice)); // runs the playround function with 2 parameters
   }
}

game(); // calls the game function to run 

function results() { // counts up the score 
   if (playerscore < computerscore) {
      return 'COMPUTERS RULE!';
   } else if (playerscore > computerscore) {
      return 'player is the winner!!'
   } else {
      return 'lets play again.'
   }
}
let resultplayerscore = 'player score: ' + playerscore;
let resultcomputer = 'computers score: ' + computerscore;

alert(resultplayerscore);
alert(resultcomputer);// puts alerts on the screen to show the winner and scores
alert(results());
