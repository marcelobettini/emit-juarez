fetch("https://api.chucknorris.io/jokes/random")
  .then(res => res.json())
  .then(joke => console.log(joke.value))
  .catch(err => console.error(err));