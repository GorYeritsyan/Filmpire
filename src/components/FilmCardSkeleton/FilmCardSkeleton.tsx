import './FilmCardSkeleton.scss'

const FilmCardSkeleton = () => {
  return (
    <div className="filmCard">
        <div className="filmImage"></div>
      <div className="filmTitle">
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default FilmCardSkeleton;
