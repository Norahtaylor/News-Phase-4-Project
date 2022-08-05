import React from "react";
import CommentForm from "./CommentForm";

function CommentCard({ commentList, comment, articleComment }) {

    // function handleDeleteClick() {
    //     fetch(`/comments/${id}`, {
    //         method: "DELETE",
    //     }).then(() => setComments());
    // }

    // function handleRender(){
    //     if(articleId === article.id)
    //     return comment
    // }



    return (
        <div>
           {articleComment}
            <p> 
                
                🗣️ {comment}  
                {/* <button onClick={() =>handleDeleteClick(id)}>X</button>{" "} */}
         </p>
   
        </div>
    );
}

export default CommentCard;

