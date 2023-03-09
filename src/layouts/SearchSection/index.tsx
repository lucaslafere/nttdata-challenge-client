import { FC, useContext } from "react";
import ClickableButton from "../../components/Button";
import InputField from "../../components/Input";
import MovieContext from "../../contexts/movieContext";
import SearchContext from "../../contexts/searchContext";
import api from "../../services/api";
import "./style.scss";

export const SearchSection: FC = () => {
  const { setSearch, search } = useContext(SearchContext);
  const { setMovie } = useContext(MovieContext);
  function getMovie(search: string) {
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
            <ClickableButton onClick={() => getMovie(search)}>
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
