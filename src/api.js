import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://lilybackendncnews.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
};