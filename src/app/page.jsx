'use client'
import HomeComponent from '@components/Home/home.jsx'
import { useEffect } from 'react'
import { fetchNewsForHome, newsActions } from '@redux/newsStore'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '@mui/material/Skeleton';

export default function Home() {
  const { loading } = useSelector(state => state.newsStore)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsActions.setLoader())
    dispatch(fetchNewsForHome())
  }, [])
  return (
    <main className='w-[90%] mx-auto'>
      <HomeComponent />
    </main>
  )
}
