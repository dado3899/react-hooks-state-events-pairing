import { useState } from "react"

function VideoInfo({video}){
    const [upvote, setUpvote] = useState(video.upvotes)
    const [downvote, setDownvote] = useState(video.downvotes)

    return(
        <div>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <h4>{video.views} views | {video.createdAt}</h4>
            <button onClick={()=>setUpvote(upvote+1)}>{upvote} 👍</button>
            <button onClick={()=>setDownvote(downvote+1)}>{downvote} 👎</button>
        </div>
    )
}
export default VideoInfo