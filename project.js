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

const getNumberOfLInes = () => {
    while (true){
        const lines = prompt("Enter the number of lines that you want to bet on: ")
        const numberOfLInes = parseInt(lines)

        if (isNaN(numberOfLInes) || numberOfLInes < 0 || numberOfLInes > 3){
            console.log("Invalid numeber of lines! Enter a reasonable number of lines(1-3)");
        } else {
            return numberOfLInes;
        }

    }
}


const depositAmount = deposit();
const numberOfLInes = getNumberOfLInes();