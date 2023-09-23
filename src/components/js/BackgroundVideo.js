import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import '../css/BackgroundVideo.css';

function BackgroundVideo(props) {

  const project = props.project;
  const handleVideoEnded = props.handleVideoEnded;
  const backgroundVideo = project.background.video;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  if (backgroundVideo) {
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
      };
    }, []);
  }
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
    videoElement.paused ? videoElement.play() : videoElement.pause();
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

  return (
    <section className='project-background-video'>
          <video
            src={backgroundVideo}
            autoPlay
            muted
            ref={videoRef}
          />
          <section className='background-video-controls'>
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

export default BackgroundVideo;

BackgroundVideo.propTypes = {
  project: PropTypes.object,
  handleVideoEnded: PropTypes.func
};