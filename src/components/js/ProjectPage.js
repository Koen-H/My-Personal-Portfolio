import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectBackground from './ProjectBackground';
import ProjectLogo from './ProjectLogo';
import ProjectDetails from './ProjectDetails';
import ProjectBlocks from './ProjectBlocks';
import NewlineText from './NewlineText';
import RetrieveImages from './RetrieveImages';

import '../css/ProjectPage.css';

function ProjectPage(props) {
  const [project, setProjectData] = useState(props.project);
  const [projectPageFetching, setProjectPageFetching] = useState(true);

  useEffect(() => {
    fetch(`https://koenhankel.nl/api/get_project_page.php?project_ID=${project.ID})`)
      .then((response) => response.json())
      .then((data) => {
        const projectData = data.data;
        setProjectData((prevProject) => ({
          ...prevProject,
          ...projectData,
          CONTENT_BLOCKS: JSON.parse(projectData.CONTENT_BLOCKS),
          BACKGROUND_IMAGES: JSON.parse(projectData.BACKGROUND_IMAGES),
        }));
        setProjectPageFetching(false);
        console.log("Project data gathered")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [project.ID]);

  const [contentBlocks, setContentBlocks] = useState({});
  const [contentFetching, setContentFetching] = useState(true);
  useEffect(() => {
    const getContentBlock = async (ids) => {
      try {
        if (!ids) return;
        const api = 'https://koenhankel.nl/api/get_content_blocks.php';
        const queryString = `ids=${ids.join(',')}`;
        const url = `${api}?${queryString}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        if (result.status == 'success') {
          //Make result object
          const objResult = result.data;
          //Make the gallery_images an array
          Object.keys(objResult).forEach((key) => {
            const item = objResult[key];
            if (item.GALLERY_IMAGES) {
              item.GALLERY_IMAGES = JSON.parse(item.GALLERY_IMAGES);
            }
          });

          console.log("Content block data gathered")
          setContentBlocks(objResult);
          setContentFetching(false);
        }
        else {
          console.error(result);
        }
      } catch (error) {
        console.error('Error', error);

      }
    }
    //Only fetch when project pages finished fetching
    if (!projectPageFetching) getContentBlock(project.CONTENT_BLOCKS);
  }, [project.CONTENT_BLOCKS]);

  const [images, setImages] = useState({});
  const [imageFetching, setImageFetching] = useState(true);//Assume it's fetching by default

  useEffect(() => {
    const fetchImages = async () => {
      const imageIDs = [];

      if (project.LOGO !== null) imageIDs.push(project.LOGO);
      if (project.THUMBNAIL !== null) imageIDs.push(project.THUMBNAIL);
      if (Array.isArray(project.HIGHLIGHTED_IMAGES)) imageIDs.push(...project.HIGHLIGHTED_IMAGES);
      Object.keys(contentBlocks).forEach((key) => {
        const item = contentBlocks[key];
        if (item.GALLERY_IMAGES) {
          imageIDs.push(JSON.parse(item.GALLERY_IMAGES));
        }
      });
      RetrieveImages({ imageIDs, setImages, setImageFetching });
    };
    //Only once everything is loaded
    if (!contentFetching) fetchImages();
  }, [contentFetching]);

  if (projectPageFetching) {
    return <div>Loading {project.PROJECT_NAME}...</div>
  }
  if (contentFetching) {
    return <div>Loading content for {project.PROJECT_NAME}...</div>
  }
  if (imageFetching) {
    return <div>Loading images...</div>
  }

  return (
    <section id='project-page' className='page' style={{ color: 'white' }}>{/*TODO: Get textcolor from DB */}
      <ProjectBackground project={project} images={images} />{/*TODO: ADD VIDEO */}
      <section className='project-page-header' style={{ background: project.HEADER_OVERLAY }}>
        <ProjectLogo project={project} images={images} />
      </section>
      <section id='project-page-content' className='project-page-content' style={{ background: project.OVERLAY }}>
        <ProjectDetails project={project} />{/*TODO: Bring project details back via DB */}
        <section className='project-description'>
          <NewlineText text={project.DESCRIPTION} />
        </section>
        <ProjectBlocks project={project} images={images} contentBlocks={contentBlocks} /> {/*TODO: ADD VIDEO */}
      </section>
    </section>
  );

}

export default ProjectPage;
ProjectPage.propTypes = {
  project: PropTypes.object
};




