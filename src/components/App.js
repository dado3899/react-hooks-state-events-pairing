import video from "../data/video.js";
import VideoDescription from "./VideoDescription.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      {/* Video Desc */}
      <VideoDescription video={video}/>
      {/* Comments */}
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
