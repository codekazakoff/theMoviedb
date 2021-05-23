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
const apiKey = '8a6efddbf519aa74be6e68f9ecfd443f';
const search = 'https://api.themoviedb.org/3/search/movie?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&query=Mortal%20Kombat&page=1&include_adult=false'
const trending = 'https://api.themoviedb.org/3/trending/movie/day?api_key=8a6efddbf519aa74be6e68f9ecfd443f';
const reviews = 'https://api.themoviedb.org/3/review/726684?api_key=8a6efddbf519aa74be6e68f9ecfd443f';
const mutikSearch = 'https://api.themoviedb.org/3/search/multi?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&query=Soul&page=1&include_adult=false';
const serchPeople = 'https://api.themoviedb.org/3/search/person?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&query=Angelina%20Jolie&page=1&include_adult=false';
const kunfuPanda = 'https://api.themoviedb.org/3/search/tv?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1&query=Kung%20Fu%20Panda&include_adult=false';
const details = 'https://api.themoviedb.org/3/movie/726684?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US'
const topVideo = 'https://api.themoviedb.org/3/movie/top_rated?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const getUpcomming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const getPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const nowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const Latest = 'https://api.themoviedb.org/3/movie/latest?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US';
const video = 'http://api.themoviedb.org/3/movie/550/videos?api_key=https://www.youtube.com/watch?v=O67fpWFoz3w';
const recommends = 'https://api.themoviedb.org/3/movie/804435/recommendations?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const similiar = 'https://api.themoviedb.org/3/movie/804435/similar?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const releaseData = 'https://api.themoviedb.org/3/movie/804435/release_dates?api_key=8a6efddbf519aa74be6e68f9ecfd443f';
const reviews = 'https://api.themoviedb.org/3/movie/804435/reviews?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';





// console.log(search);

fetch(recommends)
.then(res => res.json())
.then(data =>{
    const {results} = data;
    // results.forEach((result) =>{
    //     // console.log(`https://image.tmdb.org/t/p/w500${result.backdrop_path}`)

    //     document.querySelector('.actor-group').innerHTML+=`
    //             <div class="actor-card">
    //                 <div class="actor-box-mg">
    //                     <img src="https://image.tmdb.org/t/p/w500${result.backdrop_path}" alt="Not found Img">
    //                     <i class="fas fa-play"></i>
    //                 </div>
    //                 <h3><a href="#">${result.title}</a></h3>
    //                 <p>Made in Chinatown - Trailer</p>
    //             </div>
    //     `
    // })
    // console.log(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
    console.log(results)
})
.catch(err => console.log(err));
// fetch(trending)
// .then(res => res.json())
// .then(data =>{
//     const {results} = data;
//     results.forEach((result) =>{
//         console.log(`https://image.tmdb.org/t/p/w500${result.poster_path}`)
//     })
//     // console.log(results);
// })
// .catch(err => console.log(err));



fetch(getPopular)
.then(res => res.json())
.then(popular =>{
    const {results} = popular;
    results.map((result) =>{
    //   console.log(result)
        document.querySelector('.column-cards').innerHTML +=(`
        <div class="card">
          <img class="card_img" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="">
          <div class="card_top_circle present">
              <span>${result.vote_average * 10}%</span>
          </div>
          <h3><a href="#">${result.title}</a></h3>
          <p>${result.release_date}</p>
          <li class="dod_menu">
              <span><img class="card_dod" id="dod" src="./img/threedod.svg" alt=""></span>
              <ul class="card_menu">
                  <li class="dod_first">
                      <span>Want to rate or add this item to a list?</span>
                  </li>
                  <li class="dod_hover">
                      <a href="#">Login <span>&#10095;</span></a>
                 </li>
                  <li>
                      <span>Not a member?</span>
                  </li>
                  <li class="dod_hover">
                      <a href="#">Sign up and join the community <span>&#10095;</span></a>
                  </li>
              </ul>
          </li>
    </div>
    `)
    document.querySelector('.column-cards-1').innerHTML +=(`
        <div class="card">
          <img class="card_img" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="">
          <div class="card_top_circle present">
              <span>${result.vote_average * 10}%</span>
          </div>
          <h3><a href="#">${result.title}</a></h3>
          <p>${result.release_date}</p>
          <li class="dod_menu">
              <span><img class="card_dod" id="dod" src="./img/threedod.svg" alt=""></span>
              <ul class="card_menu">
                  <li class="dod_first">
                      <span>Want to rate or add this item to a list?</span>
                  </li>
                  <li class="dod_hover">
                      <a href="#">Login <span>&#10095;</span></a>
                 </li>
                  <li>
                      <span>Not a member?</span>
                  </li>
                  <li class="dod_hover">
                      <a href="#">Sign up and join the community <span>&#10095;</span></a>
                  </li>
              </ul>
          </li>
    </div>
    
   `)
    })
})
.catch(err => console.log(err));
