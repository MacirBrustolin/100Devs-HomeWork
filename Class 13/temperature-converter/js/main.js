//Write your pseduo code first! 
//place a value in celcius in an input, click a button that will call a function that will convert the value to farenheit and then pass the value result to the DOM. 

document.querySelector('#convert').addEventListener('click', convert)

function convert() {

    //get the value from the input
    const tempCelcius = document.querySelector('#tempCelcius').value
  
    //Convert from celcius to farenheight
    let tempFarenheight = (tempCelcius * (9/5)) + 32

    //show in the dom
    document.querySelector('#placeToSee').innerText = `${tempFarenheight} F`
  }