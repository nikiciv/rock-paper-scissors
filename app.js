let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector("score-board");
const result_div = document.getElementById("result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const getComputerChoice = () => {
  let choice = ['Rock', 'Paper', 'Scissors'];
  let randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

const win = (user, computer) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = user + ' beats ' + computer + '.You win!';
  document.getElementById(user.toLowerCase()).classList.add('win-border');
  setTimeout(() => {
    document.getElementById(user.toLowerCase()).classList.remove('win-border');
  },300)
}

const lose = (user, computer) => {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = computer + ' beats ' + user + '.You lose!';
  document.getElementById(user.toLowerCase()).classList.add('lose-border');
  setTimeout(() => {
    document.getElementById(user.toLowerCase()).classList.remove('lose-border');
  },300)
}

const draw = (user) => {
  result_div.innerHTML = "It's draw.Please try again.";
  document.getElementById(user.toLowerCase()).classList.add('draw-border');
  setTimeout(() => {
    document.getElementById(user.toLowerCase()).classList.remove('draw-border');
  },300)
}

const game = (userInput) => {
  const computerChoice = getComputerChoice();
  switch(userInput + computerChoice) {
    case 'RockScissors':
    case 'ScissorsPaper':
    case 'PaperRock':
      win(userInput, computerChoice);
      break;
    case 'SissorsRock':
    case 'PaperScissors':
    case 'PaperRock':
      lose(userInput, computerChoice);
      break;
    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorsScissors':
      draw(userInput);
      break;
  }
};

rock_div.addEventListener('click', () => {
  game('Rock');
});

paper_div.addEventListener('click', () => {
  game('Paper');
});

scissors_div.addEventListener('click', () => {
  game('Scissors');
});
