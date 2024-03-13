import { useState } from "react"

function Comments({comment,deleteComment}){
    const [upvotes,setUpvotes] = useState(0)
    const [downvotes,setDownvotes] = useState(0)
    return(
        <div>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
            <button onClick={()=>setUpvotes(upvotes+1)}>{upvotes}👍</button>
            <button onClick={()=>setDownvotes(downvotes+1)}>{downvotes}👎</button>
            <button onClick={()=>deleteComment(comment.id)}>DELETE</button>
        </div>
    )
}
export default Comments