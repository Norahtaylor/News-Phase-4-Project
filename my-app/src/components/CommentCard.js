import React from "react";
import CommentForm from "./CommentForm";

function CommentCard({ commentList, id, comment, comments, setComments, articleComment }) {

    function handleDeleteClick(id) {
        fetch(`/comments/${id}`, {
            method: "DELETE",
        }).then(() => setComments());
            window.location.reload(false)
    }

    // function handleRender(){
    //     if(articleId === article.id)
    //     return comment
    // }



    return (
        <div>
           {articleComment}
            <p> 
                
                🗣️ "{comment}"  
            <button className="deletebutton" 
            onClick={() =>handleDeleteClick(id)}>X</button>{" "}
         </p>
   
        </div>
    );
}

export default CommentCard;

