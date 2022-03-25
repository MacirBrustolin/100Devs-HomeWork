//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighterChar(name, nationality, age, health){
    this.name = name
    this.nationality = nationality
    this.age = age
    this.health = health
    this.attack = function(){
        console.log('attack')
    }
    this.defence = function(){
        console.log('defend')
    }
    this.special = function(){
        console.log('special attack')
    }
}

let ryu = new StreetFighterChar('Ryu', 'Japan', 35, 100)