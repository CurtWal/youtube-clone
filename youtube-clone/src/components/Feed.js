import React from 'react';
import "./css/Feed.css";
import { Link } from "react-router-dom";
import pic from "../Assets/b1.png";
const Feed = ({ videos }) => {
  const filterVideos = videos?.filter(video => video.id.kind === "youtube#video");
  return (
    <div className="feed">
      {filterVideos?.map((video) => (
        <div className='card' key={video.id.videoId}>
          <Link to={{ pathname: `/video/${video.id.videoId}`, state: { video } }} style={{ textDecoration: 'none', color:"black"}}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <div className='Title'>
            <h2>{video.snippet.title}</h2>
            <h3>{video.snippet.channelTitle}</h3>
            </div>
          </Link>
        </div>
      ))}
        {/* <div className='card' style={{width:"25%"}}>
          <Link to={{ pathname: `/video` }} style={{ textDecoration: 'none', color:"black"}}>
            <img
              src="https://i.ytimg.com/vi/BMVyGYekpew/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeZLL1PItsw2ZIn5kPPgQa-Pg1Lg"
              alt="picture"
              width="100%"
            />
            <div className='Title'>
            <h2>A round long long long long long long long long long long VIdeo  vdvevsvs vs  vasvsvs vsvsvs  vesvwefw fwsvsdv </h2>
            <h3>TheBlock  <p> 12 hours ago</p></h3>
            </div>
            </Link>
            </div> */}
    </div>
  );
};

export default Feed;
