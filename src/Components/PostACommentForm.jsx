import { useState } from "react";
import { postComment } from "../Utils.js/api";
import { Link } from "react-router-dom";


function PostACommentForm( { setComments, article_id }) {

    const [comment, setComment] = useState('');
    const [author, setAuthor] = useState('');
    const [createdAt, setCreatedAt] = useState('');


    function handleSubmit(event) {

        console.log(event.target.value);

        event.preventDefault();
        
        setComments( ( currentComments ) => {

            const newComment = {

                username: "grumpy19",
                body: comment
                
            }
            
            console.log(currentComments);

            return [ newComment, ...currentComments ];

        });

    //     {article_id: article_id,
    //         author: author,
    //           body: body,
    //     comment_id: 0,
    //     created_at: new Date,
    //          votes: 0
    //    },

        postComment( article_id, newComment ).then(() => {

            console.log("Your commment has been posted!");
        }).catch()
    
    };

    return(
        <div>
            <form onSubmit={ ( event ) => { handleSubmit( event ) } } method="post" className="PostCommentGrid">               
                <fieldset> 
                    <label className="PostButtonLabel" for="Comment">Type your comment here: 
                        <input onChange={ (event) => {
                                    setComment(event.target.value);
                               } } 
                                class="CommentInput" 
                                for={ setComment } 
                                id="Comment" 
                                type="text" 
                                required
                        />
                    </label>

                    <button className="PostButton" type="submit" value="Submit" >Post</button> 
                </fieldset>               
            </form>           
        </div>
    );

};

export default PostACommentForm;
