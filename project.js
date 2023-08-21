//1. Deposit some money
//2. Determine number of lines to be bet on
//3. Collect bet amount
//4. Spin the slot machine
//5. check if the user one
//6. give the user thei winnings
//7. play again

const prompt = require("prompt-sync")();



const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat (depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Inavalid deposit! Try again please");
        } else {
            return numberDepositAmount;
        }
    }
}

const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter the number of lines that you want to bet on: ")
        const numberOfLines = parseInt(lines)

        if (isNaN(numberOfLines) || numberOfLines < 0 || numberOfLines > 3){
            console.log("Invalid numeber of lines! Enter a reasonable number of lines(1-3)");
        } else {
            return numberOfLines;
        }

    }
}

const getBet = (balance, lines) => {
  while(true){
    const bet = prompt("Enter bet per line: ")
    const numberBet = parseFloat(bet)

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
        console.log("Invalid Bet amount")
    } else {
        return numberBet
    }
  }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const numberBet = getBet(balance, numberOfLines)
