import React from 'react';
import PropTypes from 'prop-types';
import ProjectBackground from './ProjectBackground';
import ProjectLogo from './ProjectLogo';
import ProjectDetails from './ProjectDetails';
import ProjectBlocks from './ProjectBlocks';
import NewlineText from './NewlineText';

import '../css/ProjectPage.css';

function ProjectPage(props) {
  const project = props.project;

  return (
    <section id='project-page' className='page' style={{ color: project.css.textColor }}>
      <ProjectBackground project={project} />
      <section className='project-page-header' style={{ background: project.background.headerOverlay }}>
        <ProjectLogo project={project} />
      </section>
      <section id='project-page-content' className='project-page-content' style={{ background: project.background.overlay }}>
        <ProjectDetails project={project} />
        <section className='project-description'>
          <NewlineText text={project.description} />
        </section>
        <ProjectBlocks project={project} />
      </section>
    </section>
  );

}

export default ProjectPage;
ProjectPage.propTypes = {
  project: PropTypes.object
};




