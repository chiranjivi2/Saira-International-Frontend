import React, { useEffect, useState } from "react";
import { getHotNews } from "../../services/api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function HotNewsMarquee() {
  // const newsItems = [
  //   "Stydy in Europe",
  //   "IELTS Not Required",
  //   "Tution fee 2500 euro to 6000 euro* Rs/year in Public University Latvia",
  //   "Can apply Erasmus scholarship",
  //   "On Campus Accommodation",
  //   "Nice Culture and Lifestyle*",
  //   "20 hrs part time work allowed",
  //   "Call/Whatsapp : 9768827875",
  //   "Email: sairainternational@gmail.com",
  // ];

  const [newsItems, setNewsItems] = useState([]);

  function splitIntoSentences(paragraph) {
    if (!paragraph || typeof paragraph !== "string") return [];

    return paragraph
      .split(/(?<=[.?!])\s+/) // split when . ? ! is followed by space
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 0);
  }

  // const getHotNews = async () => {
  //   const response = await axios.get(`${BASE_URL}/hotnews/get`, {
  //     withCredentials: true,
  //   });
  //   setNewsItems(splitIntoSentences(response.data.data.content));
  //   console.log(newsItems);
  // };

  useEffect(() => {
    const fetchHotNews = async () => {
      const content = await getHotNews();
      const sentences = splitIntoSentences(content);
      setNewsItems(sentences);
    };
    fetchHotNews();
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-[var(--color-secondary-500)] to-[var(--color-primary-500)] py-4 overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="shrink-0 pb-6">
          <h2 className="text-white font-bold text-xl uppercase tracking-wider">
            🔥 Hot News
          </h2>
        </div>

        <div className="relative flex overflow-hidden flex-1">
          <div className="flex animate-marquee whitespace-nowrap">
            {newsItems.map((news, index) => (
              <div
                key={index}
                className="mx-8 inline-block  rounded-lg px-6 py-2 shadow-lg"
              >
                <span className="text-[var(--color-primary-50)] font-semibold text-lg">
                  {news}
                </span>
              </div>
            ))}
          </div>

          <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
            {newsItems.map((news, index) => (
              <div
                key={`duplicate-${index}`}
                className="mx-8 inline-block  rounded-lg px-6 py-2 shadow-lg"
              >
                <span className="text-[var(--color-primary-50)] font-semibold text-lg">
                  {news}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
