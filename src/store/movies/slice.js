import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice ({
    name: "movie",
    initialState: {
        data: []
    },
    reducer: {
        setMovies: (state, action) => {
            state.data = [...action.payload];
        },
    },
});

export default movieSlice.reducer;