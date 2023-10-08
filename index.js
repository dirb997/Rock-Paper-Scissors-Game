const userText = document.getElementById('userText');
const machineText = document.getElementById('machineText');
const battleText = document.getElementById('battleText');
const choicesBtn = document.querySelectorAll('.choicesBtn');

let player;
let machine;
let battleResult;

choicesBtn.forEach(button => button.addEventListener('click', () => {

    player = button.textContent;
    machineTurn();
    userText.textContent = `Player: ${player}`;
    machineText.textContent = `Machine: ${machine}`;
    document.getElementById('battleText').style.display = "block";
    battleText.textContent = checkWinner();

}))

function machineTurn(){
    const turnNum = Math.floor(Math.random() * 3) + 1;

    switch(turnNum) {
        case 1:
            machine = "ROCK";
            break;

        case 2:
            machine = "PAPER";
            break;
        case 3:
            machine = "SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player == machine){
        return "DRAW!";
    }
    else if(machine == "ROCK"){
        return player == "PAPER" ? "YOU WON!" : "YOU LOSE!";
    }
    else if(machine == "PAPER"){
        return player == "SCISSORS" ? "YOU WON!" : "YOU LOSE!";
    }
    else if(machine == "SCISSORS"){
        return player == "ROCK" ? "YOU WON!" : "YOU LOSE!";
    }
}