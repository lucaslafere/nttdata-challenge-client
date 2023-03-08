import { FC, useState } from "react";
import FavoriteButton from "../../components/FavoriteButton";
import Rating from "../../components/Rating";
import "./style.scss";

export const MovieSection: FC = () => {
  const [rating, setRating] = useState(3);
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="main-container">
      <div className="movie-details-container">
        <div className="movie-title">
          <h2>Movie Title</h2>
        </div>
        <div className="movie-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cumque,
          voluptate tempora neque doloremque, eligendi a enim, distinctio eos
          dicta quod ipsa quos aliquid. Nobis optio autem minus aperiam.
          Consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci, ducimus quaerat soluta quia enim et ea saepe aliquid eos
          consequuntur laboriosam reprehenderit blanditiis ipsam minus
          exercitationem quasi porro, tempora fugiat. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Quos temporibus porro veritatis,
          eveniet nemo voluptate vel. Deserunt fugiat consectetur deleniti neque
          consequatur recusandae hic minima id excepturi dicta, officiis
          provident.
        </div>
        <div className="movie-actor">
          <h3>Actors: </h3>
          <p> Actor 1, Actor 2, Actor 3</p>
        </div>
        <div className="movie-rating">
          <h3>Review</h3>
          <Rating
            rating={rating}
            setRating={setRating}
          />
        </div>
        <div className="movie-favorite">
          <FavoriteButton />
        </div>
      </div>
      <div className="movie-poster">Placeholder for an image</div>
    </div>
  );
};

export default MovieSection;
