//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreeetFighter(nationality, name, health, speed, specialMove){
    this.name = name
    this.nationality = nationality
    this.health = health
    this.speed = speed
    this.specialMove = specialMove

    this.throw = function(){
        console.log("yeeet.")
    }
    this.taunt = function(){
        console.log(`you cant handle my ${specialMove}`)
    }
}