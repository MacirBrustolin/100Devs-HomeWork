// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let variable
variable = "green"
alert(variable)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let variable2 = "green"
alert(variable2[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function Takes3NumsDivide2MultLast(num1, num2, num3){
    alert(num1 / num2 * num3)
}

Takes3NumsDivide2MultLast(1, 2, 3)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function LogsCubeRoot(num){
    console.log(Math.cbrt(num).toFixed(4))
}

LogsCubeRoot(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function TakesMonthAlert(month){
    if (month.toLowerCase() === "december" || month.toLowerCase() === "january" || month.toLowerCase() === "february"){
        alert("YAY")
    }
    else {
        alert("Boo")
    }
}

TakesMonthAlert("december")
TakesMonthAlert("may")

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function LogsNumsExceptMult5(num){
    for (let i = 0; i < num; i++) {
        if ( i % 5 != 0) {
            console.log(i)
        }
    }
}

LogsNumsExceptMult5(20)
