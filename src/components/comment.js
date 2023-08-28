
function CommentCard({indivdualComment,deleteComment}){
    return(
    <div>
        <h3>{indivdualComment.user}</h3>
        <p>{indivdualComment.comment}</p>
        <button onClick={()=>deleteComment(indivdualComment.id)}>REMOVE</button>
    </div>)
}

export default CommentCard