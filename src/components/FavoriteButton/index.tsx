import { ToggleButton } from "@ui5/webcomponents-react";
import { FC, useState } from "react";
import "./style.scss";

export const FavoriteButton: FC = ({}) => {
  const [pressed, setPressed] = useState(false);

  if (pressed) {
    return (
      <ToggleButton
        icon="favorite"
        iconEnd
        onClick={function ka() {
          setPressed(false);
        }}
        design="Default"
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
    >
      Favorite
    </ToggleButton>
  );
};

export default FavoriteButton;
