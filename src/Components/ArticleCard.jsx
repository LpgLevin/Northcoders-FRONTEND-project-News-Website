
import { Link } from "react-router-dom";

const ArticleCard = ({
  article_id,
  title,
  topic,
  author,
  body,
  created_at,
  article_img_url
}) => {
  return (
    <div className="IdividualArticles">
      <Link to={`/articles/${article_id}`}>
        <img className="Thumbnails" src={article_img_url} />
      </Link>
      <h2 className="Title">{title}</h2>
      <p className="Author">{author}</p>
    </div>
  );
};

export default ArticleCard;

