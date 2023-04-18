import axios from "axios";

const newsAPI = axios.create({
  baseURL:"https://lilybackendncnews.onrender.com/api"
})

export const fetchArticles = () => {

  return newsAPI.get("/articles").then((response) => {

    return response.data.articles;

  });

};



export const fetchSingleArticle = ( article_id ) => {

  return newsAPI.get(`/articles/${ article_id }`).then((response) => {

    console.log("Hello");

    return response.data;

  });

};