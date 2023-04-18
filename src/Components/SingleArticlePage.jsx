
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleArticle } from "../Utils.js/api";
import { useParams } from 'react-router-dom';


const SingleArticlePage = () => {

    const { article_id } = useParams();
    console.log( article_id );

    const [singleArticle, setSingleArticle] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchSingleArticle( article_id ).then( ( response ) => {
          setSingleArticle( response.articleObject[0] ); 
          setIsLoading( false );
        });
    }, []);

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
                </div>
            )};

        </div>
    )};

export default SingleArticlePage;





{/* <WriteACommentButton className="WriteACommentButton" pageState={ pageState } setPageState={ setPageState }/> */}


    