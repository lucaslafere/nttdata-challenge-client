import { FC, useState } from "react";
import ClickableButton from "../../components/Button";
import FavoriteButton from "../../components/FavoriteButton";
import InputField from "../../components/InputField";
import Rating from "../../components/Rating";
import "./style.scss";

export const Search: FC = () => {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <header className="header"></header>
      <footer className="footer"></footer>
    </>
  );
};
