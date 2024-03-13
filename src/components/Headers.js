import { useState } from "react"
function Headers({video}){
    const [upvotes,setUpvotes] = useState(video.upvotes)
    const [downvotes,setDownvotes] = useState(video.downvotes)

    return(
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={()=>setUpvotes(upvotes+1)}>{upvotes}👍</button>
            <button onClick={()=>setDownvotes(downvotes+1)}>{downvotes}👎</button>
        </div>
    )
}
export default Headers