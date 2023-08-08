import Link from "next/link";

const ShowHeadNews = (props = {}) => {
  return (
    <section className={`${props.className}`}>
      <section className="basis-1/2"><img className={`h-full w-full object-cover`} src={props.img} alt="news_image" /></section>
      <section className={`basis-1/2 p-4`}>
        <h4 className={`w-2/3 text-gray-600 `}>{props.date}</h4>
        <h1 className={`w-2/3 text-black text-4xl my-3`}>
          <Link href={props.newsUrl} target="_blank">{props.title}</Link>
        </h1>
        <h3 className={`w-2/3 text-gray-600 text-lg`}>{props.description}</h3>
      </section>
    </section>
  );
}

export default ShowHeadNews;
