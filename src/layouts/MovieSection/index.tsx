import { FC, useState } from "react";
import FavoriteButton from "../../components/FavoriteButton";
import Rating from "../../components/Rating";

export const MovieSection: FC = () => {
  const [rating, setRating] = useState(3);
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="main-container">
      <div className="movie-details-container">
        <div className="movie-title">Movie Title</div>
        <div className="movie-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        </div>
        <div className="movie-rating">
          <Rating
            rating={rating}
            setRating={setRating}
          />
        </div>
        <div className="movie-favorite">
          <FavoriteButton />
        </div>
        <div className="movie-poster"></div>
      </div>
    </div>
  );
};

export default MovieSection;
