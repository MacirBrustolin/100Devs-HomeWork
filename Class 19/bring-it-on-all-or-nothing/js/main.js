// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let bolVar = true
alert(bolVar)

// Declare a variable, reassign it to your favorite color, and console log the value
let colorVar 
colorVar = "Green"

console.log(colorVar)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function Take4NumbersAndReturn(num1, num2, num3, num4){
    return (num1 + num2 + num3) / num4
}

Take4NumbersAndReturn(1, 2, 3, 4)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function Take2NumbersAndLog(num1, num2){
    console.log(Math.pow(num1, num2))
}

Take2NumbersAndLog(2, 3)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function IfTrueAlertElseLog(boolVar, stringVar){
    // if (bolVar){
    //     alert(stringVar)
    // }
    // else {
    //     console.log(stringVar)
    // }

    bolVar ? alert(stringVar) : console.log(stringVar)
}

IfTrueAlertElseLog(true, "Hello World")

const AlertorLog = (a, b) => a ? alert(b) : console.log(b)

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function TakesANumAndLogs(num1){
    for (let i = 1; i <= num1; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log("Fizz")
        }
        else if (i % 5 === 0){
            console.log("Buzz")
        }
        else if (i % 3 === 0 ){
            console.log("FizzBuzz")
        }
        else{
            console.log(i)
        }
        
    }
}