import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/BackgroundVideo.css';

function BackgroundVideo(props) {

  const project = props.project;
  const handleVideoEnded = props.handleVideoEnded;
  const backgroundVideo = project.background.video;
  const videoRef = props.videoRef ? props.videoRef : useRef(null);

  if (backgroundVideo && !project.background.videoLoop) {
    useEffect(() => {
      videoRef.current.addEventListener('ended', handleVideoEnded);
      
      return () => {
       
      };
    }, []);
  }
  
  

  return (
    <section className='project-background-video'>
      <video
        src={backgroundVideo}
        autoPlay
        muted
        loop={project.background.videoLoop}
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