import React, { useEffect, useState } from "react";
import thumbdown from "../Assets/thumb-down.png";
import thumbup from "../Assets/thumb-up.png";
import share from "../Assets/share.png";
import UserMessage from "./UserMessage.js";
import DescriptionInfo from "./DescriptionInfo.js";
import { useParams } from "react-router-dom";
import Header from "./Header.js";
import Feed from "./Feed.js";

const API_KEY = "AIzaSyACZ0u1lBmBNLNDatDLFDHbbazYdSPL968";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [published, setpublished] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`
    )
      .then((response) => response.json())
      .then((data) => {
        // Check if data is returned and has items
        if (data.items && data.items.length > 0) {
          setVideo(data.items[0]);
          console.log(data.items[0]);
          setpublished(data.items[0]);
          
        } else {
          console.error("No video found");
        }
      })
      .catch((error) => console.error("Error fetching video:", error));
  }, [videoId]);
  if (!video) {
    return <p>No video available</p>;
  }
  return (
    <>
    <Header />
    <div className="videoContainer">
      <div>
        <iframe
          id="videoRender"
          title={video.snippet.title}
          width="1500"
          height="500"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          allowFullScreen
          style={{marginTop: "5px", marginLeft: "8px"}}
        ></iframe>
      </div>
      <h2>{video.snippet.title}</h2>
      <div id="video-info">
        <h3>
          {video.snippet.channelTitle}  <div className="inline-flex " role="group">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-full hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  Subscribe
                </button>
              </div>
        </h3>
        <div id="video-stats">
          <p>
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "space-evenly",
              }}
            >
              <div className="inline-flex " role="group">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-l-full hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <img
                    style={{ marginLeft: "5px" }}
                    src={thumbup}
                    className="like_dislike"
                    alt=""
                  />
                  120
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border-t border-b border-gray-200 rounded-r-full hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <img
                    style={{ marginLeft: "10px" }}
                    src={thumbdown}
                    className="like_dislike"
                    alt=""
                  />
                  12
                </button>
              </div>
              <div className="inline-flex " role="group">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-full hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <img
                    src={share}
                    className="like_dislike"
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
      <DescriptionInfo published={published.snippet.publishedAt} description={video.snippet.description} />
      <div className="userMessage">
        <UserMessage />
      </div>
      <div className="videoFeed">
          <Feed />
        </div>
    </div>
    </>
  );
};

export default PlayVideo;
