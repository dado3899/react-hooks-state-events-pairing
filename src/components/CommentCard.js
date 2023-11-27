import {useState} from 'react'
function CommentCard({comment, author, deleteComments, id}){
    const [upvotes, setUpvotes] = useState(0)
    const [downvotes, setDownvotes] = useState(0)
    return (
    <>
        <h2>{author}</h2>
        <p>{comment}</p>
        <button onClick={()=> setUpvotes(upvotes+1)}>{upvotes} Up</button>
        <button onClick={()=> setDownvotes(downvotes+1)}>{downvotes} Down</button>
        <button onClick={()=> deleteComments(id)}>Remove</button>
    </>
    )
}
export default CommentCard