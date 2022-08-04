import React from "react";

function CommentCard({ commentList, comment }) {

    // function handleDeleteClick() {
    //     fetch(`/comments/${id}`, {
    //         method: "DELETE",
    //     }).then(() => setComments());
    // }

    // function handleRender(){
    //     if(articleId === article.id)
    //     return comment
    // }

    console.log(comment)

    return (
        <div>
            {commentList}
            <p> 
                
                🗣️ {comment} 
                {/* <button onClick={() =>handleDeleteClick(id)}>X</button>{" "} */}
            </p>
        </div>
    );
}

export default CommentCard;

