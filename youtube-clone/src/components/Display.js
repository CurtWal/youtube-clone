import React, { useState, useEffect } from 'react'
import Header from './Header.js';
import SideMenu from './SideMenu.js';
import Feed from './Feed.js';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const API_KEY = 'AIzaSyACZ0u1lBmBNLNDatDLFDHbbazYdSPL968';

const Display = () => {
    const [query, setQuery] = useState('');
    const [videos, setVideos] = useState([]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    

    const handleSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        // window.location.href='/searchfeed'
        try {
            
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    q: query,
                    part: 'snippet',
                    maxResults: 1,
                    key: API_KEY,
                },
            });
            setVideos(response.data.items);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching videos: ', error);
        }
    };

    useEffect(() => {
        // Function to fetch initial videos when the component mounts
        const fetchInitialVideos = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        q: 'Trending', // Provide a default query if needed
                        part: 'snippet',
                        maxResults: 1,
                        key: API_KEY,
                    },
                });
                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching initial videos: ', error);
            }
        };

        // Call the fetchInitialVideos function when the component mounts
        fetchInitialVideos();
    }, []); 

    return (
        <div>
            <Header handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
            <div className="flex">
                <SideMenu handleSubmit={handleSubmit} handleChange={handleChange} query={query}/>
                <div className='container'>
                    <Feed videos={videos} />
                </div>
            </div>
        </div>
    );
}

export default Display;
