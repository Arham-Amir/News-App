import Skeleton from '@mui/material/Skeleton';


const ShowHeadNewsSkeleton = (props = {}) => {
  return (
    <section className={`${props.className}`}>
      <section className="basis-1/2">
        <Skeleton variant="rectangular" height={350} className={`h-full w-full object-cover`}  />
      </section>
      <section className={`basis-1/2 p-4`}>
        <Skeleton className={`w-2/3 text-gray-600 `} />
        <Skeleton className={`w-2/3 text-black text-4xl my-3`} />
        <Skeleton width="70%" className={`w-2/3 text-black text-4xl my-3`} />
        <Skeleton className={`w-2/3 text-gray-600 text-lg`} />
        <Skeleton className={`w-2/3 text-gray-600 text-lg`} />
        <Skeleton width="70%" className={`w-2/3 text-gray-600 text-lg`} />
      </section>
    </section>
  );
}

export default ShowHeadNewsSkeleton;
