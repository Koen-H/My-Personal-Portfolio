import React from 'react';
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

  return (
    <section id='home ' className='page'>
     <HomeThumbnailHeader projects={projects} />
      <div className='my-container-flex'>
        <div className='col-11 col-lg-10 col-xl-8 '>
          <FeaturedSlider projects={projects} />
          <GithubInfoBox />
          {/* <WelcomeBox /> */}
          {/* <CategoriesSlider /> */}
          <ProjectArchive projects={projects}/>
        </div>
      </div>
    </section>
  );
}

export default Home;

Home.propTypes = {
  projects: PropTypes.array,
};





