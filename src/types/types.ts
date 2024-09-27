export type FilmsInitStateType = {
  films: OneFilmDataType[];
  isFetching: boolean,
  page: number,
  totalPages: number,
  oneFilm?: OneFilmDataType,
  activePage: number,
  searchedFilms: OneFilmDataType[],
  inputValue: string,
  filmPortionNumber: number
};

export type FilmsResponseDataType = {
  page: number;
  results: OneFilmDataType[];
  total_pages: number;
  total_results: number;
};

export type OneFilmDataType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// Genre Types

export type OneGenreDataType = {
  id: number,
  name: string
}

export type GenresInitStateType = {
  genres: OneGenreDataType[],
  oneGenre: OneFilmDataType[],
  isFetching: boolean,
}