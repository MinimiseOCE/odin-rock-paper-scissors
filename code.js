// Create Variables for both answer
let playerAns = '';
let compAns = '';
let winStatus = '';
let roundNumber = 0;

// Create Player Asking Function
function askPlayer() {
    // Loop function
    while (1==1) {
    // Ask player for input on either Rock/PaperScissors
    let response = window.prompt("Rock, Paper or Scissors?");
        // Lower case their input to make answer case insensitive
        let cleanAns = response.toLowerCase();
        // Make sure their input is one of the three
        if (cleanAns == "rock" || cleanAns == "paper" || cleanAns == "scissors") {
            alert("You Selected " + response + ".")
            return cleanAns
        }
        // If not one of the three ask again and give error message
        else {
            alert('Please Select Either Rock/Paper or Scissors.')
        }
    }
}

// Generate computer answer
function askComputer() {
    // Generate random number between 0-1
    let answer = Math.random()

        // If number lower then 0.33 generate rock
        if (answer < 0.33) {
            return 'rock';
        }
        // If number lower then 0.66 generate paper
        else if (answer < 0.66) {
            return 'paper';
        }
        // If number lower then 1 generate scissors
        else {
            return 'scissors';
        }
}
// Compare options to decide winner
function decideWinner() {
    // If player wins type You Win! (explanation)
    if (playerAns == 'paper' && compAns == 'rock' || playerAns == 'rock' && compAns == 'scissors' || playerAns == 'scissors' && compAns == 'paper') {
        alert('You Win! ' + playerAns + ' beats ' + compAns)
        return 'Win';
    }
    // If player loses type You Lose! (explanation)
    else if (playerAns == 'rock' && compAns == 'paper' || playerAns == 'scissors' && compAns == 'rock' || playerAns == 'paper' && compAns == 'scissors') {
        alert('You Lose ): ' + compAns + ' beats ' + playerAns)
        return 'Lose';
    }
    // If tie type You Draw D: (explanation)
    else {
        alert('You Draw D:, you both picked ' + compAns + '!')
        return 'Draw';
    }
}

// Create Round Function
function playRound() {
    playerAns = askPlayer();
    compAns = askComputer();
    winStatus = decideWinner();
}

// Create Replay Function
function replay() {
    // Create for loop
    for (let i = true; i == true;) {
        roundNumber = roundCount()
        // Create loop for how many rounds they wanna play
        for (let x = 0; x < roundNumber; x++) {
            // Play round x amount of times
            playRound();
        }
        // Ask if they want to play again
        if (playAgain() == 'no') {
            return;
        }
    }
}

// Create function for how many rounds
function roundCount() {
    while (1 == 1) {
        // Ask how many rounds
        let amountOfRounds = window.prompt("How many rounds do you want to play?");
        // Make sure its a number
        if (isNaN(amountOfRounds) == false) {
            return amountOfRounds;
        }
        // Else ask again
        else {
            alert("Please Select A Number.");
        }
    }
}

// Create playAgain Function
function playAgain() {
    // Loop function
    while (1==1) {
    // Ask player for input on either Yes or No to playing again
    let response = window.prompt("Play Again? (Yes or No)");
        // Lower case their input to make answer case insensitive
        let cleanAns = response.toLowerCase();
        // If they answer no end cycle
        if (cleanAns == "no") {
            alert("Come back soon ;-; ");
            return cleanAns;
        }
        // If they answer yes play again
        else if (cleanAns == "yes") {
            return cleanAns;
        }
        // Make sure they input yes or no
        else {
            alert('Please Select Either Yes or No');
        }
    }
}


// Run Program
replay()