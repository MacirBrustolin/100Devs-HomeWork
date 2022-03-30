// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'is this a string'
alert(sentence.endsWith('?') ? 'Its a question' : 'its not a question')

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let string = 'i am a jr. dev'
console.log(string.replaceAll('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function RockPaperScissors(){
    let random = Math.random()
    if(random < 0.33){
        return 'rock'
    }
    else if (random < 0.66){
        return 'paper'
    }
    else {
        return 'scissors'
    }
}
console.log(RockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function RPSGame(PlayerHand){
    CPUHand = RockPaperScissors()
    if (PlayerHand === 'rock' && CPUHand === 'scissors' || PlayerHand === 'paper' && CPUHand === 'rock' || PlayerHand === 'scissors' && CPUHand === 'paper' ){
        return 'Player Wins!!'
    }
    else if(PlayerHand === 'scissors' && CPUHand === 'rock' || PlayerHand === 'rock' && CPUHand === 'paper' || PlayerHand === 'paper' && CPUHand === 'scissors' ){
        return 'CPU Wins!!'
    }
    else {
        return 'Its a draw!!'
    }
}
console.log(RPSGame(RockPaperScissors()))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
