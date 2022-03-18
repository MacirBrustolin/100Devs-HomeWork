//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function MultiplyArrayValues(arr){
    let result = 1

    // arr.forEach( num => result *= num)

    for (let i = 0; i < arr.length; i++) {
        result *= arr[i]
    }
    alert(result)
}

MultiplyArrayValues([1, 2, 3, 4, 5, 6])