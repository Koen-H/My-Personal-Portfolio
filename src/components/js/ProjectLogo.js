import React from 'react';
import PropTypes from 'prop-types';

import '../css/ProjectLogo.css';


function ProjectLogo(props) {
  const project = props.project;
  const images = props.images;
  return (
    <section className='project-logo'>
      {(project.LOGO) ? (
        <div className='project-logo-container'>
          <img src={images[project.LOGO].ORIGINAL} alt={`Logo of ${project.PROJECT_NAME}`} />
        </div>
      ) : <h1>{project.PROJECT_NAME}</h1>}
      <p>{project.USP}</p>
    </section>
  );
}

export default ProjectLogo;
ProjectLogo.propTypes = {
  project: PropTypes.object,
  images: PropTypes.object,
};




