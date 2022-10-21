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

// import { Col, Container, Row } from 'react-bootstrap';




//const placeHolderImage = '/images/placeholder/placeholder.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <section className='content'>
      <div className='my-container-flex'>
        <div className='my-col'><WelcomeBox /></div>
        <div className='my-col-prio'>
          <FeaturedSlider />
          <CategoriesSlider/>
        </div>
        <div className='my-col'> This is on the right side</div>
      </div>
    </section>

    {/*  */}
    {/* <ProjectBox projectName={'A new project'} thumbnailPath={placeHolderImage}/> */}
  </React.StrictMode>
);

reportWebVitals();
