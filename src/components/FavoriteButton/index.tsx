import { ToggleButton } from "@ui5/webcomponents-react";
import { FC, useState } from "react";

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
        style={{ width: "60%", height: "60px" }}
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
      style={{ width: "60%", height: "60px" }}
    >
      Favorite
    </ToggleButton>
  );
};

export default FavoriteButton;
