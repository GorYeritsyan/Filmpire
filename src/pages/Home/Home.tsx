import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchFilms } from "../../store/slices/filmsSlice";
import Pagination from "../../components/Pagination/Pagination";
import FilmCard from "../../components/FilmCard/FilmCard";
//lazy loading for film cards

import "./Home.scss";

const Home = () => {
  const dispatch = useAppDispatch();

  const { films, isFetching, page } = useAppSelector(
    (state) => state.filmsData
  );

  useEffect(() => {
    dispatch(fetchFilms(page));
  }, [page]);

  return (
    <section className="home">
      <div className="container">
        {isFetching ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className="films">
              {films.map((film) => (
                <FilmCard key={film.id} film={film} />
              ))}
            </div>

            <Pagination />
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
