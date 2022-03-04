//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNumsAndAlert(num1, num2){
    alert(num1 - num2)
}
subTwoNumsAndAlert(3, 5)

//create a function that divides three numbers and console logs the quotient
function divThreeNumsAndConsoleLog(num1, num2, num3){
    console.log(num1 / num2 / num3)
}
divThreeNumsAndConsoleLog( 3, 65, 345)

//create a function that multiplys three numbers and returns the product
function multThreeNumsAndReturn(num1, num2, num3){
    return (num1 * num2 * num3)
}
alert(multThreeNumsAndReturn(1, 2, 3))

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function Medium(num1, num2, num3){
    return ((num1 + num2) % num3)
}
alert(Medium(2, 54, 2))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function Hard(num1, num2, num3, num4){
    if (num1 * num2 > 100){
        console.log(num3 + num4)
    }
    else if (num1 * num2 < 100){
        console.log(num3 - num4)
    }
    else {
        alert((num1 * num2 * num3) % num4)
    }
}
Hard(34, 21, 10, 23)