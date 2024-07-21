import { useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changePage } from "../../store/slices/filmsSlice";

import "./Pagination.scss";

const Pagination = () => {
  const dispatch = useAppDispatch();

  //pagination start
  let portionSize = 10;
  const [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;
  //pagination end

  const { totalPages, activePage } = useAppSelector(state => state.filmsData);

  const arr: number[] = [];

  const pages = useMemo(() => {
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i);
    }
    return arr;
  }, [arr]);

  function changeCurrentPage(pageNumber: number) {
    window.scrollTo(0, 0);
    dispatch(changePage(pageNumber));
  }

  return (
    <div className="pagination">

      {/* prev button */}
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          Prev
        </button>
      )}

      {/* Center buttons for pagination */}
      {pages
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
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
