import { FC, useState } from "react";
import ClickableButton from "../../components/Button";
import InputField from "../../components/Input";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import api from "../../services/api";
import { Movie, setMovie } from "../../slices/movies.slice";
import { search, setSearch } from "../../slices/search.slice";
import { RootState } from "../../store/store";
import "./style.scss";

export const SearchSection: FC = () => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state: RootState) => state.movies.movie);
  async function handleSearch(search: string) {
    api
      .get(`/${search}`)
      .then((response) => {
        console.log(response);
        const updatedMovie: Movie = {
          title: response.data.title,
          plot: response.data.plot,
          poster: response.data.poster,
          actors: response.data.actors,
          rating: response.data.review,
        };
        dispatch(setMovie(updatedMovie));
        dispatch(setSearch(search));
      })
      .catch((error) => {
        console.log("Error processing your request:" + error.message);
      });
  }
  function resetSearch() {
    setSearch("");
    setMovie({
      title: "",
      plot: "",
      poster: "",
      actors: "",
      rating: 0,
    });
  }
  return (
    <>
      <section className="top-container">
        <div className="title">
          <h1>Busque um filme</h1>
        </div>
        <div className="description">
          Seus filmes preferidos estão aqui, na NTT Data.Movies
        </div>
        <div className="search-container">
          <div className="input-container">
            <InputField />
          </div>
          <div className="buttons-container">
            <ClickableButton onClick={() => handleSearch(search)}>
              Search
            </ClickableButton>
            <ClickableButton onClick={() => resetSearch()}>
              Reset
            </ClickableButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchSection;
