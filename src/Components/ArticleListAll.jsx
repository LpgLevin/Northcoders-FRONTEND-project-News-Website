import { fetchArticles } from '../api.js'
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useState } from 'react';
import Greeting from './Greeting';


const ArticleListAll = ({ articles, setArticles }) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then(( getArticles ) => {
      setArticles( getArticles );
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading Articles...</p>
  }


  return (

    <div className="ArticleListAll">
      <Greeting/>
      { articles.map(( article ) => {
        return (
          <ArticleCard article={ article }
          />
        );
      })}
    </div>
  );
};

export default ArticleListAll;