//Write your pseduo code first! 

//0 - Only on click

//1 - get the temperature

//2 - convert it

//3 - show it

document.querySelector('#yell').addEventListener('click', Convert)

function Convert() {
  const fName = document.querySelector('#temp').value

  let tempConvert = (fName * 9/5) + 32

  document.querySelector('#placeToYell').innerText = `${tempConvert}`
}
