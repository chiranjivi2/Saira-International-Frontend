import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/news/get`);

    const news = response?.data?.data;

    return news;
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

export const getFaq = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/faq/get`);
    const faq = response?.data.data;
    return faq;
  } catch (error) {
    console.error("Error fetching Faqs:", error);
  }
};

export const getBankFund = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/bankfundcountrywise/get`);
    const bankfund = response?.data.data;
    console.log(bankfund);
    return bankfund;
  } catch (error) {
    console.error("Error fetching bank fund :", error);
  }
};

export const postStudentData = async (studentData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/studentdocument/create`,
      studentData
    );
    console.log(response);
  } catch (error) {
    console.error("Error sending student data:", error);
  }
};
