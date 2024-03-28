import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import thumbdown from "../Assets/thumb-down.png";
import thumbup from "../Assets/thumb-up.png";
import share from "../Assets/share.png";
import './css/PlayVideo.css';
import UserMessage from "./UserMessage.js";
import DescriptionInfo from "./DescriptionInfo.js";
import { useParams } from "react-router-dom";
import Header from "./Header.js";
import Feed from "./Feed.js";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [published, setpublished] = useState(null);
  const [statistics, setStatistics] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    navigate(`/searchfeed?query=${query}`, { replace: true });
    setQuery("");
  };

  const formatLikeCount = (likeCount) => {
    if (likeCount < 1000) {
      return likeCount.toString(); // Return as it is for counts less than 1000
    } else if (likeCount < 1000000) {
      return Math.floor(likeCount / 1000) + "k"; // Convert to thousands (e.g., 752,659 -> "752k")
    } else if (likeCount < 1000000000) {
      return Math.floor(likeCount / 1000000) + "m"; // Convert to millions (e.g., 7,526,590 -> "7m")
    } else {
      return Math.floor(likeCount / 1000000000) + "b"; // Convert to billions (e.g., 1,234,567,890 -> "1b")
    }
  };
  // console.log("HERES THE VIDEO " + videoId);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.React_APP_YT_API_KEY}&part=snippet,statistics`
    )
      .then((response) => response.json())
      .then((data) => {
        // Check if data is returned and has items
        if (data.items && data.items.length > 0) {
          setVideo(data.items[0]);
          //console.log(data.items[0]);
          setpublished(data.items[0]);
          //console.log(data.items[0].statistics);
          setStatistics(data.items[0].statistics);
        } else {
          console.error("No video found");
        }
      })
      .catch((error) => console.error("Error fetching video:", error));
      
  }, [videoId]);

  useEffect(() => {
    if (video && video.snippet) {
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?id=${video.snippet.channelId}&key=${process.env.React_APP_YT_API_KEY}&part=statistics`
      )
        .then((response) => response.json())
        .then((data) => {
          // Check if data is returned and has items
          if (data.items && data.items.length > 0) {
            setSubscriberCount(data.items[0].statistics.subscriberCount);
          } else {
            console.error("No channel found");
          }
        })
        .catch((error) => console.error("Error fetching channel:", error));
    }
  }, [video]);
  if (!video) {
    return <p>No video available</p>;
  }
  const formattedLikeCount = formatLikeCount(statistics.likeCount);
  const formattedSubCount = subscriberCount ? formatLikeCount(subscriberCount) : "";

  return (
    <>
      <Header 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
        />
      <div className="videoContainer">
        <div>
          <iframe
            id="videoRender"
            title={video.snippet.title}
            width="1500"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
            
          ></iframe>
        </div>
        <h2>{video.snippet.title}</h2>
        <div id="video-info">
        <div id="channel-Name">
          <h3>
            {video.snippet.channelTitle}
          </h3>
          </div>
          <div id="subCount">
          {subscriberCount && (
                <span style={{fontSize:"15px"}}>{formattedSubCount}</span>
              )}
          </div>
          <div id="subscribe-button">
          <div className="inline-flex " role="group" id="subscribe">
              <button
                type="button"

                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-full hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Subscribe
              </button>
            </div>
            </div>
            <p>
              <div
                style={{
                  
                }}
              >
                <div id="like-button">
                <div className="inline-flex " role="group">
                  
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-l-full hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    <img
                      style={{ marginLeft: "5px" }}
                      src={thumbup}
                      className="like-button"
                      alt=""
                    />
                    {formattedLikeCount}
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
                    {statistics.dislikeCount}
                  </button>
                  </div>
                </div></div></p>
                <p>
              
                <div id="share-button">
                <div className="inline-flex " role="group">
                  
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-full hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    <img
                      src={share}
                      className="share"
                      alt=""
                      
                    />{" "}
                    Share
                  </button>
                  </div>
                </div>
            </p>
        </div>
        
        <DescriptionInfo
          published={published.snippet.publishedAt}
          description={video.snippet.description}
          viewCount={statistics.viewCount}
        />
        <div className="userMessage">
          <UserMessage videoId={videoId} comments={statistics.commentCount} />
        </div>
        {/* <div className="videoFeed">
          <Feed />
        </div> */}
      </div>
    </>
  );
};

export default PlayVideo;
