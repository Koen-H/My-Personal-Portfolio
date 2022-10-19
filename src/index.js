import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './style.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/js/Header';
//import ProjectBox from './components/js/ProjectBox';
import FeaturedSlider from './components/js/FeaturedSlider'
// import { Col, Container, Row } from 'react-bootstrap';




//const placeHolderImage = '/images/placeholder/placeholder.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className='my-container-flex'>
      <div className='my-col'> This is on the side </div>
      <div className='my-col-prio'><FeaturedSlider /></div>
      <div className='my-col'> This is on the side</div>
    </div>


    {/* <ProjectBox projectName={'Test project'} thumbnailPath={placeHolderImage}/> */}
    {/* <ProjectBox projectName={'A new project'} thumbnailPath={placeHolderImage}/> */}
  </React.StrictMode>
);

reportWebVitals();
