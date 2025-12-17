import { useEffect, useState } from "react";
import { getNews } from "../services/api";

function News() {
  // const news = [
  //   {
  //     imageURL: "news/news1.jpg",
  //     website: "timesofmalta.com",
  //     title: "Who are the foreign nationals living in Malta?",
  //     description: "There are now over 115,000 non-Maltese nationals in Malta",
  //   },
  //   {
  //     imageURL: "news/news2.jpg",
  //     website: "timesofmalta.com",
  //     title:
  //       "European Commission expects Malta's economy to grow more than first thought",
  //     description:
  //       "Commission's autumn 2024 forecast revises GDP growth projection up to 5%",
  //   },
  // ];
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      if (data) setNews(data);
    };
    fetchNews();
  }, []);
  return (
    <>
      <title>News Page</title>
      <meta
        name="description"
        content="This is the News page of Saira International Education and Consultancy website"
      />
      <section className="bg-(--color-primary-500) text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Latest News
          </h1>
          {/* <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from
            you.
          </p> */}
        </div>
      </section>

      {/* news section */}
      <section className="py-14 bg-[var(--color-secondary-50)]">
        <div className="max-w-6xl px-8 mx-auto">
          <div>
            {news.map((n, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-15 shadow-2xl rounded-2xl overflow-hidden mb-12 bg-slate-100"
                >
                  <div className="w-110 h-75 shrink-0 rounded-2xl overflow-hidden relative group ">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 "
                      src={n.imageURL}
                      alt="news1"
                    />
                    <div className="absolute inset-0  bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-2 py-5 flex flex-col gap-2 ">
                    <a
                      href="https://timesofmalta.com/article/foreign-nationals-living-malta.1014183/"
                      target="_blank"
                      className="uppercase font-medium hover:underline"
                    >
                      {n.website}
                    </a>
                    <a
                      href="https://timesofmalta.com/article/foreign-nationals-living-malta.1014183/"
                      target="_blank"
                      className="text-[var(--color-primary-500)] text-xl font-semibold hover:underline"
                    >
                      {n.title}
                    </a>
                    <p>{n.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>
        {`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
          `}
      </style>
    </>
  );
}

export default News;
