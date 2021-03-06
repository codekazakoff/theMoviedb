import {DETAILS,RECOMMENDS,POPULAR} from '../../js/const.js';
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
const getFetch_details_one = async url => {
   try{
    const res = await fetch(url);
    const data = await res.json();
    document.querySelector('.details-back-img').innerHTML =`
        <div class="costum_bg">   
            <div class="bac-Img"  style="background-image : linear-gradient(to bottom right, rgba(7.84%, 9.41%, 7.84%, 1.00), rgba(7.84%, 9.41%, 7.84%, 0.84)),url(https://image.tmdb.org/t/p/w500/t/p/w1920_and_h800_multi_faces/${data.backdrop_path})">
                <div class="container CArd">
                    <div class="line-card">
                        <div class="Card-img">
                            <div class="card">
                                <div class="card-img">
                                    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="">
                                </div>
                                <div class="card-footer">
                                    <div class="flex-netfilx">
                                        <div class="image-netfilx">
                                            <img src="./img/n.jpg" alt="">
                                        </div>
                                        <div class="text-netfilx">
                                            <p>Now Streaming</p>
                                            <p>Watch Now</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-img">
                            <div class="first-line">
                                <h1><a href="#">${data.title}</a> (${data.release_date})</h1>
                                <div class="four-text-line">
                                    <span class="nr">NR</span> 
                                    <span class="nr-2">${data.release_date} (${data.production_countries[0].iso_3166_1})</span> 
                                    <li class="ww">
                                    <a href="#">${data.genres[0].name}</a>
                                    <a href="#">${data.genres.length === 2 ? data.genres[1].name : data.genres.length === 3 ? data.genres[1].name : "Dramma"},</a>
                                    <a href="#">${data.genres.length === 3 ? data.genres[2].name : data.genres.length === 2 ? data.genres[0].name : "Action" }</a>
                                    <li>1h 20m</li>
                                    </li> 
                                </div>
                            </div>
                            <div class="second-line">
                                <div class="box">
                                  <div class="circle">
                                    <p>${data.vote_average * 10 } <sup>%</sup> </p>
                                  </div>
                                 <div class="teTx">
                                    <p>User</p>
                                    <p>Score</p>    
                                 </div>
                                </div>
                                <div class="box-icon">
                                    <i class="fas fa-bars"></i>
                                </div>
                                <div class="box-icon">
                                    <i class="fas fa-heart"></i>
                                </div>
                                <div class="box-icon">
                                    <i class="fas fa-comment"></i>
                                </div>
                                <div class="box-icon">
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="box-play">
                                    <i class="fas fa-play"></i>
                                    Play Trailer
                                </div>
                            </div>
                            <div class="three-line">
                                <p class="tagline">${data.tagline}</p>
                                <h3>Overview</h3>
                                <p>${data.overview}</p>
                            </div>
                            <div class="four-line">
                                <div class="left">
                                    <a href="#">Julien Leclercq</a>
                                    <p>Director, Writer</p>
                                </div>
                                <div class="right">
                                    <a href="#">Matthieu Serveau</a>
                                    <p>Writer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>`
   }catch(err){
       console.log(err);
   }
}
const getFetch_Popular = async url => {
    try{
        const res = await fetch(url);
    const data = await res.json();
    const {results} = data;
    results.forEach((result,index) => {
    document.querySelector('.card-line').innerHTML += `  
    <div class="card-little">
      <div class="img-card">
          <img src="https://image.tmdb.org/t/p/w500${result.profile_path}" alt="">
      </div>
      <h4><a href="#">${result.name}</a></h4>
      <p>${result.known_for_department}</p>
    </div>      
    `
    })
    }catch(err) {console.log(err)}
}
const getFetch_Details_two = async url => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        document.querySelector('.card__scroller').innerHTML+= `
        <div class="shadow">
            <div class="card-line-1 scroller">
                <div class="card-little-1">
                    <div class="img-card-1">
                        <img src="https://image.tmdb.org/t/p/w500/t/p/w533_and_h300_face/${data.poster_path}" alt="">
                    </div>
                    <i class="fas fa-play"></i>
                </div>
                <div class="card-little-1">
                    <div class="img-card-2">
                        <img src="https://image.tmdb.org/t/p/w500/t/p/w533_and_h300_bestv2/${data.backdrop_path}" alt="">
                    </div>
                </div>
                <div class="card-little-1">
                    <div class="img-card-3">
                        <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}">
                    </div>
                </div>
            </div>
        </div>
        `
    }catch(err) {
        console.log(err);
    }
}
const getFetch_recommends = async url => {
   try{
        const res = await fetch(url);
        const data = await res.json();
        const {results} = data;
        results.map((result) => {
        document.querySelector('.card-tag-line').innerHTML += `
            <div class="card-little card-tag-lineer card-bottom" onclick="localStorage.setItem('id_movie', ${result.id})">
            <div class="img___card">
                <a href="./index.html"> 
                    <img src="https://image.tmdb.org/t/p/w500${result.backdrop_path}" alt="">
                </a>
            </div>
            <p> 
                <span>${result.title}</span>
                <span>${Math.floor(result.vote_average) * 10}%</span>
            </p>
            </div>
        `
        })
   }catch(err) {
       console.log(err);
   }
}
getFetch_details_one(DETAILS);
getFetch_Popular(POPULAR)
getFetch_Details_two(DETAILS);
getFetch_recommends(RECOMMENDS);

$(document).ready(()=>{
    $('.dws-progress-bar').circularProgress({
        color: '#ff5252',
        line_width : 18,
        height : '350px',
        width : '350px',
        percent : 0,
        starting_position : 25
    }).circularProgress('animate',100,1500)
})
$(window).on('load', ()=>{
    var $preloader = $('#preloader');
    $preloader.delay(1500).fadeOut('slow');
})