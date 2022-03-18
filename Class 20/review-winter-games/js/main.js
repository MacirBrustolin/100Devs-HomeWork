//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function ReturnsEvenNums(arr){
    let newArr = []
    arr.forEach(num => {
        if (num % 2 == 0){
            newArr.push(num)
        }
    })

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 == 0){
    //         newArr.push(arr[i])
    //     }
    // }
    return newArr
}

console.log(ReturnsEvenNums([1, 2, 3, 4, 5, 6, 7, 60, 435,234, 56,452, 324, 665421]))