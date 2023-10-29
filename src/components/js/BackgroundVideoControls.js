import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import '../css/BackgroundVideo.css';

function BackgroundVideoControls(props) {
  const [isPlaying, setIsPlaying] = useState(props.autoPlay);
  const changeAudioWithFullscreen = true;


  const handlePlayPause = () =>{
    const videoElement = props.videoRef.current;
    videoElement.paused ? videoElement.play() : videoElement.pause();
    setIsPlaying(!videoElement.paused);
  };
  
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
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('MSFullscreenChange', handleFullScreenChange);
  };

  const handleFullScreenChange = () => {
    const fullscreenElement =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;
    if (changeAudioWithFullscreen) {
      props.videoRef.current.muted = !fullscreenElement;
      props.videoRef.current.volume = fullscreenElement ? 0.25 : 0;
    }
    if (!fullscreenElement) RemoveListeners();
  }

  function RemoveListeners() {
    document.removeEventListener('fullscreenchange', handleFullScreenChange);
    document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
    document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
  }


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
  autoPlay: PropTypes.bool,
};

export default BackgroundVideoControls;