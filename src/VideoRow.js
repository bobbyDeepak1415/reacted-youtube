import React from "react";
import "./VideoRow.css";

const VideoRow = ({
  views,

  description,
  timestamp,
  channel,
  title,
  image,
  channelImage,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="videoRow_headline">
          {channel} • {views} views • {timestamp}
        </p>
        <p className="videoRow_description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
