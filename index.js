import { generateRandomNumber } from './randomNumber.js';
import { checkGuess } from './checkGuess.js';

function startGame() {
    let tentativasMax = 5;
    const correctNumber = generateRandomNumber(1, 100);
    

    while (tentativasMax > 0) {
        let playerGuess = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
        let result = checkGuess(playerGuess, correctNumber);

        console.log(result);

        if (result === "Parabéns! Você adivinhou o número!") {
            break;
        }

        tentativasMax -= 1;
        if (tentativasMax === 0) {
            console.log("Você perdeu! O número era " + correctNumber);
        }
    }
}

startGame();