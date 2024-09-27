import { NavLink } from "react-router-dom";
import { OneGenreDataType } from "../../types/types";
import { useAppDispatch } from "../../store/hooks";
import { changePage, changePortionNumber } from "../../store/slices/filmsSlice";

import "./GenreBtn.scss";

type GenreBtnProps = {
  genre: OneGenreDataType;
};


const GenreBtn = ({ genre }: GenreBtnProps) => {
  const dispatch = useAppDispatch()
  
  function resetPagination(){
    dispatch(changePage(1))
    dispatch(changePortionNumber(1))
  }

  return (
    <NavLink to={`/genre/${genre.id}`}>
      <button onClick={resetPagination} key={genre.id}>{genre.name}</button>
    </NavLink>
  );
};

export default GenreBtn;
