import {useState} from 'react'
import CommentCard from './CommentCard'
function Comments({comments}){
    const [commentsState,setCommentsState] = useState(comments)
    const [showComments,setShowComments] = useState(true)
    const [search, setSearch] = useState("")
    const [sortType,setSortType] = useState("A-Z")
  
    function deleteComments(id){
        const newArr = commentsState.filter(comment=>{
            return comment.id !== id
        })
        setCommentsState(newArr)
    }

    const commentsFilter = commentsState.sort((a,b)=>{
        let comparison1
        let comparison2
        if(sortType==="A-Z"){
            comparison1 = a.user < b.user
            comparison2 = a.user > b.user
        }
        else{
            comparison1 = a.user > b.user
            comparison2 = a.user < b.user
        }

        if(comparison1){
            return -1
        }
        else if(comparison2){
            return 1
        }
        return 0
    })

    const filterredComments = commentsFilter.filter((comment)=>{
        return comment.user.toLowerCase().includes(search.toLowerCase()) || comment.comment.toLowerCase().includes(search.toLowerCase())
    })

    return(
        <div>
            <input onChange={(e)=>setSearch(e.target.value)}></input>
            <button onClick={()=>setShowComments(!showComments)}>{showComments?"Hide":"Show"} Comments</button>
            {showComments ? 
            <div>
                <button onClick={()=>setSortType("A-Z")}>A-Z</button>
                <button onClick={()=>setSortType("Z-A")}>Z-A</button>
                <h1>{commentsState.length} Comments</h1>
                {
                    filterredComments.map((comment)=>{
                        return <CommentCard key={comment.comment} comment={comment.comment} author={comment.user} deleteComments={deleteComments} id={comment.id}/>
                    })
                }
            </div>
            :
            <></>}
            
        </div>
    )   
}
export default Comments