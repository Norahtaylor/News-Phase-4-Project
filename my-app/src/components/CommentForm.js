import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

function CommentForm({ change, setChange, articleId, userId, currentUser, articleComment }) {
    const [comments, setComments] = useState("")
    const [errors, setErrors] = useState([])

console.log(articleComment)
    useEffect(() => {
        fetch('/comments')
            .then(res => {
                if (res.ok) {
                    res.json().then(comments => console.log(comments))
                } else {
                    res.json().then(data => setErrors(data.errors))
                }
            })
    }, [])  

    
    console.log(comments)


    function handleSubmit(e) {
        e.preventDefault();


        console.log(articleId)
 
        fetch('/comments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                comment: comments, 
                article_id: articleId,
                user_id: currentUser.id
                
            })
    
            })
        .then(res => res.json())
        .then(comment => console.log(comment))
        console.log("artcile id", articleId)
        console.log("current iser", currentUser)
    }

//         fetch('/comments', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 comment: comment,
                
//                 // user_id: id,
//             }),
//         })
//         .then(r => {
//             if (r.ok) {
//                 r.json().then(comment => setComment(comment))
              
//                 console.log( "comment inside request", comment )
//             }
//             else {
//                 r.json().then((err) => setErrors(err.errors))
//             }
//         console.log("outside request", comment)
//         setComment("");
//     })
// }

    
      const commentList = comments.map((comment) =>
            <CommentCard
                comment={comment.comment}
                id={comment.id}
                articleId={comment.article_id}
                change={change}
                setChange={setChange}
                setComments={setComments} />
        )
    

    return (
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
        <CommentCard />

        </form>
    );
}

export default CommentForm;