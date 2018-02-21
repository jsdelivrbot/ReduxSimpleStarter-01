import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const title = `${video.snippet.title}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={title} />
      </div>
      <div className="details">
        <div className="">{video.snippet.title}</div>
        <div className="">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
