import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./slices/filmsSlice";
import genresSlice from "./slices/genresSlice";

const store = configureStore({
    reducer: {
        filmsData: filmsSlice,
        genresData: genresSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;