import React, { useEffect, useState } from 'react';
// import HomeThumbnailHeader from './HomeThumbnailHeader';
// import WelcomeBox from './WelcomeBox';
import FeaturedSlider from '../components/js/FeaturedSlider';
// import CategoriesSlider from './CategoriesSlider';
import GithubInfoBox from '../components/js/GithubInfoBox';
import ProjectArchive from '../components/js/ProjectArchive';
import PropTypes from 'prop-types';
import HomeThumbnailHeader from '../components/js/HomeThumbnailHeader';


function Home(props) {

  const projects = props.projects;
  const featuredProjects = projects.filter(project => project.IS_FEATURED === "1");

  const [images, setImages] = useState({});
  const [imagesRetrieved, setImagesRetrieved] = useState(false);

  const retrieveProjectImages = async (projects) => {
    let imageIDs = [];
    projects.forEach(project => {
      if (project.LOGO !== null) {
        imageIDs.push(project.LOGO);
      }
      if (project.THUMBNAIL !== null) {
        imageIDs.push(project.THUMBNAIL);
      }
      if (Array.isArray(project.HIGHLIGHTED_IMAGES)) {
        imageIDs = imageIDs.concat(project.HIGHLIGHTED_IMAGES);
      }
    });

    try {
      const response = await fetch(`https://koenhankel.nl/api/get_images.php?ids=${imageIDs.join(',')}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      setImages(result.data);
      setImagesRetrieved(true);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    retrieveProjectImages(projects);
  }, [projects])

  const [videos, setVideos] = useState({});
  const [videosRetrieved, setVideosRetrieved] = useState(true);//Video not implemented yet

  const retrieveProjectVideos = async (projects) => {
    let videoIDs = [];
    projects.forEach(project => {
      if (project.LOGO !== null) {
        videoIDs.push(project.LOGO);
      }
      if (project.BACKGROUND_VIDEO !== null) {
        videoIDs.push(project.THUMBNAIL);
      }
      if (Array.isArray(project.HIGHLIGHTED_IMAGES)) {
        videoIDs = videoIDs.concat(project.HIGHLIGHTED_IMAGES);
      }
    });

    try {
      // const response = await fetch(`https://koenhankel.nl/api/get_videos.php?ids=${videoIDs.join(',')}`, {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // const result = await response.json();
      // setVideos(result.data);
      // setVideosRetrieved(true);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    retrieveProjectVideos(projects);
  }, [projects])

  if (!imagesRetrieved)
    return <div>Loading images...</div>

  if (!videosRetrieved)
    return <div>Loading videos...</div>

  return (
    <section id='home ' className='page'>
      <HomeThumbnailHeader/>
      <div className='my-container-flex'>
        <div className='col-11 col-lg-10 col-xl-8 '>
          <FeaturedSlider projects={featuredProjects} images={images} videos={videos} />
          <GithubInfoBox />
          {/* <WelcomeBox /> */}
          {/* <CategoriesSlider /> */}
          <ProjectArchive projects={projects} images={images} videos={videos}/>
        </div>
      </div>
    </section>
  );
}

export default Home;

Home.propTypes = {
  projects: PropTypes.array,
};





