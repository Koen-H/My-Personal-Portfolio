import React from 'react';
import PropTypes from 'prop-types';
import '../css/Header.css';

function ProjectBox(props) {
  //Todo, Add a play button next to the figure, which will fade in too a video. The same button can be used to pause the video and it will fade back to the thumbnail image.
  return (
    <div>
      <h2>{props.projectName}</h2>
      <figure>
        <img src={props.thumbnailPath} alt={'A thumbnail image of' + props.projectName}></img>
      </figure>
      <p>{props.projectSummary}</p>

    </div>
  );
}


ProjectBox.propTypes = {
  projectName: PropTypes.string.isRequired,
  thumbnailPath: PropTypes.string.isRequired,
  projectSummary: PropTypes.string,

};

export default ProjectBox;





