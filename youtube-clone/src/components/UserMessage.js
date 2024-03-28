import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/UserMessage.css";
import thumbup from "../Assets/thumb-up.png";

import pic from "../Assets/Bulbasaur.png";

const UserMessage = ({ videoId, comments }) => {
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
  const formatDate = (publishedAt) => {
    console.log("Published At:", publishedAt); // Log the publishedAt value to see its format
    const publishedDate = new Date(publishedAt);
    console.log("Parsed Date:", publishedDate); // Log the parsed date
    if (isNaN(publishedDate.getTime())) {
      console.error("Invalid date format:", publishedAt);
      return ""; // Return empty string if date format is invalid
    }
    const month = publishedDate.toLocaleString("default", { month: "short" }); // Get full month name
    const date = publishedDate.getDate();
    return `${month} ${date}`;
  };
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
      <h6>{comments} comments</h6>
      <div className="userMessage">
        <img
          src={pic}
          className="profile_pic"
          style={{ marginBottom: "30px" }}
          alt=""
        ></img>
        <div className="message">
          <input
            
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
              {formatDate(comment.snippet.topLevelComment.snippet.publishedAt)}
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
