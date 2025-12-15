import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch Hot News from backend
export const getHotNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/hotnews/get`, {
      withCredentials: true,
    });

    const content = response?.data?.data?.content || "";

    return content;
    // console.log("Fetched News:", sentences);
  } catch (error) {
    console.error("Error fetching Hot News:", error);
  }
};

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/news/get`);

    const news = response?.data?.data;

    return news;
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

// Fetch Pamphlets
export const getPamphlets = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/template/get`, {
      withCredentials: true,
    });

    const data = response?.data?.data || [];
    return data;
  } catch (error) {
    console.error("Error fetching Pamphlets:", error);
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
  } catch (error) {
    console.error("Error fetching bank fund :", error);
  }
};

export const getUniversities = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/uniclg/get`);
    const universities = response?.data.data;
    return universities;
  } catch (error) {
    console.error("Error fetching universities", error);
  }
};

export const postStudentData = async (studentData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/studentdocument/create`,
      studentData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error sending student data:", error);
    throw error;
  }
};
