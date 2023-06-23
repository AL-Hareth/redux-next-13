import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addQuote: (state, action) => {
            state.push(action.payload);
        },
        removeQuote: (state, action) => {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
});

export const { removeQuote, addQuote } = favoritesSlice.actions;

export default favoritesSlice.reducer;
