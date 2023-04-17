import { fetchArticles } from '../api.js'
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticleListAll = ({ articles, setArticles }) => {
  useEffect(() => {
    fetchArticles().then((getArticles) => {
      setArticles(getArticles);
    });
  }, []);

  return (
    <div className="ArticleListAll">
      {articles.map((article) => {
        return (
          <ArticleCard
            article_id={article.article_id}
            title={article.title}
            topic={article.topic}
            author={article.author}
            body={article.body}
            created_at={article.created_at}
            article_img_url={article.article_img_url}
          />
        );
      })}
    </div>
  );
};

export default ArticleListAll;