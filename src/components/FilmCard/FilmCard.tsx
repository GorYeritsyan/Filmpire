import { NavLink } from "react-router-dom";
import { OneFilmDataType } from "../../types/types";
import { imgUrl } from "../../api/api";

import "./FilmCard.scss";

type FilmCardProps = {
  film: OneFilmDataType;
};

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <div className="filmCard">
      <NavLink to={`/${film.id}`}>
        <img src={`${imgUrl}/w500${film.poster_path}`} alt="" />
      </NavLink>
      <div className="filmTitle">
        <span>{film.title}</span>
      </div>
    </div>
  );
};

export default FilmCard;
