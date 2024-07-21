import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FilmsResponseDataType, GenresInitStateType } from "../../types/types";
import { MoviesAPI } from "../../api/api";

export const fetchGenresList = createAsyncThunk<GenresInitStateType, void, {}>(
  "fetchGenresList",
  async () => {
    const res = await MoviesAPI.getGenresTitle();
    return res.data;
  }
);

export const fetchOneGenre = createAsyncThunk<
  FilmsResponseDataType,
  { genreId?: string; page: number },
  {}
>("fetchOneGenre", async ({ genreId, page }) => {
  const res = await MoviesAPI.getOneGenre(genreId, page);
  return res.data;
});

const initialState: GenresInitStateType = {
  genres: [],
  oneGenre: [],
  isFetching: false,
};

const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenresList.fulfilled, (state, action) => {
      state.genres = action.payload.genres;
    });

    builder
      .addCase(fetchOneGenre.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchOneGenre.fulfilled, (state, action) => {
        state.oneGenre = action.payload.results;
        state.isFetching = false;
      });
  },
});

export default genresSlice.reducer;
