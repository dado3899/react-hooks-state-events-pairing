import video from "../data/video.js";
import VideoDisplay from "./videodisplay.js";
import VideoDetail from "./videodetail.js";
import VideoComments from "./videocomments.js";
import { useState } from "react";
import Search from "./searchbar.js";

function App() {
  const [showComments, setShowComments] = useState(true)
  console.log("Here's your data:", video);

  return (
    <div className="App">
      {/* video */}
      <VideoDisplay video = {video}/>
      {/* video details */}
      <VideoDetail video={video} showComments={showComments} setShowComments={setShowComments}/>
      {/* video comments */}
      <VideoComments comments={video.comments} showComments={showComments}/>
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> */}
    </div>
  );
}

export default App;
