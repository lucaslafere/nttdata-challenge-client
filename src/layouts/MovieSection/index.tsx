import { FC, useState } from "react";



export const MovieSection: FC = () => {
    const [rating, setRating] = useState(0);
    const [favorite, setFavorite] = useState(false);
    