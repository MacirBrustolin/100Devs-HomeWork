//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5]
alert(arr.reduce((a, b) => a + b, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function SquareNums(arr){
    arr.forEach((element, i) => {
       arr[i] = Math.pow(element, 2) 
    })
    return arr
}
console.log(SquareNums([1, 2, 3, 4, 5, 6]))

//Create a function that takes string
//Print the reverse of that string to the console
function ReverseString(string){
    return string.split('').reverse().join('')
}
console.log(ReverseString('reverse this broo'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function IsPalindrome(string){
    if(string.split('').reverse().join('') === string) return 'its a palindrome'
    return 'its not a palindrome'
}
console.log(IsPalindrome('abcdcba'))