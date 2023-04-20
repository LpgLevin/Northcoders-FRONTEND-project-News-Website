import { fetchCommentsById } from "../Utils.js/api";
import { useEffect } from "react";
import CommentCard from "./CommentCard"; //didnt auto-complete
import { useState } from 'react';


const CommentGroup = ({ article_id }) => {

    const [comments, setComments] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        setIsLoading(true);
        fetchCommentsById(article_id).then(( response ) => {

            setComments( response );
            setIsLoading(false);

        });

    }, []);


    if (isLoading) {

        return <p className="Loading">Loading Comments...</p>

    };


    return (

        <div className="CommentGroup">
            
            { comments.map(( comment ) => {

                return (

                    <CommentCard comment={ comment }/>
        
                );
               
            })};
        
        </div>
    );

};

export default CommentGroup;

//fix return dot notation in fetchCommentsById in api

//pass down article id - this doesn't seem to have worked



