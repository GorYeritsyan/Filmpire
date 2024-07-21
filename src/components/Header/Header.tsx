import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchGenresList } from "../../store/slices/genresSlice";
import SearchBar from "../SearchBar/SearchBar";
import GenreBtn from "../GenreBtn/GenreBtn";
import { changePage } from "../../store/slices/filmsSlice";


import "./Header.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGenresList());
  }, []);

  const { genres } = useAppSelector((state) => state.genresData);
  
  return (
    <header>
      <div className="container">
        <NavLink onClick={() => dispatch(changePage(1))} to='/'>
        <h2>FilmsEmpire</h2>
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
