import React, { Component } from "react";
import Vid1 from "../Assets/Grid - 82515.mp4";
import "./css/PlayVideo.css";
import UserMessage from "./UserMessage.js";
import DescriptionInfo from "./DescriptionInfo.js";
import thumbdown from "../Assets/thumb-down.png";
import thumbup from "../Assets/thumb-up.png";
import share from "../Assets/share.png";
const PlayVideo = () => {
  return (
    <div className="videoContainer">
      <div>
        <video id="videoRender" src={Vid1} controls autoPlay muted></video>
      </div>
      <h2>Picture video on background color changer</h2>
      <div id="video-info">
        <h3>
          Curtick Walton <button id="ytSub">Subscribe</button>
        </h3>
        <div id="video-stats">
          <p>
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                flexDirection: "row",
                textAlign: "center",
                justifyContent:"space-evenly"
              }}
            >
              <div class="inline-flex " role="group">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-l-full hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <img
                    style={{ marginLeft: "5px" }}
                    src={thumbup}
                    class="like_dislike"
                    alt=""
                  />
                  120
                </button>
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border-t border-b border-gray-200 rounded-r-full hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <img
                    style={{ marginLeft: "10px" }}
                    src={thumbdown}
                    class="like_dislike"
                    alt=""
                  />
                  12
                </button>
              </div>
              <div class="inline-flex " role="group">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-full hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <img
                    src={share}
                    class="like_dislike"
                    alt=""
                    style={{ marginLeft: "2px" }}
                  />{" "}
                  Share
                </button>
              </div>
            </div>
          </p>
        </div>
      </div>
      <DescriptionInfo />
      <div class="userMessage">
        <UserMessage />
      </div>
    </div>
  );
};
export default PlayVideo;
