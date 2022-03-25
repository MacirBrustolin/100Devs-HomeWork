//Create a mouse object that has four properties and three methods
let mouse = {}
mouse.color = 'red'
mouse.size = 'large'
mouse.m1 = 'left click'
mouse.m2 = 'right click'

mouse.leftClick = function(){return "m1"}
mouse.rightClick = function(){return "mouse is running"}
mouse.Sleep = function(){return "mouse is sleeping"}

console.log(mouse.color)
