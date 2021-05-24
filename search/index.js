{
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("navbar").style.top = "64px";
  document.querySelector('.input-line').style.top = "-2px";
} else {
  document.getElementById("navbar").style.top = "-70px";
  document.querySelector('.input-line').style.top = "-66px"
}
prevScrollpos = currentScrollPos;
}
}

const serchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&query=Mortal%20Kombat&page=1&include_adult=false';


fetch(serchUrl)
.then(res => res.json())
.then(data => {
  const {results} = data;
  results.forEach(result => {
    document.querySelector('.right-section').innerHTML += `
    <div class="card-long">
      <div class="card-img">
          <img src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="Chiqmasa Mandanmas">
      </div>
      <div class="card-texT">
          <h3>${result.title}</h3>
          <p class="data">${result.release_date}</p>
          <p class="lorem-text">${result.overview}</p>
      </div>
    </div>
`
  })
  console.log(results);

});