//Create a pizza object that has four properties and three methods
let pizza = {}

pizza.size = 'large'
pizza.slices = 16
pizza.sauce = 'heavy'
pizza.toppings = []

pizza.orderFromDominos = function(){
    console.log('Calling Dominos')
}

pizza.addTopping = function(Topping){
    pizza.toppings.push(Topping)
}

pizza.removeTopping = function(Topping){
    pizza.toppings.shift()
}