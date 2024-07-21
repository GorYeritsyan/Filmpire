import { NavLink } from "react-router-dom";
import { OneGenreDataType } from "../../types/types";
import { useAppDispatch } from "../../store/hooks";
import { changePage } from "../../store/slices/filmsSlice";

import "./GenreBtn.scss";

type GenreBtnProps = {
  genre: OneGenreDataType;
};

const GenreBtn = ({ genre }: GenreBtnProps) => {
  const dispatch = useAppDispatch()
  
  return (
    <NavLink to={`/genre/${genre.id}`}>
      <button onClick={() => dispatch(changePage(1))} key={genre.id}>{genre.name}</button>
    </NavLink>
  );
};

export default GenreBtn;
