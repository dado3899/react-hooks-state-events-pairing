import video from "../data/video.js";
import VideoInfo from "./videoinfo.js";
import CommentsList from "./commentslist.js";
import {useState} from 'react'

function App() {
  const [show,setShow] = useState(false)
  console.log("Here's your show bool:", show);

  return (
    <div className="App">
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> */}
      <VideoInfo video={video} show={show} setShow={setShow}/>
      <div>
        <br/>
        <CommentsList comments={video.comments} show={show}/>
      </div>
      
    </div>
  );
}

export default App;
