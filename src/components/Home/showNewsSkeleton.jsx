
const ShowNews = (props = {}) => {
  return (
    <section className={`${props.className}`}>
      <section className="basis-1/2 overflow-hidden">
        <p className={`w-full h-full bg-gray-300`}/>
        </section>
      <section className={`basis-1/2 p-2 text-justify`}>
        <p className={`w-[40%] p-2 bg-gray-300 `} />
        <p className={`w-[90%] p-3 bg-gray-300 mt-2 mb-1`} />
        <p className={`w-[60%] p-3 bg-gray-300 mb-2`} />
        <p className={`w-[90%] p-2 bg-gray-300`} />
        <p className={`w-[90%] p-2 bg-gray-300 my-1`} />
        <p className={`w-[60%] p-2 bg-gray-300`} />
      </section>
    </section>
  );
}

export default ShowNews;
