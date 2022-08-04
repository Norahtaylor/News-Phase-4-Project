import React, { useState } from "react";
import CommentCard from "./CommentCard";

function CommentForm({change, setChange}) {
    const [comment, setComment] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: comment,
                // user_id: id,
            }),
        }).then(() => setChange(!change));
        setComment("");
    }

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
            <input type="submit" name="submit" value="Post" className="submit" />
            {comment ? <CommentCard change={change} setChange={setChange} /> : ""}

        </form>
    );
}

export default CommentForm;