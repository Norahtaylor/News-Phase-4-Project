import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import {useNavigate} from 'react-router'

function CommentForm({ change, setChange, articleId, userID, articleComment }) {
    const [comments, setComments] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    

    function handleSubmit(e) {
        e.preventDefault();
 
        fetch('/comments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                comment: comments, 
                article_id: articleId,
                user_id: userID

            })
            })
         .then(res => res.json())
        .then(comment => console.log(comment))
        //navigate('/articles')
        window.location.reload(false)

     }


    return (
        <div>


         <form onSubmit={handleSubmit}>
             <input
                type="text"
                name="comment"
                onChange={(e) => setComments(e.target.value)}
                value={comments}
                placeholder="Add a comment..."
                className="input-text"
            />{" "}
            <button type="submit" name="submit"  className="submit" >Submit</button>
         
         </form>
       
            
        

   </div>
    );
}

export default CommentForm;