import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/style.css';
import './css/modern.css';
//import './css/matrix.css'; //Try out the matrix css! I think it has a cool theme to it.
import reportWebVitals from './reportWebVitals';
import Header from './components/js/Header';

import Content from './components/js/Content';
import Footer from './components/js/Footer';
import HomeThumbnailHeader from './components/js/HomeThumbnailHeader';

//TODO: Import from a database
const projects = [
  {
    id: 0,
    name: "Super Xenon Galaxy",
    usp: "In Super Xenon Galaxy you use a custom controller to match color and collect cookies around space!",
    date: '29-11-2021',
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
    id: 1,
    name: "Tetris",
    usp: "Tetris is the same Tetris game as everyone knows, but in this version the levels are shaped in patterns making it harder (or easier) to play.",
    date: '27-01-2022',
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
    id: 2,
    name: "The Rolling cones",
    usp: "In The Rolling Cones, you play around as a pinecone, placeobjects around the level to reach new areas and solve puzzles.",
    date: '12-05-2022',
    imageurl: ["/soft-coded/cones/image1.png", "/soft-coded/cones/image2.png", "/soft-coded/cones/image3.png", "/soft-coded/cones/image4.png"],
    videourl: "/soft-coded/cones/Trailercones.mp4",
    projectCategories: [
      'Games',
    ],
    customCategories: [

    ],
  },
  {
    id: 3,
    name: "Sea of Debris",
    usp: "The sea is full of junk, plastic is everywhere. In this fun VR experience it's your job to clean up the ocean!",
    date: '23-09-2022',
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
    <HomeThumbnailHeader projects={projects}/>

    {/* <ThumbnailHeader project={projects[0]} /> */}
    <Content />
    
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
