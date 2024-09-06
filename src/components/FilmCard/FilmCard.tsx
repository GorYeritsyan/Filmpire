import { NavLink } from "react-router-dom";

import { OneFilmDataType } from "../../types/types";
import { imgUrl } from "../../api/api";
import FilmTitle from "./FilmTitle";

import "./FilmCard.scss";

export type FilmCardProps = {
  film: OneFilmDataType;
};

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <div className="filmCard">
      <NavLink to={`/${film.id}`}>
        <img src={`${imgUrl}/w500${film.poster_path}`} alt="" />
      </NavLink>

      <FilmTitle film={film} />
    </div>
  );
};

export default FilmCard;
