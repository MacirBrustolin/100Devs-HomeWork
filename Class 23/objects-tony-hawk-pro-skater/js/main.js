//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawnCharacter(Name, Style, Cap, Special){
    this.Name = Name
    this.Style = Style
    this.Cap = Cap
    this.Special = Special

    this.Trick = function(trick){
        console.log(`do a ${trick}`)
    }

    this.Special = function(){
        console.log(`he really did ${this.Special}??? insaaaaneee`)
    }

    this.Slide = function(){
        console.log('sliiiiiiiiiiiiiddddeeeee')
    }
}