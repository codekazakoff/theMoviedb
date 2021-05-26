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

let serach_input_value = (localStorage.getItem("input-search-value"));


let search_localstore = document.getElementById('search_localstore');
search_localstore.value = serach_input_value;

const serchUrl = `https://api.themoviedb.org/3/search/movie?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&query=${serach_input_value}&page=1&include_adult=false`;

fetch(serchUrl)
.then(res => res.json())
.then(data => {
  const {results} = data;
  results.forEach(result => {
    document.querySelector('.right-section').innerHTML += `
    <div class="card-long">
      <div class="card-img">
          <a href="../movie_click/index.html">
            <img onclick="click_photo(${result.id})" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="Chiqmasa Mandanmas">
          </a>
      </div>
      <div class="card-texT">
          <h3>${result.title}</h3>
          <p class="data">${result.release_date}</p>
          <p class="lorem-text">${result.overview}</p>
      </div>
    </div>
`
  })
});

function click_photo(id){
  localStorage.setItem('movie_id', id);
}
