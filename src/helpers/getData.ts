
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTcwYjI5OWNhMGY4MTkxYjBhM2MzMTQyZWFlZDVmZCIsInN1YiI6IjVkZGVkY2RiNGY1ODAxMDAxNmZiNmQwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TnHQFx37NmxPdFrpG_R4Zuat-ySby6psK5UVFJiHGOI'
  }
};

export const URL_IMAGE: string = 'https://image.tmdb.org/t/p/w500';

class GetData {

  constructor() {
  }

  // Now Playing
  async now_playing() {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1', options);
    const data = await response.json();
    return data.results;
  }

  // Details
  async details(id: number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`, options);
    const data = await response.json();
    return data;
  }

  // Credits
  async credits(id: number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=es-MX`, options);
    const data = await response.json();
    return data;
  }

  // Videos
  async videos(id: number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-MX`, options);
    const data = await response.json();
    return data;
  }

  // Reviews
  async reviews(id: number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=es-MX&page=1`, options);
    const data = await response.json();
    return data;
  }

  // Images
  async images(id: number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/images`, options);
    const data = await response.json();
    return data;
  }

}

export const getData = new GetData();

// //  Now Playing
// fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// //  Details
//   fetch('https://api.themoviedb.org/3/movie/movie_id?language=es-MX', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

//  // Credits

//     fetch('https://api.themoviedb.org/3/movie/movie_id/credits?language=es-MX', options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));

// // Videos

// fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=es-MX', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// // Reviews

// fetch('https://api.themoviedb.org/3/movie/movie_id/reviews?language=es-MX&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// // Images

// fetch('https://api.themoviedb.org/3/movie/movie_id/images', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));