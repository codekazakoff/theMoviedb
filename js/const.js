export const API_KEY = '8a6efddbf519aa74be6e68f9ecfd443f';
export const ONE_MOVEI_ID = JSON.parse(localStorage.getItem("id_movie"));
export const DETAILS = `https://api.themoviedb.org/3/movie/${ONE_MOVEI_ID}?api_key=${API_KEY}&language=en-US`;
export const RECOMMENDS = `https://api.themoviedb.org/3/movie/${ONE_MOVEI_ID}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
export const POPULAR =  `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`; 
export const NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
export const GET_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const GET_UP_COMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

