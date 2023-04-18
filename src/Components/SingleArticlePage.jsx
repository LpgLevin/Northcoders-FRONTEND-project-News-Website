
import { Link } from "react-router-dom";

const SinglArticlePage = ({
  article_id,
  title,
  topic,
  author,
  body,
  created_at,
  article_img_url
}) => {
  return (
    <div className="SingleArticlePage">
      <h2 className="SingleArticlePageTitle">{title}</h2>
      <p className="SingleArticlePageAuthor">{author}</p>
      <Link to={`/articles/${article_id}`}>
        <img className="SingleArticlePageImg" src={article_img_url} />
      </Link>
     
    </div>
  );
};

export default SinglArticlePage;




{/* <WriteACommentButton pageState={ pageState } setPageState={setPageState}/> */}