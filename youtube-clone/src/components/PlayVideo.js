import React, { Component } from 'react'
import Vid1 from "../Assets/Grid - 82515.mp4";
import "./css/PlayVideo.css";

 const PlayVideo = () => {
    return (
      <div className='videoContainer'>
      <div >
        <video id="videoRender" src={Vid1} controls autoPlay muted></video>
      </div>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton <button id="ytSub">Subscribe</button></h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
    )
  }
export default  PlayVideo