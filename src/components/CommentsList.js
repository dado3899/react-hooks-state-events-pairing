import CommentCard from "./CommentCard"
import { useState } from "react"

function CommentsList({comments}){
    const [show,setShow] = useState(true)
    // console.log(comments)=

    const commentsRender = comments.map(comment=>{
        return <CommentCard comment={comment}/>
    })

    return(
        <div>xw
            <button onClick={()=>setShow(!show)}>{show ? "Hide" : "Show"} Comments</button>
            {show? 
                <div>
                    <h2> {comments.length} Comments</h2>
                    <div>
                        {commentsRender}
                    </div>
                </div>:
                <></>
            }
        </div>
    )
}
export default CommentsList