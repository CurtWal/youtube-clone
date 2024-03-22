import React from 'react';
import Header from './Header.js';
import PlayVideo from './PlayVideo.js';
import Feed from './Feed.js';

const Video = ({ location }) => {
  const video = location.state?.video;

  return (
    <>
      <Header />
      <div className='container'>
        {video ? (
          <PlayVideo video={video} />
        ) : (
          <p>No video selected</p>
        )}
      </div>
    </>
  );
};

export default Video;
