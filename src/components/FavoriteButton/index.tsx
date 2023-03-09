import { ToggleButton } from "@ui5/webcomponents-react";
import { FC, useState } from "react";
import "./style.scss";

export const FavoriteButton: FC = () => {
  const [pressed, setPressed] = useState(false);
  // we'll use something like this to get the favorited state from session storage:
  // const [title, setTitle] = useLocalStorage(movie.title, false);
  // setTitle(true) // to set the value to true

  if (pressed) {
    return (
      <ToggleButton
        icon="favorite"
        iconEnd
        onClick={function ka() {
          setPressed(false);
        }}
        design="Default"
        className="toggle-button"
      >
        Favorited
      </ToggleButton>
    );
  }
  return (
    <ToggleButton
      icon="favorite"
      design="Negative"
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
