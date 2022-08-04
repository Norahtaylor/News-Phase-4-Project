import React, { useState } from "react";
import CommentCard from "./CommentCard";

function CommentForm({change, setChange, articleId, userId, currentUser}) {
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        console.log(comment)

        fetch('/comments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ comment: comment, 
                article_id: articleId,
                user_id: userId
            })
            })
        .then(res => res.json())
        .then(comment => console.log(comment))
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

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="comment"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Add a comment..."
                className="input-text"
            />{" "}
            <input type="submit" name="submit"  className="submit" />
            {comment ? <CommentCard change={change} setChange={setChange} /> : ""}

        </form>
    );
}

export default CommentForm;