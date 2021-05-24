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
const adi = "804435";
const details = 'https://api.themoviedb.org/3/movie/804435?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US'
const getUpcomming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';
const recommends = 'https://api.themoviedb.org/3/movie/804435/recommendations?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1'


fetch(details)
.then(res => res.json())
.then(data => {
  var topVideoId = data.id;
  document.querySelector('.details-back-img').innerHTML =
`
            <div class="bac-Img" >
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
                                    <a href="#">${data.genres[0].name},</a>
                                    <a href="#">${data.genres[1].name},</a>
                                    <a href="#">${data.genres[2].name}</a>
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
</div>`
  console.log(topVideoId);  
});
const popular = 'https://api.themoviedb.org/3/person/popular?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US&page=1';


const personImage = 'https://api.themoviedb.org/3/person/1468490/images?api_key=8a6efddbf519aa74be6e68f9ecfd443f';
const ii = 'https://api.themoviedb.org/3/person/1901875?api_key=8a6efddbf519aa74be6e68f9ecfd443f&language=en-US';
fetch(personImage)
.then( res => res.json())
.then(data =>{
  const {profiles} = data;
  // console.log(profiles);
  profiles.forEach(profile => {
    document.querySelector('.card-line').innerHTML += `  
    <div class="card-little">
      <div class="img-card">
          <img src="https://image.tmdb.org/t/p/w500${profile.file_path}" alt="">
      </div>
      <h4><a href="#">Olga Kurylenko</a></h4>
      <p>Klara</p>
    </div>      
`
  })
})

fetch(recommends)
.then(res => res.json())
.then(data => {
    const {results} = data;
    results.forEach(result => {
      console.log(result);
      document.querySelector('.card-tag-line').innerHTML += `
        <div class="card-little card-tag-lineer card-bottom">
          <div class="img___card">
              <img src="https://image.tmdb.org/t/p/w500${result.backdrop_path}" alt="">
          </div>
          <p> 
              <span>${result.title}</span>
              <span>${Math.floor(result.vote_average) * 10}%</span>
          </p>
        </div>
      `
    })
});

