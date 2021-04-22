let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_p= document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");


function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices [randomNumber];
}

function converToLetter(letter){
  if (letter === "r") return "Rock";
  if (letter === "s") return "Scissor";
  return "Papper";

}

function win(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${converToLetter(userChoice)}${smallUserWord}  beats  ${converToLetter(computerChoice)}${smallCompWord}. You win!`;
  userChoice_div.classList.add("green_glow");
  setTimeout(() => userChoice_div.classList.remove("green_glow"), 300);
}
// Line 32: we have change the line from ES5 version to ES6
// Line 34: in ES6 instead for function you can add an arrow instead, see above
//So the above setTimeout has been written in ES5 and we are going to change it to ES6 version



function lose(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${converToLetter(userChoice)}${smallUserWord}  loses to  ${converToLetter(computerChoice)}${smallCompWord}. You lost!`;
  userChoice_div.classList.add("red_glow");
  setTimeout(() => userChoice_div.classList.remove("red_glow"), 300);
}
function draw(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${converToLetter(userChoice)}${smallUserWord}  equals  ${converToLetter(computerChoice)}${smallCompWord}. It's a draw!`;
  userChoice_div.classList.add("gray_glow");
  setTimeout(() => userChoice_div.classList.remove("gray_glow"), 300);
}


function game(userChoice) {
 const computerChoice = getComputerChoice();
 switch (userChoice + computerChoice){
   case "pr":
   case "rs":
   case "sp":
   win(userChoice, computerChoice);
   break;
   case "rp":
   case "sr":
   case "ps":
   lose(userChoice, computerChoice);
   break;
   case "rr":
   case "ss":
   case "pp":
   draw(userChoice, computerChoice);
   break;

 }
}

//ES5 codes changed to ES6 down below

game("c");

function main() {

  rock_div.addEventListener("click",() => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));

}

main();
