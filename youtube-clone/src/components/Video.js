import React, { Component } from 'react'
import PlayVideo from "./PlayVideo.js";
import Feed from "./Feed.js";
import Header from "./Header.js";
import UserMessage from "./UserMessage.js";
import "./css/Video.css";
export default class Video extends Component {
  render() {
    return (
      <>
      <Header/>
      <div className='container'>
        <PlayVideo/>
        <div className="videoFeed">
        <Feed/>
        </div>
      </div>
      </>
    )
  }
}
