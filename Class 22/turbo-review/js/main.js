// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = "  just   plain water"
console.log(drink.trim())


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multWords = "hello world apple pie"
multWords.includes("apple") ? console.log(true) : console.log(false)


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function RockPaperScissors(){
    let hand = Math.random()
    if (hand < 0.33){
        return "rock"
    }
    else if (hand < 0.66){
        return "paper" 
    }
    else {
        return "scissors"
    }
}
console.log(RockPaperScissors())


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function RockPaperScissorsGame(playerHand){
    let cpuHand = RockPaperScissors()
    if (playerHand == "rock" && cpuHand == "paper" || playerHand == "paper" && cpuHand == "scissors" | playerHand == "scissors" && cpuHand == "rock"){
        return "CPU wins"
    }
    else if (playerHand == cpuHand){
        return "Its a Tie!"
    }
    else {
        return "Player wins"
    }
}
console.log(RockPaperScissorsGame("rock"))


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function RockPaperScissorsXTimes(arrayChoices){
    arrayChoices.forEach(x => console.log(RockPaperScissorsGame(arrayChoices[i])))
}
