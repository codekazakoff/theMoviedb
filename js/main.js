// {var prevScrollpos = window.pageYOffset;
//    window.onscroll = function() {
//    var currentScrollPos = window.pageYOffset;
//    if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//    } else {
//     document.getElementById("navbar").style.top = "-70px";
//    }
//    prevScrollpos = currentScrollPos;
// }}

const apiKey = '8a6efddbf519aa74be6e68f9ecfd443f';
const search = 'https://api.themoviedb.org/3/search/movie?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&query=Mortal%20Kombat&page=1&include_adult=false'
const trending = 'https://api.themoviedb.org/3/trending/movie/day?api_key=8a6efddbf519aa74be6e68f9ecfd443f';
const reviews = 'https://api.themoviedb.org/3/review/726684?api_key=8a6efddbf519aa74be6e68f9ecfd443f';
const mutikSearch = 'https://api.themoviedb.org/3/search/multi?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&query=Soul&page=1&include_adult=false';
const serchPeople = 'https://api.themoviedb.org/3/search/person?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&query=Angelina%20Jolie&page=1&include_adult=false';
const kunfuPanda = 'https://api.themoviedb.org/3/search/tv?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1&query=Kung%20Fu%20Panda&include_adult=false';
const details = 'https://api.themoviedb.org/3/movie/804435?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US'
const topVideo = 'https://api.themoviedb.org/3/movie/top_rated?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const getUpcomming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const getPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const nowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const Latest = 'https://api.themoviedb.org/3/movie/latest?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US';
const video = 'http://api.themoviedb.org/3/movie/804435/videos?api_key=https://www.youtube.com/watch?v=O67fpWFoz3w';
const recommends = 'https://api.themoviedb.org/3/movie/804435/recommendations?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1'
const getreviews = 'https://api.themoviedb.org/3/movie/804435/reviews?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const similiar = 'https://api.themoviedb.org/3/movie/804435/similar?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const detData = 'https://api.themoviedb.org/3/movie/804435/release_dates?api_key=8a6efddbf519aa74be6e68f9ecfd443f';
const lists = 'https://api.themoviedb.org/3/movie/726684/lists?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const keywords = 'https://api.themoviedb.org/3/movie/804435/keywords?api_key=8a6efddbf519aa74be6e68f9ecfd443f';
const extrnalsIDS = 'https://api.themoviedb.org/3/movie/260905/external_ids?api_key=8a6efddbf519aa74be6e68f9ecfd443f';
const credits = 'https://api.themoviedb.org/3/movie/260905/credits?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US';
const changes = 'https://api.themoviedb.org/3/movie/804435/changes?api_key=8a6efddbf519aa74be6e68f9ecfd443f&page=1';
const alternativeTitles = 'https://api.themoviedb.org/3/movie/804435/alternative_titles?api_key=8a6efddbf519aa74be6e68f9ecfd443f';
const accountState = 'https://api.themoviedb.org/3/movie/804435/account_states?api_key=8a6efddbf519aa74be6e68f9ecfd443f';
const rated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';

fetch(nowPlaying)
.then(res => res.json())
.then(data => {
    const {results} = data;
    const indexOff = Math.ceil((Math.random() * Math.ceil(results.length) / results.length * 20)) - 1;
        document.querySelector('.back-imgg').innerHTML =`
                <div class="background-image inner_content" style = "background-image : url('https://image.tmdb.org/t/p/w500/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/${results[indexOff].backdrop_path}')">
                    <div class="wrapper container">
                        <div class="title">
                            <h2>Welcome</h2>
                            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                        </div>
                        <div class="search">
                            <form id="form" action="/search">
                                <input id="serch-input" type="search" class="search-input"  placeholder="Search for a movie, tv show, person......">
                                <input id="serch-btn" onclick="sendInputValue()" type="submit"  class="search-btn" value="Search">
                            </form>
                        </div>
                    </div>
                </div>
        `
        
})
.catch(err => console.log(err));



fetch(nowPlaying)
.then(res => res.json())
.then(data =>{
    const {results} = data;
    results.forEach((result) =>{
        document.querySelector('.actor-group').innerHTML+=`
                <div class="actor-card" onclick="next_page_details(${result.id})">
                    <div class="actor-box-mg">
                        <a href="./movie_click/index.html">
                            <img onmouseover="move_mouse('${result.backdrop_path}')" src="https://image.tmdb.org/t/p/w500${result.backdrop_path}" alt="Not found Img">
                        </a>
                        <i class="fas fa-play"></i>
                    </div>
                    <div class="d-flex">
                        <h3><a href="#">${result.title}</a></h3>
                        <p>${result.original_title}</p>
                    </div>
                </div> 
        `
    })
})
.catch(err => console.log(err));


function move_mouse(back_path){
    const imgId = document.getElementById('img_back_images');
    imgId.src = `https://image.tmdb.org/t/p/w500/t/p/w1920_and_h427_multi_faces/${back_path}`;
}




