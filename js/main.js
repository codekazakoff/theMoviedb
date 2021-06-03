
{var prevScrollpos = window.pageYOffset;
   window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "64px";
   } else {
    document.getElementById("navbar").style.top = "64px";
   }
   prevScrollpos = currentScrollPos;
}}

const apiKey = '8a6efddbf519aa74be6e68f9ecfd443f';
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
const getUpcomming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
const getPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
const recommends = `https://api.themoviedb.org/3/movie/804435/recommendations?api_key=${apiKey}&language=en-US&page=1`;

const getFetch_nowPlaying_one = async url => {
    try{
        const res = await fetch(url);
        const data = await res.json();
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
    }
    catch(err){
        console.log(err)
    }
}
const getFech_nowPLaying_two = async url => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        const {results} = data;
        results.forEach((result) =>{
            document.querySelector('.actor-group').innerHTML+=`
                    <div class="actor-card" onclick="next_page_details(${result.id})">
                        <div class="actor-box-mg">
                            <a href="../info/index.html">
                                <img onmousemove="move_mouse('${result.backdrop_path}')" src="https://image.tmdb.org/t/p/w500${result.backdrop_path}" alt="Not found Img">
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
    }catch(err) {console.log(err)}
}
const getFetch_Popular = async url => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        const {results} = data;
        results.map((result) =>{
            document.querySelector('.column-cards').innerHTML +=(`
            <div class="card" onclick="next_page_details(${result.id})">
            <a href="../info/index.html"><img class="card_img" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt=""></a>
            <div class="card_top_circle present">
                <span>${Math.ceil(result.vote_average * 10)}%</span>
            </div>
            <h3><a href="../info/index.html">${result.title}</a></h3>
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
    }catch(err) {console.log(err)}
}
const getFetch_getUpcomming = async url => {
    try{
        const res =  await fetch(url);
        const data = await res.json();
        const {results} = data;
        results.map((result) =>{
            document.querySelector('.column-cards-1').innerHTML +=(`
            <div class="card" onclick="next_page_details(${result.id})">
            <a href="../info/index.html"><img class="card_img" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt=""></a>
            <div class="card_top_circle present">
                <span>${result.vote_average * 10}%</span>
            </div>
            <h3><a href="../info/index.html">${result.title}</a></h3>
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
    }catch(err){
        console.log(err);
    }
}
const getFetch_recommends = async url => {
   try{
        const res = await fetch(url);
        const data = await res.json();
        const {results} = data;
        results.map((result,index) =>{
            document.querySelector('.column-cards-2').innerHTML +=(`
                    <div class="card" onclick="next_page_details(${result.id})">
                    <a href="../info/index.html">
                    <img class="card_img" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt=""></a>
                    <div class="card_top_circle present">
                        <span>${Math.ceil(result.vote_average * 10)}%</span>
                    </div>
                    <h3><a href="../info/index.html">${result.title}</a></h3>
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
   }catch (err) { 
       console.log(err);
   }
}


getFetch_nowPlaying_one(nowPlaying);
getFech_nowPLaying_two(nowPlaying);
getFetch_Popular(getPopular);
getFetch_getUpcomming(getUpcomming);
getFetch_recommends(recommends);


const move_mouse = (back_path) => {
    const imgId = document.getElementById('img_back_images');
    imgId.src = `https://image.tmdb.org/t/p/w500/t/p/w1920_and_h427_multi_faces/${back_path}`;
}
const next_page_details = (id) => {
    localStorage.setItem('id_movie', id);
}
const btnHandler = (event) => {
    event.target.parentElement.firstElementChild.classList.toggle("toggle");
}
const next_prev = (elem, teg,type) => {
    console.log(type)
    var a = document.getElementsByTagName(teg);
    if(teg === 'p'){
            for (i = 0; i < a.length; i++) {
                a[i].classList.remove('selected');
            }
            elem.classList.add('selected');

            if(type === 'onTv'){
                document.querySelector('.column-cards').innerHTML = null;
                getFetch_Popular(recommends);
            }
            if(type === 'forRent'){
                document.querySelector('.column-cards').innerHTML = null;
                getFetch_Popular(topRated);
            }
            if(type === 'inTheatres'){
                document.querySelector('.column-cards').innerHTML = null;
                getFetch_Popular(getUpcomming);
            }
            if(type === 'stream'){
                document.querySelector('.column-cards').innerHTML = null;
                getFetch_Popular(getPopular);
            }
    }
    else if(teg === 'h4'){
        for (i = 0; i < a.length; i++) {
            a[i].classList.remove('selected');
        }
        elem.classList.add('selected');

        if(type === 'movies'){
            document.querySelector('.column-cards-1').innerHTML = null;
            getFetch_getUpcomming(getUpcomming);
        }
        if(type === 'tv'){
            document.querySelector('.column-cards-1').innerHTML = null;
            getFetch_getUpcomming(topRated);
        }
    }
    else if(teg === 'span'){
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected');
    }
    elem.classList.add('selected');

    if(type === 'today'){
        document.querySelector('.column-cards-2').innerHTML = null;
        getFetch_recommends(recommends);
    }
    if(type === 'thisWeek'){
        document.querySelector('.column-cards-2').innerHTML = null;
        getFetch_recommends(topRated);
    }
    }
    //  else{
    //     for (i = 0; i < a.length; i++) {
    //         a[i].classList.remove('select');
    //     }
    //     elem.classList.add('select');
    //     if(type === 'on_tv'){
    //         document.querySelector('.actor-group').innerHTML = null ?? [];
    //         getFech_nowPLaying_two(recommends);
    //     }
    //     if(type === 'for_rent'){
    //         document.querySelector('.actor-group').innerHTML = null ?? [];
    //         getFech_nowPLaying_two(topRated);
    //     }
    //     if(type === 'in_theatre'){
    //         document.querySelector('.actor-group').innerHTML = null ?? [];
    //         getFech_nowPLaying_two(getUpcomming);
    //     }
    //     if(type === 'streaming'){
    //         document.querySelector('.actor-group').innerHTML = [];
    //         getFech_nowPLaying_two(nowPlaying);
    //     }
    // }
}
const sendInputValue = () => {
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
    }).circularProgress('animate',100,2000);
    // document.querySelector('body').classList.add('overflow');
})

$(window).on('load', ()=>{
    var $preloader = $('#preloader');
    $preloader.delay(2800).fadeOut('slow');
    
})