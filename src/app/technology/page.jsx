'use client'
import HomeComponent from '@components/Home/home.jsx'
import { useEffect } from 'react'
import { newsActions, searchTechnologyNews } from '@redux/newsStore'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const { loading } = useSelector(state => state.newsStore)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchTechnologyNews())
    return () => {
      dispatch(newsActions.resetCurrentPageNumber())
    };
  }, [])
  return (
    <main className='w-[90%] mx-auto'>
      {loading ? <p>Loading...</p>
        : <>
          <HomeComponent />
        </>
      }
    </main>
  )
}
