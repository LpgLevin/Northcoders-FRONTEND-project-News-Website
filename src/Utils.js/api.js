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

    return response.data;

  });

};



export const fetchCommentsById = (article_id) => {

  return newsAPI.get(`/articles/${ article_id }/comments`).then((response) => {
  
    return response.data.commentArray;

  });

};

export const patchVotes = ( article_id ) => {

  return newsAPI.patch(`/articles/${ article_id }`, { inc_votes: 1 }).then((response) => {
  
    console.log(response.data);

    return response.data;

  });

}