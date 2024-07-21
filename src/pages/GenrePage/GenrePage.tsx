import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchOneGenre } from "../../store/slices/genresSlice";
import FilmCard from "../../components/FilmCard/FilmCard";
import Pagination from "../../components/Pagination/Pagination";

import "./GenrePage.scss";

const GenrePage = () => {
  const dispatch = useAppDispatch();

  const { oneGenre, isFetching } = useAppSelector((state) => state.genresData);
  const { page } = useAppSelector((state) => state.filmsData);

  const { genreId } = useParams();

  useEffect(() => {
    dispatch(fetchOneGenre({ genreId, page }));
  }, [genreId, page]);

  return (
    <section className="genrePage">
      <div className="container">
        <div className="genreCards">
          {isFetching ? (
            <h1>Loading...</h1>
          ) : (
            <div className="wrapper">
              <div className="item">
                {oneGenre.map((el) => (
                  <FilmCard film={el} />
                ))}
              </div>
              <Pagination />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GenrePage;
