
const ShowHeadNewsSkeleton = (props = {}) => {
  return (
    <section className={`${props.className}`}>
      <section className="basis-1/2">
        <p className={`h-full w-full bg-gray-300`}  />
      </section>
      <section className={`basis-1/2 p-3`}>
        <p className={`w-1/3 p-3 bg-gray-300 `} />
        <p className={`w-2/3 p-3 bg-gray-300 mt-3 mb-1`} />
        <p className={`w-1/3 p-3 bg-gray-300 mb-3`} />
        <p className={`w-2/3 p-3 bg-gray-300 m-1`} />
        <p className={`w-2/3 p-3 bg-gray-300 m-1`} />
        <p className={`w-1/3 p-3 bg-gray-300 m-1`} />
      </section>
    </section>
  );
}

export default ShowHeadNewsSkeleton;
