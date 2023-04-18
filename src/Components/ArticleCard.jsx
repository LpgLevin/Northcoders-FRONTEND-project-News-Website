
import { Link } from "react-router-dom";

const ArticleCard = ({
  article
}) => {
  return (
    <div className="IdividualArticles">
      <h2 className="Title">{ article.title} </h2>
      <p className="Author">{ article.author }</p>
      <Link to={`/articles/${ article.article_id }`}>
        <img className="Thumbnails" src={ article.article_img_url } />
      </Link>
     
    </div>
  );
};

export default ArticleCard;

