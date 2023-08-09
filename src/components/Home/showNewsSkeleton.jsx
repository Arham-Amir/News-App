import Skeleton from '@mui/material/Skeleton';


const ShowNews = (props = {}) => {
  return (
    <section className={`${props.className}`}>
      <section className="basis-1/2 overflow-hidden">
        <Skeleton height={175} variant="rectangular" className={`w-full object-cover`}/>
        </section>
      <section className={`basis-1/2 p-2 text-justify`}>
        <Skeleton className={`w-[90%] text-gray-600 `} />
        <Skeleton className={`w-[90%] text-black my-1`} />
        <Skeleton width="80%" className={`w-[90%] text-black my-1`} />
        <Skeleton className={`w-[90%] text-gray-600 text-sm`} />
        <Skeleton className={`w-[90%] text-gray-600 text-sm`} />
        <Skeleton width="80%" className={`w-[90%] text-gray-600 text-sm`} />
      </section>
    </section>
  );
}

export default ShowNews;
