import React, {useState} from 'react';
import PropTypes from 'prop-types';
import BackgroundVideo from './BackgroundVideo';

import '../css/ProjectBackground.css';

function ProjectBackground(props) {

  const project = props.project;
  const backgroundCSS = project.background.css;

  const backgroundVideo = project.background.video;
  const [videoEnded, SetVideoEnded] = useState(false);

  function handleVideoEnded() {
    SetVideoEnded(true);
    setBackgroundImage(project.background.images[1]);
  }

  const backgroundImages = project.background.images;

  const [backgroundImage, setBackgroundImage] = useState(project.background.images[0])

  return (
    <section id='project-background' className='project-background' style={{ background: backgroundCSS }}>
      {(!backgroundVideo || videoEnded) && backgroundImages.length > 0 && (
        <img src={backgroundImage} alt={`Background image for ${project.name}`} />
      )}
      {(backgroundVideo && !videoEnded) && (
        <BackgroundVideo project={project} handleVideoEnded={handleVideoEnded}/>
      )}
    </section>
  );


}

export default ProjectBackground;

ProjectBackground.propTypes = {
  project: PropTypes.object
};