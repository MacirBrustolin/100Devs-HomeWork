//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)
const container = document.getElementById("ingredients")
let ingredients = []
let inStr = ''

function getDrink(){
    const inputValue = document.querySelector('input').value
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue.split(' ').join('%')}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions

            for(let i = 1; i <= 15; i++){
                if (data.drinks[0][`strIngredient${i}`] != null){
                    ingredients.push(data.drinks[0][`strIngredient${i}`])
                    let li = document.createElement("li");
                    let node = document.createTextNode(data.drinks[0][`strIngredient${i}`]);
                    li.appendChild(node);
                    container.appendChild(li);
                }
                    

                
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

