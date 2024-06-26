import video from "../data/video.js";
import VideoInfo from "./VideoInfo.js";
import CommentsList from "./CommentsList.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoInfo video={video}/>
      <CommentsList comments={video.comments}/>
    </div>
  );
}

export default App;
