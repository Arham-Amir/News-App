'use client'
import { useEffect } from 'react';
import ShowHeadNews from '@components/Home/showHeadNews'
import ShowHeadNewsSkeleton from '@components/Home/showHeadNewsSkeleton'
import ShowNewsSkeleton from '@components/Home/showNewsSkeleton'
import ShowNews from '@components/Home/showNews'
import { fetchNewsForHome } from '@redux/newsStore'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@components/Base/pagination'

const HomeComponent = () => {
  const { loading, news } = useSelector(state => state.newsStore)

  return (
    <section>
      <section className='p-4 grid grid-cols-3 gap-x-20 gap-y-10'>
        {loading && (
          <>
            {Array.from({ length: 10 }, (_, i) => {
              if (i == 0) {
                return (
                <>
                <ShowHeadNewsSkeleton key={i} className='col-span-3 h-[350px] flex flex-row gap-5 w-[90%] mx-auto'/>
                </>)
              }
              else {
                return (<ShowNewsSkeleton key={i} className='h-[350px] flex flex-col'/>)
              }
            })}
          </>
        )}
        {news?.map((el, i) => {
          if (i == 0) {
            return (
              <ShowHeadNews key={i} news={el}
                className='col-span-3 h-[350px] flex flex-row gap-5 w-[90%] mx-auto'
                newsUrl={el.url}
                img={el.urlToImage}
                title={el.title.slice(0, 40) + ' ...'}
                description={el.description.slice(0, 50) + ' ...'}
                date={el.publishedAt.slice(0, 10)}
              ></ShowHeadNews>)
          }
          else {
            return (
              <ShowNews key={i} news={el}
                className='h-[350px] flex flex-col'
                newsUrl={el.url}
                img={el.urlToImage}
                imgHeight={'h-1/2'}
                title={el.title.slice(0, 40) + ' ...'}
                description={el.description.slice(0, 45) + ' ...'}
                date={el.publishedAt.slice(0, 10)}
              ></ShowNews>)
          }
        })}

      </section>
      {loading == false && <Pagination></Pagination>}
    </section>
  );
}

export default HomeComponent;
