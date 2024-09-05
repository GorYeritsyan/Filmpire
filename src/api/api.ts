import axios from "axios";


const apiKey = import.meta.env.VITE_API_KEY;
const token = import.meta.env.VITE_BEAR_TOKEN;

export const imgUrl = "https://image.tmdb.org/t/p";



const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const MoviesAPI = {
  //Movies
  getMovies(page: number = 1) {
    return instance.get(
      `/discover/movie?api_key=${apiKey}&language=en-US&page=${page}`
    );
  },

  getOneMovie(id?: string) {
    return instance.get(`/movie/${id}?api_key${apiKey}&language=en-US`);
  },

  getTrailer(movieId?: string) {
    return instance.get(
      `/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
    );
  },

  searchFilms(text?: string) {
    return instance.get(`/search/movie?api_key${apiKey}&query=${text}`);
  },
  //genres
  getGenresTitle() {
    return instance.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`);
  },

  getOneGenre(genreId?: string, page = 1) {
    return instance.get(
      `/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${page}`
    );
  },
};

// https ----------

// getGenres => /genre/movie/list?api_key=${apiKey}&language=en-US
// MoviePage => discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}
// GETonemovie => /movie/${id}?api_key=${apiKey}&language=en-US
// getSerch => search/movie?api_key=${apiKey}&query=${text}`
// getGenreMovie => /discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${1}

//------------

//get Trailer => /movie/${movieId}/videos?language=en-US

// attribute - https://www.youtube.com/embed/${elem.key}
