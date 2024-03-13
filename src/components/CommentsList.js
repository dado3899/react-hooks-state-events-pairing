import { useState } from "react"
import Comments from "./Comments"

function CommentsList({video}){
    const [hide,setHide] = useState(false)
    const [search,setSearch] = useState("")
    const [allComments, setAllComments] = useState(video.comments)

    function deleteComment(id){
        const deletedComments = allComments.filter((comment)=>{
            return comment.id !== id
        })
        setAllComments(deletedComments)
    }

    const filteredComments = allComments.filter((comment)=>{
        return comment.user.toLowerCase().includes(search.toLowerCase())
    })
    // console.log(filteredComments)
    const commentComponents = filteredComments.map((comment)=>{
        return <Comments key={comment.id} deleteComment={deleteComment} comment={comment}/>
    })

    return(
        <div>
            <button onClick={()=>setHide(!hide)}>{hide?"Show":"Hide"} Comments</button>
            {
                hide?<></> :
                <div>
                    <input onChange={(e)=>setSearch(e.target.value)}/>
                    <h2>{filteredComments.length} Comments</h2>
                    <div>
                        {commentComponents}
                    </div>
                </div>
            }
            
        </div>
    )
}
export default CommentsList