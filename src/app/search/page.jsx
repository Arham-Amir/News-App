'use client'
import HomeComponent from '@components/Home/home.jsx'
import SearchBar from '@components/Search/searchBar.jsx'
import { newsActions } from '@redux/newsStore'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Search = () => {
  const { loading } = useSelector(state => state.newsStore)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(newsActions.setLoader())
    return () => {
      dispatch(newsActions.resetCurrentPageNumber())
    };
  }, [])

  return (
    <section>
      <SearchBar></SearchBar>
      {loading ?
        <section>
          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 text-2xl font-bold'>Search For Input</h1>
        </section>
        :
        (<main className='w-[90%] mx-auto'>
          <HomeComponent />
        </main>)
      }
    </section>
  );
}

export default Search;
