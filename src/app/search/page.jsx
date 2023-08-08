'use client'
import HomeComponent from '@components/Home/home.jsx'
import SearchBar from '@components/Search/searchBar.jsx'
import { newsActions } from '@redux/newsStore'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Search = () => {
  const { loading } = useSelector(state => state.newsStore)
  const dispatch = useDispatch()
  dispatch(newsActions.setLoader())
  // useEffect(() => {
  // }, [])
  return (
    <section>
      <SearchBar></SearchBar>
      {loading ?
        <section>
          <h1 className='min-h-full flex-all-center text-2xl font-bold'>Search For Input</h1>
        </section>
        :
        (<HomeComponent />)
      }
    </section>
  );
}

export default Search;
