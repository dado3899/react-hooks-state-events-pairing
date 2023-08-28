import CommentCard from "./comment"
import {useState} from 'react'
function CommentsList({comments, show}){
    const [shownComments,setShownComments] = useState(comments)

    function deleteComment(id){
        console.log(id)
        const newComments = shownComments.filter((indivdualComment)=>{
            if(indivdualComment.id === id){
                return false
            }
            return true
        })
        console.log(newComments)
        setShownComments(newComments)
    }

    const commentsComponents = shownComments.map((indivdualComment)=>{
        return <CommentCard key={indivdualComment.id} indivdualComment={indivdualComment} deleteComment={deleteComment}/>
    })

    return(
        <div>
            { show ?
                <>
                    <h3>{shownComments.length} Comments</h3>
                    {commentsComponents}
                </>:
                null
            }
        </div>
    )
}

export default CommentsList