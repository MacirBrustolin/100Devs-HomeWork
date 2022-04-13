//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixShow{
    constructor(showTitle,showGenre,showLength,showRating){
      this.title = showTitle
      this.genre = showGenre
      this.length = showLength
      this.rating = showRating
    }
    start(){
      alert('Playing...')
    }
    pause(){
      alert('Stopped...')
    }
    userRating(userRatingShow){
        this.rating += (this.rating + userRatingShow) / 2
    }
  }
  
  let dark = new MakeNetflixShow('Dark','Mistery','40 min per episode', 10)
  
