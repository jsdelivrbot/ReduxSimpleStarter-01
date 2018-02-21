import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li
      role="presentation"
      onClick={() => {
        onVideoSelect(video);
      }}
      onKeyPress={() => {
        onVideoSelect(video);
      }}
      className="list-group-item"
    >
      <div className="video-list media">
        <img className="media-object" alt="" src={imageUrl} />
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </li>
  );
};

export default VideoListItem;
