export function checkGuess(playerGuess, correctNumber) {
    if (playerGuess > correctNumber) {
        return "O número aleatório é menor que esse!";
    } else if (playerGuess < correctNumber) {
        return "O número aleatório é maior que esse!";
    } else {
        return "Parabéns! Você adivinhou o número!";
    }
}