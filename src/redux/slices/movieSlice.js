const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    movies:[],
    clickedMovie:{}
}

const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies : (state,action) => {
            state.movies = action.payload;
        },
        // setClickedMovies: (state,action) => {
        //     const clickedId = state.movies.findIndex((movie)=>movie.id === action.payload);
        //     state.clickedMovie = state.movies[clickedId];
        // }
    }
})

// ! Actions
export const {setMovies} = movieSlice.actions;
// export const {setClickedMovies} = movieSlice.actions;

// ! Selectors
export const selectMovies = (state) => state.movie.movies;
// export const selectClickedMovies = (state) => state.movie.clickedMovie;

export default movieSlice.reducer