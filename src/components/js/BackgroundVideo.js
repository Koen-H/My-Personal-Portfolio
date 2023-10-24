import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/BackgroundVideo.css';

function BackgroundVideo(props) {

  const project = props.project;
  const handleVideoEnded = props.handleVideoEnded;
  const backgroundVideo = project.background.video;
  const videoRef = props.videoRef ? props.videoRef : useRef(null);

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
    </section>
  );
}

export default BackgroundVideo;

BackgroundVideo.propTypes = {
  project: PropTypes.object,
  videoRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLVideoElement) }),
  handleVideoEnded: PropTypes.func,
};