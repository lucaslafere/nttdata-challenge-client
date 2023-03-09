import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { FC, useState } from "react";
import ClickableButton from "../../components/Button";
import InputField from "../../components/Input";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import api from "../../services/api";
import { Movie, setMovie } from "../../slices/movies.slice";
import { setSearch } from "../../slices/search.slice";
import { RootState } from "../../store/store";
import "./style.scss";

export const SearchSection: FC = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const search = useAppSelector((state: RootState) => state.search.search);
  async function handleSearch(search: string) {
    setLoading(true);
    api
      .get(`/${search}`)
      .then((response) => {
        const updatedMovie: Movie = {
          title: response.data.title,
          plot: response.data.plot,
          poster: response.data.poster,
          actors: response.data.actors,
          rating: response.data.review,
        };
        dispatch(setMovie(updatedMovie));
        dispatch(setSearch(search));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error processing your request:" + error.message);
      });
  }
  function resetSearch() {
    dispatch(setSearch(""));
    dispatch(
      setMovie({
        title: "",
        plot: "",
        poster: "",
        actors: "",
        rating: 0,
      })
    );
  }
  return (
    <>
      <section className="top-container">
        <div className="title">
          <h1>Search a movie</h1>
        </div>
        <div className="description">
          Your favorite movies, here, at NTT Data.Movies
        </div>
        <div className="search-container">
          <div className="input-container">
            <InputField />
          </div>
          <div className="buttons-container">
            <ClickableButton
              disabled={loading}
              onClick={() => handleSearch(search)}
              icon="search"
            >
              Search
            </ClickableButton>
            <ClickableButton
              disabled={loading}
              onClick={() => resetSearch()}
              icon="reset"
            >
              Reset
            </ClickableButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchSection;
