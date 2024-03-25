import React, { useState, useEffect } from "react";
import Feed from "./Feed.js";
import SideMenu from "./SideMenu.js";
import Header from "./Header.js";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(()=>{
    const getSearchResults = async () => {
      try{
    const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              q: query,
              part: "snippet",
              maxResults: 1,
              key: process.env.React_APP_YT_API_KEY,
              type: "video",
              regionCode: "US",
            },
          }
        );
        setVideos(response.data.items);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
  }
  if(query){
    getSearchResults()
  }
}, [query])
    return (
      <div>
        <Header />
        <Feed  videos={videos}/>
      </div>
    );
  }
export default SearchFeed;