import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { ToggleButton } from "@ui5/webcomponents-react";
import { FC, useState } from "react";
import "./style.scss";

export const FavoriteButton: FC = () => {
  const [pressed, setPressed] = useState(false);
  // we'll use something like this to get the favorited state from session storage:
  // const [favorite, setFavorite] = useSessionStorage(movie.title, false);
  // setFavorite(true) // to set the value to true

  if (pressed) {
    return (
      <ToggleButton
        icon="heart"
        iconEnd
        onClick={function ka() {
          setPressed(false);
        }}
        design="Negative"
        className="toggle-button"
      >
        Favorited!
      </ToggleButton>
    );
  }
  return (
    <ToggleButton
      icon="heart"
      design="Default"
      iconEnd
      onClick={function ka() {
        setPressed(true);
      }}
      className="toggle-button"
    >
      Favorite
    </ToggleButton>
  );
};

export default FavoriteButton;
