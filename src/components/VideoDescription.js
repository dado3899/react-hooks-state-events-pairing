import {useState} from 'react'
function VideoDescription({video}){
    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)
    return(
        <div>
            <h1>{video.title}</h1>
            <p> {video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={()=> setUpvotes(upvotes+1)}>{upvotes} Up</button>
            <button onClick={()=> setDownvotes(downvotes+1)}>{downvotes} Down</button>
        </div>
    )
}

export default VideoDescription