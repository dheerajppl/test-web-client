function VideoPlayer() {
  return (
    <div>
      <video controls>
        <source src="/your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
