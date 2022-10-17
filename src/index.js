import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/js/Header';
//import ProjectBox from './components/js/ProjectBox';
import FeaturedSlider from './components/js/FeaturedSlider'

//const placeHolderImage = '/images/placeholder/placeholder.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <FeaturedSlider/>
    {/* <ProjectBox projectName={'Test project'} thumbnailPath={placeHolderImage}/> */}
    {/* <ProjectBox projectName={'A new project'} thumbnailPath={placeHolderImage}/> */}
  </React.StrictMode>
);

reportWebVitals();
