import { fetchCommentsById } from "../Utils.js/api";
import { useEffect } from "react";
import CommentCard from "./CommentCard"; 
import { useState } from 'react';


const CommentGroup = ({ article_id, comments, setComments }) => {

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




