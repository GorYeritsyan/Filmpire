import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  FilmsInitStateType,
  FilmsResponseDataType,
  OneFilmDataType,
} from "../../types/types";
import { MoviesAPI } from "../../api/api";

// all films
export const fetchFilms = createAsyncThunk<FilmsResponseDataType, number, {}>(
  "fetchFilms",
  async (page, { dispatch }) => {
    const res = await MoviesAPI.getMovies(page);
    dispatch(getTotalPages({ total_pages: res.data.total_pages }));
    return res.data;
  }
);

// fetching one film
export const fetchOneFilm = createAsyncThunk<
  OneFilmDataType,
  string | undefined,
  {}
>("fetchOneFilm", async (id) => {
  const res = await MoviesAPI.getOneMovie(id);
  return res.data;
});

//fetching trailer

export const fetchTrailer = createAsyncThunk<
  void,
  { movieId?: string; iframe: any },
  {}
>("fetchTrailer", async ({ movieId, iframe }) => {
  const res = await MoviesAPI.getTrailer(movieId);
  res.data.results.forEach((el: any) => {
    if (el.name === "Official Trailer") {
      iframe.current.setAttribute(
        "src",
        `https://www.youtube.com/embed/${el.key}`
      );
    } else {
      iframe.current.setAttribute(
        "src",
        `https://www.youtube.com/embed/${el.key}`
      );
    }
  });
});

export const fetchSearchedFilms = createAsyncThunk<
  FilmsResponseDataType,
  string | undefined,
  {}
>("fetchSearchedFilms", async (text) => {
  const res = await MoviesAPI.searchFilms(text);
  return res.data;
});

const initialState: FilmsInitStateType = {
  films: [],
  isFetching: false,
  page: 1,
  totalPages: 1,
  oneFilm: undefined,
  activePage: 1,
  searchedFilms: [],
  inputValue: "",
};

const filmsSlice = createSlice({
  name: "filmsSlice",
  initialState,
  reducers: {
    getTotalPages(state, action) {
      state.totalPages = action.payload.total_pages;
    },
    changePage(state, action) {
      state.page = action.payload;
      state.activePage = action.payload;
    },
    changeInputValue(state, action) {
      state.inputValue = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.films = action.payload.results;
        state.isFetching = false;
      });

    builder
      .addCase(fetchOneFilm.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchOneFilm.fulfilled, (state, action) => {
        state.oneFilm = action.payload;
        state.isFetching = false;
      });

    builder.addCase(fetchSearchedFilms.fulfilled, (state, action) => {
      state.searchedFilms = action.payload.results;
    });
  },
});

export const { getTotalPages, changePage, changeInputValue } = filmsSlice.actions;

export default filmsSlice.reducer;
