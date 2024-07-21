import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  changeInputValue,
  fetchSearchedFilms,
} from "../../store/slices/filmsSlice";
import { imgUrl } from "../../api/api";

import "./SearchBar.scss";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { inputValue, searchedFilms } = useAppSelector(
    (state) => state.filmsData
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (inputValue) {
      dispatch(fetchSearchedFilms(inputValue));
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [inputValue]);


  function closePopup(){
    dispatch(changeInputValue(''))
  }

  return (
    <div className="input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => dispatch(changeInputValue(e.target.value))}
      />
      {open && (
        <div className="searchBar">
          <ul>
            {searchedFilms.map((film) => (
              <NavLink onClick={closePopup} to={`/${film.id}`}>
                <li key={film.id}>
                  <img src={imgUrl + "/w500" + film.poster_path} alt="" />
                  <span>{film.title}</span>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
