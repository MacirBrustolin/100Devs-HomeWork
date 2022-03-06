// *Variables*
// Create a variable and console log the value
let num = 7
console.log(num)
// Create a variable, add 10 to it, and alert the value
let otherNum = 5
otherNum += 10
alert(otherNum)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function Sub4NumbersAndAlert(n1, n2, n3, n4){
    const sub4nums = n1 - n2 - n3 - n4
    alert(sub4nums)
}
Sub4NumbersAndAlert(100, 20, 10, 5)
// Create a function that divides one number by another and returns the remainder
function Divide2NumsAndReturn(n1, n2){
    return n1 % n2
}
alert(Divide2NumsAndReturn(10, 5))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function Add2NumsAndAlert(n1, n2){
    if (n1 + n2 > 50){
        alert("Jumanji")
    }
}
Add2NumsAndAlert(25, 26)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function Mult3NumbAlert(n1, n2, n3){
    if ((n1 * n2 * n3) % 3 === 0){
        alert("Zebra")
    }
}
Mult3NumbAlert(3, 3, 3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
const userInputWord = prompt()
const userInputNumber = prompt()

function ConsoleWordXTimes(word, number){
    for(let i = 0; i < number; i++){
        console.log(word)
    }
}

ConsoleWordXTimes(userInputWord, userInputNumber)
