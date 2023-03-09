import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Movie {
  title: string;
  plot: string;
  actors: string;
  poster: string;
  rating: number;
}

interface MoviesState {
  movie: Movie;
}

const initialState: MoviesState = {
  movie: {
    title: "",
    plot: "",
    actors: "",
    poster: "",
    rating: 0,
  },
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<Movie>) => {
      state.movie = action.payload;
    },
  },
});

export const { setMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
