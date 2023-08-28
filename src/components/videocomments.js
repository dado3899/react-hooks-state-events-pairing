import CommentCard from "./commentcard"
import { useState } from "react";
import Search from "./searchbar";

function VideoComments({comments,showComments}){
    
    const commentsComponents = comments.map((comment)=>{
        return <CommentCard key={comment.id} comment = {comment}/>
    })
    console.log(commentsComponents)
    return (
    <div>
        <Search/>
        {
            showComments? commentsComponents : undefined
        }
        {/* {
            showComments? 
            comments.map((comment)=>{
                return <CommentCard key={comment.id} comment = {comment}/>
            })
            :
            undefined
        } */}
    </div>
    )
}
export default VideoComments