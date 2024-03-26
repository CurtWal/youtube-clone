import React, { useState, useEffect } from "react";
import Feed from "./Feed.js";
import SideMenu from "./SideMenu.js";
import Header from "./Header.js";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const SearchFeed = () => {
  const [newQuery, setnewQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const handleChange = (event) => {
    setnewQuery(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            q: newQuery, // Provide a default query if needed
            part: "snippet",
            maxResults: 5,
            key: process.env.React_APP_YT_API_KEY,
            type: "video",
            regionCode: "US",
          },
        }
      );
      setVideos(response.data.items);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching initial videos: ", error);
    }
  };
  useEffect(() => {
    const getSearchResults = async () => {
      try {
        if (query) {
          const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/search",
            {
              params: {
                q: query,
                part: "snippet",
                maxResults: 5, // Increase the number of results if needed
                key: process.env.React_APP_YT_API_KEY,
                type: "video",
                regionCode: "US",
              },
            }
          );
          setVideos(response.data.items);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
    };
    getSearchResults();
  }, [query]);
  return (
    <div>
      <Header
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={newQuery}
      />
      <Feed videos={videos} />
    </div>
  );
};
export default SearchFeed;
