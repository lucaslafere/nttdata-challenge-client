import { FC } from "react";
import FavoriteButton from "../../components/FavoriteButton";
import Rating from "../../components/Rating";
import { useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../store/store";
import "./style.scss";

export const MovieSection: FC = () => {
  const { title, plot, poster, actors, rating } = useAppSelector(
    (state: RootState) => state.movies.movie
  );

  return (
    <div className="main-container">
      <div className="movie-details-container">
        <div className="movie-title">
          <h2>{title ? title : "No Title available"}</h2>
        </div>
        <div className="movie-description">
          <p>{plot ? plot : "No plot available"}</p>
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
        {poster ? (
          <img src={poster} />
        ) : (
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
              alt="Placeholder Image"
            />
            <p>
              No poster available. This is a placeholder. Try searching a
              different movie.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieSection;
