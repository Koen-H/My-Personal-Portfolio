import React, { useRef, useState } from 'react';
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

// const placeHolderImage = '/images/placeholder/placeholder.png';
// const placeHolderImage1 = '/images/placeholder/placeholder1.png';
// const placeHolderImage2 = '/images/placeholder/placeholder2.png';
// const placeHolderImage3 = '/images/placeholder/placeholder3.png';
// const placeHolderImage4 = '/images/placeholder/placeholder4.png';

function FeaturedSlider(props) {
  const projects = props.projects;

  //Console error talking about two childs, can't be aovided as swiper re-renders the slides causing this to happen.
  const sliders = projects.map((project) =>
    <SwiperSlide key={project.id}><SingleFeaturedSlider project={project} /></SwiperSlide>
  );


  return (
    <section className='featured'>
      <h1> Featured </h1>
      <div className='featured-slider-container featured bg-color-1'>
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          direction={'horizontal'}
          spaceBetween={50}
          slidesPerView={1}
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
         {sliders}
        </Swiper>
        
        <div className='featured-pagination'></div>
        <div className="featured-slider-prev featured-slider-nav"><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className="featured-slider-next featured-slider-nav"><FontAwesomeIcon icon={faChevronRight} /></div>
      </div>
    </section >
  );
}


FeaturedSlider.propTypes = {
  projects: PropTypes.array,
};

export default FeaturedSlider;

function SingleFeaturedSlider(props) {
  const project = props.project;
  const defaultThumbnailImage = project.imageurl[0];
  const subThumbnailImage1 = project.imageurl[0];
  const subThumbnailImage2 = project.imageurl[1];
  const subThumbnailImage3 = project.imageurl[2];
  const subThumbnailImage4 = project.imageurl[3];
  const projectName = project.name;

  const [thumbnailImage, setThumbnailImage] = useState(defaultThumbnailImage);
  const [coverClasses, setCoverClasses] = useState('cover-img hidden');
  const [sliderClasses, setSliderClasses] = useState('featured-volume-slider hidden');
  const [volume, setVolume] = useState(0);
  const videoPlayer = useRef(null);



  function handleSubThumbnailHoverEnter(e, hoverThumbnail) {
    e.currentTarget.classList.add("on-hover")
    setThumbnailImage(hoverThumbnail);
  }
  function handleSubThumbnailHoverLeave(e) {

    e.currentTarget.classList.remove("on-hover")
    setThumbnailImage(defaultThumbnailImage);
  }

  function changeVolume(e){
    setVolume(e.target.value);
    videoPlayer.current.muted = false;
    videoPlayer.current.volume = volume/100;
  }

  function handleThumbnailVideoHover(e, isHover) {
    if (isHover) {
      videoPlayer.current.play()

      setCoverClasses('cover-img hidden')
      setSliderClasses('featured-volume-slider ')
    }
    else {
      videoPlayer.current.pause()
      setCoverClasses('cover-img')
      setSliderClasses('featured-volume-slider hidden')
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
              src={project.videourl}
              muted
              loop
              width={"100%"}
              height={"100%"}
              ref={videoPlayer}
            />
            <input className={sliderClasses} type='range' orient='vertical' min={-1} max={100} value={volume} onChange={(e) => changeVolume(e)}/>
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
              {project.usp}
            </div>
            <div className='single-featured-slider-CTA-box'>

              <a href='/'>Check it out!</a>

              <div className='icons'>
                {/* TODO: Tooltip */}
                {/* TODO: Variable */}
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
SingleFeaturedSlider.propTypes = {
  project: PropTypes.object,
};
