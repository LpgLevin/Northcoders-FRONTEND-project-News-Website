
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleArticle, patchVotes } from "../Utils.js/api";
import { useParams } from 'react-router-dom';
import CommentGroup from "./CommentGroup";



const SingleArticlePage = () => {

    const { article_id } = useParams();
    console.log( article_id );

    const [singleArticle, setSingleArticle] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [updatedVotes, setUpdatedVotes] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        setIsLoading(true);
        fetchSingleArticle( article_id ).then( ( response ) => {
          setSingleArticle( response.articleObject[0] ); 
          setIsLoading( false );
        });
    }, []);

function incrementVotes() {
   
    setUpdatedVotes(( currentVotes ) => { 

        return currentVotes +1;

    });

    patchVotes( article_id )
    .catch( () => { 
        setErrorMessage('Your vote will not be counted because you are offline!') 
        setUpdatedVotes(( currentVotes ) => { 

            return currentVotes -1;
    
        });
    } );

};

    return ( 
        <div>
            
            { isLoading ? (<p>Loading Article...</p>) : (      
                <div>
                <h2 className="SingleArticlePageTitle">{ singleArticle.title } </h2>
                <h4 className="CreatedAt">{ singleArticle.created_at }</h4>
                <Link to={ `/articles/${ singleArticle.article_id }` }>
                <h3 className="SingleArticlePageAuthor">{ singleArticle.author }</h3>
                <img className="SingleArticlePageImg" src={ singleArticle.article_img_url } />
                </Link>
                <p className="SingleArticlePageBody">{ singleArticle.body }</p>
                <h5 className="Votes"> Votes: { singleArticle.votes + updatedVotes }</h5>
                <label className="VoteButtonLabel" for="VoteButton">Vote for this article: <button onClick={ incrementVotes }className="VoteButton" id="VoteButton">+</button></label>
                { errorMessage && <p>{ errorMessage }</p> }
                <h5 className="CommentsHeader">Comments...</h5>
                <CommentGroup article_id={ article_id } />
                </div>
            )};

        </div>
    )};



export default SingleArticlePage;





{/* <WriteACommentButton className="WriteACommentButton" pageState={ pageState } setPageState={ setPageState }/> */}


    