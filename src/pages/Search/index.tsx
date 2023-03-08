import { FC, useState } from "react";
import ClickableButton from "../../components/Button";
import FavoriteButton from "../../components/FavoriteButton";
import InputField from "../../components/Input";
import Rating from "../../components/Rating";
import "./style.scss";

export const Search: FC = () => {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <header className="header"></header>
      <section className="top-container">
        <div className="search-container">
          <InputField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ClickableButton>Search</ClickableButton>
          <ClickableButton>Reset</ClickableButton>
        </div>
      </section>
      <footer className="footer"></footer>
    </>
  );
};
