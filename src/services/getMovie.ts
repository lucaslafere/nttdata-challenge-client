import { useContext } from "react";
import MovieContext from "../contexts/movieContext";
import SearchContext from "../contexts/searchContext";
import api from "./api";

export function getMovie() {
  const { search } = useContext(SearchContext);
  const { setMovie } = useContext(MovieContext);
  api
    .get(`/${search}`)
    .then((response) => {
      console.log(response);
      setMovie({
        title: response.data.title,
        plot: response.data.plot,
        poster: response.data.poster,
        actors: response.data.actors,
        rating: response.data.review,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

export default getMovie;
