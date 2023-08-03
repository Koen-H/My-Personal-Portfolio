import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

import '../css/ThumbnailHeader.css';


function ThumbnailHeader(props) {
  const project = props.project;

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

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('msfullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('msfullscreenchange', handleFullScreenChange);
    };
  }, []);


  return (
    <section className='header-thumb'>
      <section className='header-thumb-video'>
        <video
          poster={project.imageurl[0]}
          src={project.videourl}
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

export default ThumbnailHeader;


ThumbnailHeader.propTypes = {
  project: PropTypes.object
};




