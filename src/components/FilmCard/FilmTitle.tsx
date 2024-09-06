import "./FilmCard.scss";

import { FilmCardProps } from "./FilmCard";
import { Link } from "react-router-dom";

const FilmTitle = ({ film }: FilmCardProps) => {
  return (
    <div className="filmTitle">
      <Link to={`/${film.id}`}>
        {film.title.length > 30 ? film.title.slice(0, 30) + "..." : film.title}
      </Link>
    </div>
  );
};

export default FilmTitle;
