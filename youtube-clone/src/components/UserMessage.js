import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/UserMessage.css";
import thumbup from "../Assets/thumb-up.png";

import pic from "../Assets/Bulbasaur.png";

const UserMessage = ({ videoId }) => {
  const [getComments, setGetComments] = useState([]);
  const getVideoComments = async (videoId) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/commentThreads",
        {
          params: {
            part: "snippet",
            videoId: videoId,
            maxResults: 5, // Adjust as needed
            key: process.env.React_APP_YT_API_KEY,
          },
        }
      );

      // Handle response data (comments)
      console.log(response.data.items);
      setGetComments(response.data.items);
      return response.data.items; // Return comments array
    } catch (error) {
      console.error("Error fetching comments: ", error);
      return []; // Return empty array or handle error
    }
  };

  useEffect(() => {
    getVideoComments(videoId);
  }, [videoId]);
  if (!getComments) {
    return <p>No comments available</p>;
  }

  //snippet
  //topLevelComment
  //snippet
  //publishedAt
  //authorDisplayName
  //authorProfileImageUrl
  //textDisplay
  //likeCount

  return (
    <div id="users">
      <div className="userMessage">
        <img
          src={pic}
          className="profile_pic"
          style={{ marginBottom: "30px" }}
          alt=""
        ></img>
        <div className="message">
          <input
            style={{ width: "950px" }}
            placeholder="Add a comment..."
          ></input>
          <hr style={{ marginBottom: "30px", marginTop: "0px" }} />
        </div>
      </div>
      {getComments.map((comment) => (
        <div className="userMessage" key={comment.id}>
          <img
            src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
            className="profile_pic"
            alt="profile pic"
          />
          <div className="message">
            <p>
              {comment.snippet.topLevelComment.snippet.authorDisplayName}{" "}
              {comment.snippet.topLevelComment.snippet.publishedAt}
            </p>
            <p style={{ marginTop: "0" }}>
              {comment.snippet.topLevelComment.snippet.textDisplay}
            </p>
            <p>
              <img src={thumbup} className="like_dislike" alt="" />
              {comment.snippet.topLevelComment.snippet.likeCount}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserMessage;
