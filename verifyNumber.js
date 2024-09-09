function verify(numberJogador, numberRandom){
    if(numberJogador > numberRandom){
        return "O número é maior"
    } else if (numberJogador < numberRandom){
        return "O número é menor"
    } else {
        return "O número é igual"
    }
}