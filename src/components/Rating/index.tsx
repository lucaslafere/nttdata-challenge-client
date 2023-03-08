import { RatingIndicator } from "@ui5/webcomponents-react";
import { FC } from "react";
import "./style.scss";

interface iProps {
  rating: number;
  setRating: (rating: number) => void;
}

export const Rating: FC<iProps> = ({ rating }) => {
  return (
    <RatingIndicator
      value={rating}
      readonly={true}
    />
  );
};

export default Rating;
