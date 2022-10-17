import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import '../css/FeaturedSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,/* Navigation, Pagination*/} from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const placeHolderImage = '/images/placeholder/placeholder.png';
const placeHolderImage1 = '/images/placeholder/placeholder1.png';
const placeHolderImage2 = '/images/placeholder/placeholder2.png';
const placeHolderImage3 = '/images/placeholder/placeholder3.png';
const placeHolderImage4 = '/images/placeholder/placeholder4.png';

function FeaturedSlider() {
  return (
    <div>
      <h1> Featured </h1>
      <div>
        <Swiper
          modules={[Autoplay]}
          direction={'horizontal'}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
          }}
          // fadeEffect={{
          //   crossFade: true
          // }}

        >
          <SwiperSlide><SingleFeaturedSlider /></SwiperSlide>
          <SwiperSlide><SingleFeaturedSlider /></SwiperSlide>
          <SwiperSlide><SingleFeaturedSlider /></SwiperSlide>
          <SwiperSlide><SingleFeaturedSlider /></SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
}


FeaturedSlider.propTypes = {

};

export default FeaturedSlider;

function SingleFeaturedSlider() {

  const defaultThumbnailImage = placeHolderImage;
  const subThumbnailImage1 = placeHolderImage1;
  const subThumbnailImage2 = placeHolderImage2;
  const subThumbnailImage3 = placeHolderImage3;
  const subThumbnailImage4 = placeHolderImage4;
  const [thumbnailImage, setThumbnailImage] = useState(defaultThumbnailImage);

  function handleSubThumbnailHoverEnter(e, hoverThumbnail) {
    e.currentTarget.style.opacity = 1;
    setThumbnailImage(hoverThumbnail);
  }

  function handleSubThumbnailHoverLeave(e) {

    e.currentTarget.style.opacity = 0.6;
    setThumbnailImage(placeHolderImage);
  }



  return (
    <div>
      <div className='single-featured-slider'>
        <div className='single-featured-slider-thumbnail' style={{ backgroundImage: `url(${thumbnailImage})` }}></div>
        <div className='single-featured-slider-info-box'>
          <div className='single-featured-slider-info-box-top'>
            <div className='single-featured-slider-projectname'>Projectname is very long and now this is on the second line!</div>
            <div className='single-featured-slider-subthumbnails'>
              <div className='single-featured-slider-single-subthumbnail' onMouseEnter={(e) => handleSubThumbnailHoverEnter(e, subThumbnailImage1)} onMouseLeave={(e) => handleSubThumbnailHoverLeave(e)} style={{ backgroundImage: `url(${subThumbnailImage1})` }}></div>
              <div className='single-featured-slider-single-subthumbnail' onMouseEnter={(e) => handleSubThumbnailHoverEnter(e, subThumbnailImage2)} onMouseLeave={(e) => handleSubThumbnailHoverLeave(e)} style={{ backgroundImage: `url(${subThumbnailImage2})` }}></div>
              <div className='single-featured-slider-single-subthumbnail' onMouseEnter={(e) => handleSubThumbnailHoverEnter(e, subThumbnailImage3)} onMouseLeave={(e) => handleSubThumbnailHoverLeave(e)} style={{ backgroundImage: `url(${subThumbnailImage3})` }}></div>
              <div className='single-featured-slider-single-subthumbnail' onMouseEnter={(e) => handleSubThumbnailHoverEnter(e, subThumbnailImage4)} onMouseLeave={(e) => handleSubThumbnailHoverLeave(e)} style={{ backgroundImage: `url(${subThumbnailImage4})` }}></div>
            </div>
            <div className='single-featured-slider-usp'>
              This is a unique selling point that simply describes this project! There is enough space so it can go up to 3 lines, awesome right!!
            </div>
          </div>
          <div className='single-featured-slider-info-box-bottom'>
            <a href='/'>Check it out!</a>
            <ul className='icons'>
              {/* TODO: Tooltip */}
              {/* TODO: Variable */}
              <li><img src='/images/icons/GitHubTransparant.png' width={20} height={20} alt='' loading='lazy'></img></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
SingleFeaturedSlider.propTypes = {

};