fetch(getPopular)
.then(res => res.json())
.then(popular =>{
const {results} = popular;
results.map((result) =>{
document.querySelector('.column-cards').innerHTML +=(`
                    <div class="card" onclick="next_page_details(${result.id})">
                    <a href="./movie_click/index.html"><img class="card_img" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt=""></a>
                    <div class="card_top_circle present">
                        <span>${result.vote_average * 10}%</span>
                    </div>
                    <h3><a href="./movie_click/index.html">${result.title}</a></h3>
                    <p>${result.release_date}</p>
                    <li class="dod_menu">
                        <ul class="card_menu" id="card_menu">
                            <li class="dod_item">
                                <i class="fas fa-bars"></i>
                                <a class="dod_link">Add to list</a>
                            </li>
                            <li class="dod_item">
                                <i class="fas fa-heart"></i>
                                <a class="dod_link">Favorite</a>
                            </li>
                            <li class="dod_item">
                                <i class="far fa-comment"></i>
                                <a class="dod_link">Watchlist</a>
                            </li>
                            <li class="dod_item">
                                <i class="fas fa-star"></i>
                                <a class="dod_link">Your rating</a>
                            </li>
                        </ul>
                        <img class="card_dod" onclick="btnHandler(event)"  src="./img/threedod.svg" alt="">
                    </li>
                </div>
`)})
})
.catch(err => console.log(err));




fetch(getUpcomming)
.then(res => res.json())
.then(popular =>{
    const {results} = popular;
    results.map((result) =>{
    document.querySelector('.column-cards-1').innerHTML +=(`
    <div class="card" onclick="next_page_details(${result.id})">
    <a href="./movie_click/index.html"><img class="card_img" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt=""></a>
    <div class="card_top_circle present">
        <span>${result.vote_average * 10}%</span>
    </div>
    <h3><a href="./movie_click/index.html">${result.title}</a></h3>
    <p>${result.release_date}</p>
        <li class="dod_menu">
            <ul class="card_menu" id="card_menu">
                <li class="dod_item">
                    <i class="fas fa-bars"></i>
                    <a class="dod_link">Add to list</a>
                </li>
                <li class="dod_item">
                    <i class="fas fa-heart"></i>
                    <a class="dod_link">Favorite</a>
                </li>
                <li class="dod_item">
                    <i class="far fa-comment"></i>
                    <a class="dod_link">Watchlist</a>
                </li>
                <li class="dod_item">
                    <i class="fas fa-star"></i>
                    <a class="dod_link">Your rating</a>
                </li>
            </ul>
            <img class="card_dod" onclick="btnHandler(event)"  src="./img/threedod.svg" alt="">
        </li>
    </div>
    `)
    })
})
.catch(err => console.log(err));


function btnHandler(event){
    event.target.parentElement.firstElementChild.classList.toggle("toggle");
}


fetch(recommends)
.then(res => res.json())
.then(popular =>{
    const {results} = popular;
    results.map((result,index) =>{
                document.querySelector('.column-cards-2').innerHTML +=(`
                <div class="card" onclick="next_page_details(${result.id})">
                <a href="./movie_click/index.html"><img class="card_img" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt=""></a>
                <div class="card_top_circle present">
                    <span>${Math.ceil(result.vote_average * 10)}%</span>
                </div>
                <h3><a href="./movie_click/index.html">${result.title}</a></h3>
                <p>${result.release_date}</p>
                <li class="dod_menu">
                    <ul class="card_menu" id="card_menu">
                        <li class="dod_item">
                            <i class="fas fa-bars"></i>
                            <a class="dod_link">Add to list</a>
                        </li>
                        <li class="dod_item">
                            <i class="fas fa-heart"></i>
                            <a class="dod_link">Favorite</a>
                        </li>
                        <li class="dod_item">
                            <i class="far fa-comment"></i>
                            <a class="dod_link">Watchlist</a>
                        </li>
                        <li class="dod_item">
                            <i class="fas fa-star"></i>
                            <a class="dod_link">Your rating</a>
                        </li>
                    </ul>
        <img class="card_dod" onclick="btnHandler(event)"  src="./img/threedod.svg" alt="">
    </li>
            </div>
    `)
    })
})
.catch(err => console.log(err));



function next_page_details(id){
    localStorage.setItem('id_movie', id);
}




function next_prev(elem, teg){
    var a = document.getElementsByTagName(teg);
    if(teg === 'h3'){
        for (i = 0; i < a.length; i++) {
            a[i].classList.remove('select');
        }
        elem.classList.add('select');
    }
   else{
        for (i = 0; i < a.length; i++) {
            a[i].classList.remove('selected');
        }
        elem.classList.add('selected');
   }
}
function sendInputValue(){
    let input = document.getElementById('serch-input').value;
    localStorage.setItem('input-search-value', input);
    input.value = '';
}


$(document).ready(()=>{
    $('.dws-progress-bar').circularProgress({
        color: '#25ffe4',
        line_width : 18,
        height : '350px',
        width : '350px',
        percent : 0,
        starting_position : 25
    }).circularProgress('animate',100,2000)
})

$(window).on('load', ()=>{
    var $preloader = $('#preloader');
    $preloader.delay(2800).fadeOut('slow');
})