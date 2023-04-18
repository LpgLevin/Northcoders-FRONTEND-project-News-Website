import { fetchArticles } from '../api.js'
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useState } from 'react';

const ArticleListAll = ({ articles, setArticles }) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((getArticles) => {
      setArticles(getArticles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading Articles...</p>
  }


  return (
    <div className="ArticleListAll">
      {articles.map((article) => {
        return (
          <ArticleCard
            title={article.title}
            author={article.author}
            article_img_url={article.article_img_url}
          />
        );
      })}
    </div>
  );
};

export default ArticleListAll;