//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', StopSnacks)

function StopSnacks(){
    document.querySelector('#stops').innerText = ""
    let numberSnacks = Number(document.querySelector('input').value)

    for (let i = 0; i < numberSnacks; i++){
        document.querySelector('#stops').innerText += " Stop!"
    }
}
