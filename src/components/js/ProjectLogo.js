import React from 'react';
import PropTypes from 'prop-types';

import '../css/ProjectLogo.css';


function ProjectLogo(props) {
  const project = props.project;

  return (
    <section className='project-logo'>
      {(project.logo) ? (
        <div className='project-logo-container'>
          <img src={project.logo} alt={`Logo of ${project.name}`} />
        </div>
      ) : <h1>{project.name}</h1>}
      <p>{project.usp}</p>
    </section>
  );
}

export default ProjectLogo;
ProjectLogo.propTypes = {
  project: PropTypes.object
};




