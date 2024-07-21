import { useEffect, useRef } from "react";

import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchOneFilm, fetchTrailer } from "../../store/slices/filmsSlice";
import { imgUrl } from "../../api/api";

import "./FilmPage.scss";

const FilmPage = () => {
  const { id } = useParams();
  const iframe = useRef(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchOneFilm(id));
    dispatch(fetchTrailer({ movieId: id, iframe }));
  }, [id]);

  const { oneFilm, isFetching } = useAppSelector((state) => state.filmsData);

  const releaseDate = oneFilm?.release_date.split("-")[0]; //example 2024-24-24 ===> 2024

  return (
    <main>
      <section className="filmPage">
        {isFetching ? (
          <h1>Loading...</h1>
        ) : (
          <div
            className="filmImg"
            style={{
              background: `url(${
                imgUrl + "/original" + oneFilm?.backdrop_path
              })`,
              backgroundSize: "cover",
              backgroundPosition: "left",
            }}
          >
            <img src={imgUrl + "/w500" + oneFilm?.poster_path} alt="" />
            <div className="info">
              <h2>{oneFilm?.title + ` (${releaseDate})`}</h2>
              <div className="overview">
                <h3>Overview</h3>
                <p>{oneFilm?.overview}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="video">
        <div className="container">
          <iframe ref={iframe} allowFullScreen></iframe>
        </div>
      </section>
    </main>
  );
};

export default FilmPage;
