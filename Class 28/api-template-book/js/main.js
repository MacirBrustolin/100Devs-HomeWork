//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').innerText = localstorage.getItem('books')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (!localstorage.getItem('books')) {
          localstorage.setItem('books', data.title)
        }else{
          let books = localstorage.getItem('books') + "; " + data.title
          localStorage.setItem('books', books)
        }
        document.querySelector('h2').innerText = localstorage.getItem('books')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

