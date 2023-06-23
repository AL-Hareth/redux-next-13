import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./quotesSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
    reducer: {
        quotes: quotesReducer,
        favorites: favoritesReducer
    }
});
