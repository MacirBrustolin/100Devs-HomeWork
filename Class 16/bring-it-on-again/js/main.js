// *Variables*
// Declare a variable, assign it a value, and alert the value
let variable = 5
console.log(variable)
// Create a variable, divide it by 10, and console log the value
let variable2 = 6
console.log(variable2 / 10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function Mult3NumbsAndAlert(n1, n2, n3){
    alert(n1 * n2 * n3)
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function AddFirst2NumbsAndSubLast2(n1, n2, n3, n4){
    console.log(n1 + n2 - n3 - n4)
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function Take3NumbsAndVerify(n1, n2, n3){
    if ((100 + n1 - n2) / n3 > 25) {
        console.log("We Have A Winna!!!")
    }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function DayOfWeekCheck(dayOfWeek){
    dayOfWeekLowerCase = dayOfWeek.toLowerCase()
    if (dayOfWeek === "saturday" || dayOfWeek === "sunday"){
        alert("Weekend!!!")
    } else if (dayOfWeek === "monday" || dayOfWeek === "tuesday" || dayOfWeek === "wednesday" || dayOfWeek === "thursday" || dayOfWeek === "friday"){
        alert("Week Day :(")
    } else {
        alert("Try Again!")
    }
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function LogsNumbersByThree(n1){
    for (let i = 1; i <= n1; i += 3) {
        console.Log(i)
    }
}