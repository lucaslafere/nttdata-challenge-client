import { FC, useContext } from "react";
import ClickableButton from "../../components/Button";
import InputField from "../../components/Input";
import SearchContext from "../../contexts/searchContext";
import "./style.scss";

export const SearchSection: FC = () => {
  const getMovie = () => {
    console.log("getMovie");
  };

  const { setSearch } = useContext(SearchContext);
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
            <ClickableButton onClick={() => getMovie()}>Search</ClickableButton>
            <ClickableButton onClick={() => setSearch("")}>
              Reset
            </ClickableButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchSection;
