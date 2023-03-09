import { FC, useContext } from "react";
import FavoriteButton from "../../components/FavoriteButton";
import Rating from "../../components/Rating";
import MovieContext from "../../contexts/movieContext";
import "./style.scss";

export const MovieSection: FC = () => {
  const { title, plot, poster, actors, rating } =
    useContext(MovieContext).movie;

  return (
    <div className="main-container">
      <div className="movie-details-container">
        <div className="movie-title">
          <h2>{title ? title : "No Title available"}</h2>
        </div>
        <div className="movie-description">
          {plot ? plot : "No plot available"}
        </div>
        <div className="movie-actor">
          <h3>Actors: </h3>
          <p> {actors ? actors : "No actors listed"} </p>
        </div>
        <div className="movie-rating">
          <h3>Review</h3>
          <Rating rating={rating} />
        </div>
        <div className="movie-favorite">
          <FavoriteButton />
        </div>
      </div>
      <div className="movie-poster">
        {poster ? poster : "No image available"}
      </div>
    </div>
  );
};

export default MovieSection;
