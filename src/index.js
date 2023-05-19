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

//TODO: Import from a database


//const placeHolderImage = '/images/placeholder/placeholder.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Content />
    
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
