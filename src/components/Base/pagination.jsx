import { useDispatch, useSelector } from "react-redux";
import { newsActions } from '@redux/newsStore'

const Pagination = () => {
  const { totalPages } = useSelector(state => state.newsStore)
  const dispatch = useDispatch()
  const arr = []
  for (let i = 0; i < totalPages; i++) {
    arr.push(<button onClick={(e) => handlePgButton(e)} key={i + 1}>{i + 1}</button>)
  }
  function handlePgButton(e) {
    console.log(e.target.textContent)
    dispatch(newsActions.nextPage({ 'pageNumber': e.target.textContent }))
    dispatch(newsActions.UpdateListOnPageChange())
  }
  return (
    <section>{arr}</section>
  );
}

export default Pagination;
