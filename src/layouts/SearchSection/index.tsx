import { FC, useState } from "react";
import ClickableButton from "../../components/Button";
import InputField from "../../components/Input";
import "./style.scss";

export const SearchSection: FC = () => {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <header className="header">NTT Data.Movies</header>
      <section className="top-container">
        <div className="title">Busque um filme</div>
        <div className="description">
          Seus filmes preferidos estão aqui, na NTT Data.Movies
        </div>
        <div className="search-container">
          <div className="input-container">
            <InputField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="buttons-container">
            <ClickableButton>Search</ClickableButton>
            <ClickableButton>Reset</ClickableButton>
          </div>
        </div>
      </section>
      <footer className="footer"></footer>
    </>
  );
};

export default SearchSection;
