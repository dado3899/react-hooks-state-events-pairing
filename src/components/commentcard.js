import { useState } from "react";

function CommentCard({comment}){
    // console.log(comment)
    const [videoLikes, setVideoLikes] = useState(0)
    const [videoDislikes, setVideoDislikes] = useState(0)
    
    return(
        <>
            <h1>{comment.user}</h1>
            <p>{comment.comment}</p>
            <button onClick={()=>setVideoLikes(videoLikes+1)}>{videoLikes} 👍</button>
            <button onClick={()=>setVideoDislikes(videoDislikes+1)}>{videoDislikes} 👎</button>
        </>
    )
}
export default CommentCard