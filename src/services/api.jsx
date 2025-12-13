import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/news/get`);
    console.log(response);
    const news = response?.data?.data;
    console.log(news);
    return news;
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};
