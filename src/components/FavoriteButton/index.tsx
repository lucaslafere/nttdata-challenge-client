import { ToggleButton } from "@ui5/webcomponents-react";
import { FC } from "react";
import "./style.scss";

interface iProps {
  pressed: boolean;
}

export const FavoriteButton: FC<iProps> = ({ pressed }) => {
  if (pressed) {
    return (
      <ToggleButton
        icon="add"
        iconEnd={true}
        onClick={function ka() {}}
        pressed={pressed}
        design="Negative"
        style={{ width: "100%" }}
      >
        Favorite
      </ToggleButton>
    );
  }
  return (
    <ToggleButton
      icon="add"
      iconEnd={true}
      onClick={function ka() {}}
      pressed={pressed}
      style={{ width: "100%" }}
    >
      Favorite
    </ToggleButton>
  );
};

export default FavoriteButton;
