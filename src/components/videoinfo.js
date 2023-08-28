import {useState} from 'react'
function VideoInfo({video,show,setShow}){
    const [upvote,setUpvote] = useState(video.upvotes)
    const [downvote,setDownvote] = useState(video.downvotes)
   
    return(
        <>
            <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h3>{video.title}</h3>
            <p>{video.views} views | Uploaded at {video.createdAt}</p>
            <button onClick={()=>setUpvote(upvote+1)}>{upvote} 👍</button>
            <button onClick={()=>setDownvote(downvote+1)}>{downvote} 👎</button>
            <div>
                {show?
                    <button onClick={()=>setShow(!show)}>Hide Comment</button>:
                    <button onClick={()=>setShow(!show)}>Show Comment</button>
                }
            </div>

        </>
    )
}

export default VideoInfo;