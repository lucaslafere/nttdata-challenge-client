/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

const MovieContext = createContext({
  movie: {},
  setMovie: (movie: any) => {},
});

export default MovieContext;
