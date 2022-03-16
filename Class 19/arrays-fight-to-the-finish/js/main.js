//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = ["fight", "win" , "Worldwide"]

for (let i = 0; i < movies.length; i++) {
    document.querySelector('h2').innerText += movies[i]  
}
//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

numbers.forEach((item, i) => {
    numbers[i] += 3
})

//Find the average of all the numbers from question three
let sum = 0

numbers.forEach((num) => sum += num)

let average = sum / numbers.length
