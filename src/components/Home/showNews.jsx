import Link from "next/link";

const ShowNews = (props = {}) => {
  const imageUrl = props.img || '/images/imageNotFound.png';
  return (
    <section className={`${props.className}`}>
      <section className="basis-1/2 overflow-hidden">
        <img className={`w-full object-fill`} src={imageUrl}
         alt="news_image" /></section>
      <section className={`basis-1/2 p-2 text-justify`}>
        <h4 className={`w-[90%] text-gray-600 `}>{props.date}</h4>
        <h1 className={`w-[90%] text-black my-1`}>
          <Link href={props.newsUrl} target="_blank">{props.title}</Link>
        </h1>
        <h3 className={`w-[90%] text-gray-600 text-sm`}>{props.description}</h3>
      </section>
    </section>
  );
}

export default ShowNews;
