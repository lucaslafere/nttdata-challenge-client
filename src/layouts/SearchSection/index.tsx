import { FC } from "react";
import ClickableButton from "../../components/Button";
import InputField from "../../components/Input";
import "./style.scss";

export const SearchSection: FC = () => {
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
            <ClickableButton>Search</ClickableButton>
            <ClickableButton>Reset</ClickableButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchSection;
