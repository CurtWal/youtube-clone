import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from "./components/Video";
import PlayVideo from "./components/PlayVideo"; 
import SearchFeed from "./components/SearchFeed";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/video" element={<Video />} />
      <Route path="/searchfeed" element={<SearchFeed />} />
      <Route path="/video/:videoId" element={<PlayVideo />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
