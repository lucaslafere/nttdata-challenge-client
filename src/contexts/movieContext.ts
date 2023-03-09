/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

const MovieContext = createContext({
  movie: {
    title: "",
    plot: "",
    actors: "",
    poster: "",
    rating: 0,
  },
  setMovie: (movie: any) => {},
});

export default MovieContext;
