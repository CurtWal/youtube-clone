import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import SideMenu from "./SideMenu.js";
import Feed from "./Feed.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [newClassName, setNewClassName] = useState(false);
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

  const MenuIcon = () => {
    setNewClassName((newClassName) => !newClassName);
  };
  let toggleSideMenu = newClassName ? "Side" : "";

  const handleSideMenu = async (event) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            q: query, // Provide a default query if needed
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
    // Function to fetch initial videos when the component mounts
    const fetchInitialVideos = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              q: "Trending", // Provide a default query if needed
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

    // Call the fetchInitialVideos function when the component mounts
    fetchInitialVideos();
  }, []);

  return (
    <div>
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        query={query}
        setQuery={setQuery}
        MenuIcon={MenuIcon}
      />
      <div className="flex">
        <SideMenu
          handleSideMenu={handleSideMenu}
          handleChange={handleChange}
          query={query}
          toggleSideMenu={toggleSideMenu}
        />
        <div className="container">
          <Feed videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default Display;
