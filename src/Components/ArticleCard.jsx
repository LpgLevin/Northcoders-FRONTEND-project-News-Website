
import { Link } from "react-router-dom";

const ArticleCard = ( { article } ) => {

  return (

    <div className="ArticleCard">
      <h2 className="ArticleCardTitle">{ article.title } </h2>
      <p className="ArticleCardAuthor">{ article.author }</p>
      <Link to={`/articles/${ article.article_id }`}>
        <img className="ArticleCardThumbnails" src={ article.article_img_url } />
      </Link>     
    </div>

  );

};

export default ArticleCard;

