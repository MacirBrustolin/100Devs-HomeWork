//Create a constructor with 4 properties and 3 methods

function Pizza(toppings, size, slices, crust){
    this.size = size
    this.slices = slices
    this.crust = crust
    this.toppings = toppings

    this.frisbee = function(){
        console.log('YEEEETTT')
    }

    this.burnMouth = function(){
        console.log('OUCH!!')
    }

    this.addToppings = function(toppings){
        this.toppings.push(toppings)
    }
}

let pizza = new Pizza('', 'Large', 16, 'thin')
