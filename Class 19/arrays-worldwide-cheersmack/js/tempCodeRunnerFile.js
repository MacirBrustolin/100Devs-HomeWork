function primeFactors(n){
  let nDivided = n
  let actualPrime = 2
  let actualPrime2
  let isPrime = true
  let primeCount = 0
  let result = ""

  do { 

    console.log(actualPrime)
    console.log(nDivided)
    console.log("\n")

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
    actualPrime2 = actualPrime
    isPrime = true

    for (let i = actualPrime2+1; i < 2 * actualPrime2; ++i)
    {
      for (let j = 2; j <= i; j++){
        if (i % j === 0 && j == i){
          break
        } 
        else if (i % j === 0){
          isPrime = false
          break
        }
      }
      if (isPrime){
        actualPrime = i
        break
      }
    }
    
    if(actualPrime == nDivided) break
    if(actualPrime > 30) break
  } while (true)

  return result