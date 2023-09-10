import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

import '../css/HomeThumbnailHeader.css';
const videos = require.context('../../../public/content/homepage-header-videos/', true);
const videoFileNames = videos.keys().map(key => '/content/homepage-header-videos/' + key.replace('./', ''));


function HomeThumbnailHeader() {

  const [currentVideo, setCurrentVideo] = useState(0);
  const video = videoFileNames[currentVideo];
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleFullScreen = () => {
    const videoElement = videoRef.current;

    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }
  };

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
    setIsPlaying(!videoElement.paused);
    
  };

  const handleFullScreenChange = () => {
    const fullscreenElement =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;

    videoRef.current.muted = !fullscreenElement;
    videoRef.current.volume = fullscreenElement ? 0.25 : 0;
  };

  function handleVideoEnded() {
    setCurrentVideo((prevCurrentProject) => {
      const nextIndex = prevCurrentProject + 1;
      return nextIndex === videoFileNames.length ? 0 : nextIndex;
    });
  }


  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('msfullscreenchange', handleFullScreenChange);
    videoRef.current.addEventListener('ended', handleVideoEnded);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('msfullscreenchange', handleFullScreenChange);
      videoRef.current.removeEventListener('ended', handleVideoEnded);
    };
  }, []);


  return (
    
    <section className='header-thumb'>
      <section className='header-thumb-video'>
        <video
          src={video}
          autoPlay
          muted
          ref={videoRef}
        />
      </section>
      <section className='header-thumb-overlay'><h1></h1>

      </section>
      <section className='header-thumb-controls'>
        <span onClick={handlePlayPause}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </span>
        <span onClick={handleFullScreen} style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faExpand} />
        </span>
      </section>


    </section>
  );


}

export default HomeThumbnailHeader;


HomeThumbnailHeader.propTypes = {
  projects: PropTypes.array
};




