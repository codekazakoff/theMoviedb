fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US')
.then(res => {
  res.json()
}).then( movies => {
  console.log(movies);
}).catch(err =>
  console.log(err))