import { useDispatch, useSelector } from "react-redux";
import { newsActions } from '@redux/newsStore'
import { BiFirstPage, BiLastPage } from 'react-icons/bi'
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'

const Pagination = () => {
  const { currentPage, totalPages } = useSelector(state => state.newsStore)
  const dispatch = useDispatch()

  return (
    <section className="flex-all-center gap-3 mb-10 text-lg font-semibold">
      <button className={`${currentPage == 0 && "text-gray-700"}`} onClick={() => handlePgButton(newsActions.firstPage)}><BiFirstPage size={30} /></button>
      <button className={`${currentPage == 0 && "text-gray-700"}`} onClick={() => handlePgButton(newsActions.previousPage)}><FaLessThan /></button>
      <p className={`${currentPage == 0 && "text-blue-700"}`}>{'1'}</p>
      {currentPage != 0 && <>
        <p>{'...'}</p>
        <p className="text-blue-700">{currentPage + 1}</p>
      </>
      }
      {currentPage != totalPages - 1 && <>
        <p>{'...'}</p>
        <p>{totalPages}</p>
      </>
      }

      <button className={`${currentPage == totalPages - 1 && "text-gray-700"}`} onClick={() => handlePgButton(newsActions.nextPage)}><FaGreaterThan /></button>
      <button className={`${currentPage == totalPages - 1 && "text-gray-700"}`} onClick={() => handlePgButton(newsActions.lastPage)}><BiLastPage size={30} /></button>
    </section>
  );
}

export default Pagination;
