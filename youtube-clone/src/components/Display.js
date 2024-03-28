import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import SideMenu from "./SideMenu.js";
import Feed from "./Feed.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("");
  const [videos, setVideos] = useState([]);
  const [newClassName, setNewClassName] = useState(false);
  const navigate = useNavigate();

  const handleSideTopic = async (selectedTopic) => {
    setTopic(selectedTopic);
  };
  const handleChange = (event) => {
    setQuery(event.target.value);
    //console.log(event.target.value);
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
      //console.log(response.data);
    } catch (error) {
      console.error("Error fetching initial videos: ", error);
    }
  };
  useEffect(() => {
    // Function to fetch initial videos when the component mounts
    const fetchVideos = async () => {
      try {
        // Customize search query based on the selected topic
        let searchQuery = "";
        switch (topic) {
          case "Home":
            searchQuery = "Top home videos";
            break;
          case "News":
            searchQuery = "Latest news videos";
            break;
          case "Gaming":
            searchQuery = "Gaming videos";
            break;
          case "Music":
            searchQuery = "Trending music videos";
            break;
          case "Sports":
            searchQuery = "Exciting sports videos";
            break;
          case "Learning":
            searchQuery = "Educational videos";
            break;
          case "Trending":
            searchQuery = "Trending videos";
            break;
          default:
            searchQuery = "Default search query";
            break;
        }

        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              q: searchQuery,
              part: "snippet",
              maxResults: 5,
              key: process.env.React_APP_YT_API_KEY,
              type: "video",
              regionCode: "US",
            },
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
    };

    fetchVideos();
  }, [topic]);

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
          handleChange={handleSideTopic}
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
