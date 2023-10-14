import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons';

import '../css/ProjectDetails.css';

function ProjectDetails(props) {
  const project = props.project;

  let details = [];

  if (project.github) {
    details.push(
      <div key="github-detail" className='project-detail-single'>
        <div className='icon icontooltip'><FontAwesomeIcon icon={faGithub} />
          <span className='tooltipText'>Code Available on github</span>
        </div>
      </div>
    );
  }
  if (project.itchio) {
    details.push(
      <div key="itchio-detail" className='project-detail-single'>
        <div className='icon icontooltip'><FontAwesomeIcon icon={faItchIo} />
          <span className='tooltipText'>Game is playable through itchio</span>
        </div>
      </div>
    );
  }

  return (
    <section id='project-details' className='project-details'>
      {details}
    </section>
  );


}

export default ProjectDetails;
ProjectDetails.propTypes = {
  project: PropTypes.object
};




