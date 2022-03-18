//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function primeFactors(n){
  let nDivided = n
  let actualPrime = 2
  let counter
  let primeCount = 0
  let result = ""

  do { 
    while (nDivided % actualPrime == 0){
        nDivided = nDivided / actualPrime
        primeCount++
      }
    
    if (primeCount > 1){
      result = result + `(${actualPrime}**${primeCount})`
    }
    else if (primeCount == 1) {
      result = result + `(${actualPrime})`
    }
    primeCount = 0
    
    actualPrime++

    while(true){
      let l = Math.sqrt(actualPrime)
      counter = 0
      for(let i = 2; i <= l; i ++){
        if(actualPrime % i == 0)  counter++
      }
      if(counter == 0)
        break
      else{
        actualPrime++
        continue
      }
    }
    
    if(actualPrime == nDivided){
      result = result + `(${actualPrime})`
      break
    } 
  } while (true)

  return result
}

console.log(primeFactors(35791357))
