// script.js

let humanScore = 0;
let machineScore = 0;

function playHuman(humanChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const machineChoice = choices[Math.floor(Math.random() * choices.length)];

    const resultadoElement = document.querySelector('.resultado');
    const humanScoreElement = document.getElementById('score-human');
    const machineScoreElement = document.getElementById('score-machine');

    let resultText = `Você escolheu ${emoji(humanChoice)} e a Alexa escolheu ${emoji(machineChoice)}. `;

    if (humanChoice === machineChoice) {
        resultText += "Empate!";
    } else if (
        (humanChoice === 'rock' && machineChoice === 'scissors') ||
        (humanChoice === 'paper' && machineChoice === 'rock') ||
        (humanChoice === 'scissors' && machineChoice === 'paper')
    ) {
        humanScore++;
        resultText += "Você ganhou!";
    } else {
        machineScore++;
        resultText += "A Alexa ganhou!";
    }

    resultadoElement.textContent = resultText;
    humanScoreElement.textContent = humanScore;
    machineScoreElement.textContent = machineScore;
}

function emoji(choice) {
    switch (choice) {
        case 'rock':
            return '✊';
        case 'paper':
            return '✋';
        case 'scissors':
            return '✌️';
    }
}