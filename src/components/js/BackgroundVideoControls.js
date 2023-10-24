import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import '../css/BackgroundVideo.css';

function BackgroundVideoControls(props) {
  const [isPlaying, setIsPlaying] = useState(true);
  const handleFullScreen = () => {
    const videoElement = props.videoRef.current;
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
    const videoElement = props.videoRef.current;
    videoElement.paused ? videoElement.play() : videoElement.pause();
    setIsPlaying(!videoElement.paused);
  };

  return (
    <section className='background-video-controls'>
      <span onClick={handlePlayPause}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </span>
      <span onClick={handleFullScreen} style={{ cursor: 'pointer' }}>
        <FontAwesomeIcon icon={faExpand} />
      </span>
    </section>
  );
}

BackgroundVideoControls.propTypes = {
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLVideoElement),
  }),
};

export default BackgroundVideoControls;