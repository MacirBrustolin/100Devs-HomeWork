//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5, 6, 7]

// let sum = 0
// arr.forEach(x => sum += x)

let sum = arr.reduce((acc, c) => acc + c, 0)
alert(sum)


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function TakesArrNums(arr){
    arr.forEach((x, i) => arr[i] = Math.sqrt(x))
    return arr
}
console.log(TakesArrNums([1, 2, 3, 4, 5]))


//Create a function that takes string
//Print the reverse of that string to the console

function ReverseString(string){
    return string.split("").reverse().join("")
}

console.log(ReverseString('abcdefghijklmnopqrstuvwxyz'))


//Create a function that takes in a string
//Alert if the string is a palindrome or not

function AlertStringIfPalindrome(string){
    if (string === string.split('').reverse().join('')) alert(string)
}

AlertStringIfPalindrome('abcdcbaasd')
