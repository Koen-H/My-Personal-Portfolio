import React from 'react';
import PropTypes from 'prop-types';
import '../css/CategoriesSlider.css';
import { propTypes } from 'react-bootstrap/esm/Image';
const placeHolderImage = '/images/placeholder/placeholder.png';

function CategoriesSlider() {
  //Todo, Add a play button next to the figure, which will fade in too a video. The same button can be used to pause the video and it will fade back to the thumbnail image.
  return (
    <section className='categories'>
      <div className='category-slide'>
        <Category name='Games' thumbnail={placeHolderImage} /*color="255,5,5"*/ />
        <Category name='Apps' thumbnail={placeHolderImage} /*color="245,255,5"*/ />
        <Category name='Websites' thumbnail={placeHolderImage} /*color="24,245,213"*/ />
        <Category name='VR' thumbnail={placeHolderImage} /*color="73,23,236"*/ />
      </div>
    </section>
  );
}

export default CategoriesSlider;

function Category(props) {

  const color = props.color ? props.color : '255,255,255'

  return (
    <div className='single-category-borderbox'>
      <div className={'single-category category-' + props.name} style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(${color},0.5) 100%),url(${props.thumbnail})` }}>
        <h3> {props.name}</h3>
      </div>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  color: propTypes.string,
};
