import { useCallback, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changePage } from "../../store/slices/filmsSlice";
import { changePortionNumber } from "../../store/slices/filmsSlice";

import "./Pagination.scss";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const {filmPortionNumber} = useAppSelector(state => state.filmsData)
  //pagination start
  let portionSize = 10;
  // const [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (filmPortionNumber - 1) * portionSize + 1;
  let rightPortionNumber = filmPortionNumber * portionSize;
  //pagination end

  const { totalPages, activePage } = useAppSelector((state) => state.filmsData);

 const pages = useCallback(() => {
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i);
    }
    return arr
  }, [filmPortionNumber]);

  const arr: number[] = [];
  // const pages = useMemo(() => {
  //   for (let i = 1; i <= totalPages; i++) {
  //     arr.push(i);
  //   }
  //   return arr;
  // }, [arr]);

  function changeCurrentPage(pageNumber: number) {
    window.scrollTo(0, 0);
    dispatch(changePage(pageNumber));
  }

  return (
    <div className="pagination">
      {/* prev button */}
      {filmPortionNumber > 1 && (
        <button onClick={() => dispatch(changePortionNumber(filmPortionNumber - 1))}>
          Prev
        </button>
      )}

      {/* Center buttons for pagination */}
      {pages()
        .filter((el) => el >= leftPortionNumber && el <= rightPortionNumber)
        .map((el) => (
          <button
            className={el === activePage ? "activePagination" : "eachBtn"}
            onClick={() => changeCurrentPage(el)}
            key={el}
          >
            {el}
          </button>
        ))}

      {/* next button */}
      {rightPortionNumber + 1 !== totalPages && (
        <button onClick={() => dispatch(changePortionNumber(filmPortionNumber + 1))}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
