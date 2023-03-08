import { RatingIndicator } from "@ui5/webcomponents-react";
import { FC } from "react";
import "./style.scss";

interface iProps {
  value: number;
}

export const Rating: FC<iProps> = ({ value }) => {
  return (
    <RatingIndicator
      value={value}
      readonly={true}
    />
  );
};

export default Rating;
