// import {SEARCH_INPUT_VALUE,SEARCH_URL} from '../js/const.js'

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

const SEARCH_INPUT_VALUE = (localStorage.getItem("input-search-value"));
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&query=${SEARCH_INPUT_VALUE}&page=1&include_adult=false`;
let search_localstore = document.getElementById('search_localstore');

search_localstore.value = SEARCH_INPUT_VALUE;
const API_KEY = '8a6efddbf519aa74be6e68f9ecfd443f';
const tvShows = `https://api.themoviedb.org/3/search/tv?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1&include_adult=false`;

// fetch(tvShows)
// .then(res => res.json())
// .then(data => console.log(data)); 

const getSerachMoveiDb = async url => {
    try{
        const res = await fetch(url);
        const data = await res.json();
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
    }catch(err) {
      console.log(err);
    }
}
getSerachMoveiDb(SEARCH_URL);

function click_photo(id){
  localStorage.setItem('movie_id', id);
}


let valueInput = document.getElementById('search_localstore');
valueInput.addEventListener('change', updateValue);
function updateValue(e) {
  let sendValue = e.target.value;
  localStorage.setItem('input-search-value',sendValue);
  console.log(sendValue);
  // valueInput.value = '';
}



$(document).ready(()=>{
  $('.dws-progress-bar').circularProgress({
      color: '#f016e5',
      line_width : 18,
      height : '350px',
      width : '350px',
      percent : 0,
      starting_position : 25
  }).circularProgress('animate',100,5000);
})

$(window).on('load', ()=>{
  var $preloader = $('#preloader');
  $preloader.delay(4800).fadeOut('slow');
  
})