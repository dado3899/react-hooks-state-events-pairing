function VideoDisplay({video}){
    console.log(video.embedUrl)
    return (
        <iframe
        width="919"
        height="525"
        // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        src = {video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
    )
}
export default VideoDisplay