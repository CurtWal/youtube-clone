import React from "react";
import Header from "./Header.js";
import PlayVideo from "./PlayVideo.js";
import "./css/Video.css";

const Video = ({ location }) => {
  const video = location.state?.video;

  return (
    <>
      <Header />
      <div className="videoPageWrapper">
        {video ? <PlayVideo video={video} /> : <p>No video selected</p>}
      </div>
    </>
  );
};

export default Video;
