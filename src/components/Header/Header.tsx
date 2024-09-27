import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchGenresList } from "../../store/slices/genresSlice";
import SearchBar from "../SearchBar/SearchBar";
import GenreBtn from "../GenreBtn/GenreBtn";
import { changePage, changePortionNumber } from "../../store/slices/filmsSlice";

import "./Header.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGenresList());
  }, []);

  const { genres } = useAppSelector((state) => state.genresData);

  function resetPagination() {
    dispatch(changePage(1));
    dispatch(changePortionNumber(1));
  }

  return (
    <header>
      <div className="container">
        <NavLink onClick={resetPagination} to="/">
          <h2>FILMPIRE</h2>
        </NavLink>
        <div className="genresList">
          {genres.map((genre) => (
            <GenreBtn genre={genre} />
          ))}
        </div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
