import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/FeaturedSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const placeHolderImage = '/images/placeholder/placeholder.png';
const placeHolderImage1 = '/images/placeholder/placeholder1.png';
const placeHolderImage2 = '/images/placeholder/placeholder2.png';
const placeHolderImage3 = '/images/placeholder/placeholder3.png';
const placeHolderImage4 = '/images/placeholder/placeholder4.png';

function FeaturedSlider() {
  return (
    <section className='featured'>
      <h1> Featured </h1>
      <div className='featured-slider-container featured bg-color-1'>
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          direction={'horizontal'}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect={'fade'}
          fadeEffect={{
            crossFade: true
          }}
          navigation={{
            prevEl: '.featured-slider-prev',
            nextEl: '.featured-slider-next',
          }}
          pagination={{
            el: '.featured-pagination',
            horizontalClass: 'featured-pagination-hor',
            clickable: true,
            bulletClass: 'featured-pagination-bullet',
            bulletActiveClass: 'featured-pagination-bullet-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          }
          }

        >
          <SwiperSlide><SingleFeaturedSlider projectName='Projectname can go up to 50 characters. Should be enough.' /></SwiperSlide>
          <SwiperSlide><SingleFeaturedSlider projectName='The second one!' /></SwiperSlide>
          <SwiperSlide><SingleFeaturedSlider projectName='The third one!' /></SwiperSlide>
          <SwiperSlide><SingleFeaturedSlider projectName='The last one!' /></SwiperSlide>
        </Swiper>
        <div className='featured-pagination'></div>
        <div className="featured-slider-prev featured-slider-nav"><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className="featured-slider-next featured-slider-nav"><FontAwesomeIcon icon={faChevronRight} /></div>
      </div>
    </section >
  );
}


FeaturedSlider.propTypes = {

};

export default FeaturedSlider;

function SingleFeaturedSlider(props) {
  const defaultThumbnailImage = placeHolderImage;
  const subThumbnailImage1 = placeHolderImage1;
  const subThumbnailImage2 = placeHolderImage2;
  const subThumbnailImage3 = placeHolderImage3;
  const subThumbnailImage4 = placeHolderImage4;
  const projectName = props.projectName;

  const [thumbnailImage, setThumbnailImage] = useState(defaultThumbnailImage);
  const [coverClasses, setCoverClasses] = useState('cover-img hidden');

  function handleSubThumbnailHoverEnter(e, hoverThumbnail) {
    e.currentTarget.style.opacity = 1;
    setThumbnailImage(hoverThumbnail);
  }

  function handleSubThumbnailHoverLeave(e) {

    e.currentTarget.style.opacity = 0.6;
    setThumbnailImage(placeHolderImage);
  }

  function handleThumbnailVideoHover(e, isHover) {
    if (isHover) {
      e.target.play()
      setCoverClasses('cover-img hidden')
    }
    else {
      e.target.pause()
      setCoverClasses('cover-img')
    }
  }

  return (
    <div>
      <div className='single-featured-slider'>
        <div className='single-featured-slider-thumbnail-box'
          onMouseEnter={(e) => handleThumbnailVideoHover(e, true)}
          onMouseLeave={(e) => handleThumbnailVideoHover(e, false)}>
          {/* <div className='single-featured-slider-thumbnail' style={{ backgroundImage: `url(${thumbnailImage})` }}></div> */}
          <div className='single-featured-slider-thumbnail-trailer' style={{ backgroundImage: `url(${thumbnailImage})` }}>
            <video
              poster={thumbnailImage}
              src='/videos/superxenongalaxytrailer-1.mp4'
              muted
              loop
              width={"100%"}
              height={"100%"}
            />
            <img className={coverClasses} src={thumbnailImage} />
          </div>
        </div>
        <div className='single-featured-slider-info-box'>
          <div className='single-featured-slider-info-box-top'>
            <div className='single-featured-slider-projectname'><span>{projectName}</span></div>
            <div className='single-featured-slider-subthumbnails'>
              <div className='single-featured-slider-single-subthumbnail' onMouseEnter={(e) => handleSubThumbnailHoverEnter(e, subThumbnailImage1)} onMouseLeave={(e) => handleSubThumbnailHoverLeave(e)} style={{ backgroundImage: `url(${subThumbnailImage1})` }}></div>
              <div className='single-featured-slider-single-subthumbnail' onMouseEnter={(e) => handleSubThumbnailHoverEnter(e, subThumbnailImage2)} onMouseLeave={(e) => handleSubThumbnailHoverLeave(e)} style={{ backgroundImage: `url(${subThumbnailImage2})` }}></div>
              <div className='single-featured-slider-single-subthumbnail' onMouseEnter={(e) => handleSubThumbnailHoverEnter(e, subThumbnailImage3)} onMouseLeave={(e) => handleSubThumbnailHoverLeave(e)} style={{ backgroundImage: `url(${subThumbnailImage3})` }}></div>
              <div className='single-featured-slider-single-subthumbnail' onMouseEnter={(e) => handleSubThumbnailHoverEnter(e, subThumbnailImage4)} onMouseLeave={(e) => handleSubThumbnailHoverLeave(e)} style={{ backgroundImage: `url(${subThumbnailImage4})` }}></div>
            </div>

          </div>
          <div className='single-featured-slider-info-box-bottom'>
            <div className='single-featured-slider-usp'>
              This is a unique selling point that simply describes this project! It can hold up to 110 characters! Just enough space for 3 lines.
            </div>
            <div className='single-featured-slider-CTA-box'>

              <a href='/'>Check it out!</a>
             
              <div className='icons'>
                {/* TODO: Tooltip */}
                {/* TODO: Variable */}
                <FontAwesomeIcon icon={faGithub}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
SingleFeaturedSlider.propTypes = {
  projectName: PropTypes.string.isRequired,
};
