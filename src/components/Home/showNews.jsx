const ShowNews = (props = {}) => {
  return (
    <section className={`${props.className}`}>
      <section className="basis-1/2 overflow-hidden"><img className={`w-full object-cover`} src={props.img} alt="news_image" /></section>
      <section className={`basis-1/2 p-2 text-justify`}>
        <h4 className={`w-[90%] text-gray-600 `}>{props.date}</h4>
        <h1 className={`w-[90%] text-black my-1`}>{props.title}</h1>
        <h3 className={`w-[90%] text-gray-600 text-sm`}>{props.description}</h3>
      </section>
    </section>
  );
}

export default ShowNews;
