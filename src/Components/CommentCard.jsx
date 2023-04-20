import { Link } from "react-router-dom";

const CommentCard = ({ comment }) => {

    return (

        <div className="CommentCard">
            <Link to={`/comments/${ comment.comment_id }`}></Link>
            <h3 className="CommentCardAuthor">{ comment.author }</h3>
            <h4 className="CommentCardVotes">{ comment.votes }</h4>
            <p className="CommentCardBody">{ comment.body }</p>
            <h5 className="CommentCardCreatedAt">{ comment.created_at }</h5>
        </div>

    );

};

export default CommentCard;

