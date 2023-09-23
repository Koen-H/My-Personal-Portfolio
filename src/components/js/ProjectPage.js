import React from 'react';
import PropTypes from 'prop-types';
import ProjectBackground from './ProjectBackground';


function ProjectPage(props) {
  const project = props.project;
  return (
    <section id='project-page' className='page'>
      {/* <ThumbnailHeader project={project} /> */}
      <ProjectBackground project={project}/>
      <section id='project-icons' className='d-flex'>

      </section>
      Project page :D for {project.name}
    </section>
  );


}

export default ProjectPage;
ProjectPage.propTypes = {
  project: PropTypes.object
};




