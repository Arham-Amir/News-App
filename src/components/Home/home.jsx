'use client'
import { useEffect } from 'react';
import ShowHeadNews from '@components/Home/showHeadNews'
import ShowNews from '@components/Home/showNews'
import { fetchNewsForHome } from '@redux/newsStore'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@components/Base/pagination'

const HomeComponent = () => {
  const { loading, news} = useSelector(state => state.newsStore)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNewsForHome())
  }, [])
  return (
    <section>
      <section className='p-4 grid grid-cols-3 gap-x-20 gap-y-10'>
        {loading ? <p>Loading...</p>
          : <>
            {news?.map((el, i) => {
              if (i == 0) {
                return (
                  <ShowHeadNews key={i} news={el}
                    className='col-span-3 h-[350px] flex flex-row gap-5 w-[90%] mx-auto'
                    newsUrl = {el.url}
                    img={el.urlToImage}
                    title={el.title}
                    description={el.description}
                    date={el.publishedAt.slice(0, 10)}
                  ></ShowHeadNews>)
              }
              else {
                return (
                  <ShowNews key={i} news={el}
                    className='h-[350px] flex flex-col'
                    newsUrl = {el.url}
                    img={el.urlToImage}
                    imgHeight={'h-1/2'}
                    title={el.title}
                    description={el.description.slice(0, 50)}
                    date={el.publishedAt.slice(0, 10)}
                  ></ShowNews>)
              }
            })}

          </>}
      </section>
      <Pagination></Pagination>
 </section>
  );
}

export default HomeComponent;
