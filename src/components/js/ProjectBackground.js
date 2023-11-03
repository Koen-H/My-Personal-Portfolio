import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import BackgroundVideo from './BackgroundVideo';
import BackgroundVideoControls from './BackgroundVideoControls';


import '../css/ProjectBackground.css';

function ProjectBackground(props) {

  const project = props.project;
  const backgroundCSS = project.background.css;

  const backgroundVideo = project.background.video;
  const videoRef = useRef(null);
  const [videoEnded, SetVideoEnded] = useState(false);

  function handleVideoEnded() {
    SetVideoEnded(true);
  }

  const backgroundImagesEnabled = (!backgroundVideo || videoEnded);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = project.background.images;
  const backgroundImage = backgroundImages[currentImageIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, backgroundImages.length]);
//TODO: Fade

  return (
    <>
      <section id='project-background' className='project-background' style={{ background: backgroundCSS }}>
        {(backgroundImagesEnabled) && backgroundImages.length > 0 && (
          <img src={backgroundImage} alt={`Background image for ${project.name}`} />
        )}
        {(backgroundVideo && !videoEnded) && (
          <BackgroundVideo project={project} handleVideoEnded={handleVideoEnded} videoRef={videoRef} />
        )}
      </section>
      {(backgroundVideo && !videoEnded) && (
        <BackgroundVideoControls videoRef={videoRef} autoPlay={true} />
      )}

    </>
  )
}

export default ProjectBackground;

ProjectBackground.propTypes = {
  project: PropTypes.object
};