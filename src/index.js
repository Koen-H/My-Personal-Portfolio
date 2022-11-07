import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/style.css';
import './css/modern.css';
//import './css/matrix.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/js/Header';
import WelcomeBox from './components/js/WelcomeBox';
import FeaturedSlider from './components/js/FeaturedSlider';
import CategoriesSlider from './components/js/CategoriesSlider';
import OverviewFilter from './components/js/OverviewFilter';
import GithubInfoBox from './components/js/GithubInfoBox';

// import { Col, Container, Row } from 'react-bootstrap';

//TODO: Based on database
const projects = [
  {
    id : 0,
    "name": "Super Xenon Galaxy",
    "usp": "In Super Xenon Galaxy you use the controller to move around space and collect cookies by matching the right color. Build up a streak and gain a speed and point boost! But beware for the enemies as they can bring you to a hold!",
    date: '22-11-2022',
    imageurl: ["/soft-coded/xenon/Image1.png", "/soft-coded/xenon/Image2.png", "/soft-coded/xenon/Image3.png", "/soft-coded/xenon/Image4.png"],
    videourl: "/soft-coded/xenon/superxenongalaxytrailer-1.mp4",
    projectCategories: [
      'Games',
    ],
    customCategories: [
      'My Recommendations'
    ],
  },
  {
    id : 1,
    "name": "Tetris",
    "usp": "The original Tetris, but with a twist! Tetris is the same Tetris game as everyone knows, but in this version the levels are shaped in patterns making it harder(or easier) to play.",
    date: '22-11-2022',
    imageurl: ["/soft-coded/tetris/Image1.png", "/soft-coded/tetris/Image2.png", "/soft-coded/tetris/Image3.png", "/soft-coded/tetris/Image4.png"],
    videourl: "/soft-coded/tetris/movie.mkv",
    projectCategories: [
      'Games',
    ],
    customCategories: [
      'My Recommendations'
    ],
  },
  {
    id : 2,
    "name": "Sea of Debris",
    "usp": "The sea is full of junk, plastic is everywhere. In this fun VR experience it's your job to clean up the ocean!",
    date: '22-11-2022',
    imageurl: ["/soft-coded/sea/Image1.png", "/soft-coded/sea/Image2.gif", "/soft-coded/sea/Image3.gif", "/soft-coded/sea/Image4.png"],
    videourl: "/soft-coded/sea/TrailerAE_V3.mp4",
    projectCategories: [
      'Games', 'Virtual Reality'
    ],
    customCategories: [
      'My Recommendations', 'Recent'
    ],
  }
]


//const placeHolderImage = '/images/placeholder/placeholder.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <section className='content'>
      <div className='my-container-flex'>
        <div className='my-col'><WelcomeBox /></div>
        <div className='my-col-prio'>
          <FeaturedSlider projects={projects} />
          <CategoriesSlider />
          <GithubInfoBox />
          <OverviewFilter />
        </div>
        {/* <div className='my-col'> This is on the right side</div> */}
      </div>
    </section>
    <footer>footer</footer>

    {/*  */}
    {/* <ProjectBox projectName={'A new project'} thumbnailPath={placeHolderImage}/> */}
  </React.StrictMode>
);

reportWebVitals();
