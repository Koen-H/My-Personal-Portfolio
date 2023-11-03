import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/FeaturedSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useNavigate } from 'react-router';


function FeaturedSlider(props) {
  const projects = props.projects;

  const sliders = projects.map((project) =>
    <SwiperSlide key={project.id}><SingleFeaturedSlider project={project} handleNewProjectPage={props.handleNewProjectPage} /></SwiperSlide>
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
              return '<span class="' + className + '"></span>';
            },
          }
          }
        >
          {sliders}
        </Swiper>

        <div className='featured-pagination'></div>
      </div>
    </section >
  );
}


FeaturedSlider.propTypes = {
  projects: PropTypes.array,
  handleNewProjectPage: PropTypes.func
};

export default FeaturedSlider;

function SingleFeaturedSlider(props) {
  const project = props.project;
  const defaultThumbnailImage = project.imageurl[0];
  const projectName = project.name;

  const [thumbnailImage, setThumbnailImage] = useState(defaultThumbnailImage);
  const [coverClasses, setCoverClasses] = useState('cover-img hidden');
  const [sliderClasses, setSliderClasses] = useState('featured-volume-slider hidden');
  const [volume, setVolume] = useState(0);
  const videoPlayer = useRef(null);

  const navigate = useNavigate();

  const subThumbnails = project.imageurl.slice(0, 6).map((image, index) => (
    <div
      key={index}
      className='single-featured-slider-single-subthumbnail'
      onMouseEnter={(e) => handleSubThumbnailHoverEnter(e, image)}
      onMouseLeave={(e) => handleSubThumbnailHoverLeave(e)}
    >
      <img src={image} />
    </div>
  ));



  function handleSubThumbnailHoverEnter(e, hoverThumbnail) {
    e.currentTarget.classList.add("on-hover")
    setThumbnailImage(hoverThumbnail);
    console.log(hoverThumbnail);
  }
  function handleSubThumbnailHoverLeave(e) {

    e.currentTarget.classList.remove("on-hover")
    setThumbnailImage(defaultThumbnailImage);
  }
  function changeVolume(e) {
    setVolume(e.target.value);
    videoPlayer.current.muted = false;
    videoPlayer.current.volume = volume / 100;
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
        <div className='single-featured-slider-media-box'>
          <div className='single-featured-slider-thumbnail-box'
            onMouseEnter={(e) => handleThumbnailVideoHover(e, true)}
            onMouseLeave={(e) => handleThumbnailVideoHover(e, false)}>
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
              <input className={sliderClasses} type='range' orient='vertical' min={-1} max={100} value={volume} onChange={(e) => changeVolume(e)} />
              <img className={coverClasses} src={thumbnailImage} />
            </div>
          </div>
          <div className='single-featured-slider-subthumbnails'>
            {subThumbnails}
          </div>
        </div>
        <div className='single-featured-slider-info-box'>
          <div className='single-featured-slider-info-box-top'>
            <div className='single-featured-slider-projectname'><h2>{projectName}</h2></div>
          </div>


          <div className='single-featured-slider-info-box-bottom'>
            <div className='single-featured-slider-usp'>
              <p>{project.description}</p>
            </div>
            <div className='single-featured-slider-CTA-box'>

              <a onClick={() => {
                navigate(`/project/${project.slug}`)
              }}>Check it out!</a>

              <div className='icons'>
                {/* TODO: Tooltip */}
                {/* TODO: Variable */}
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
SingleFeaturedSlider.propTypes = {
  project: PropTypes.object,
  handleNewProjectPage: PropTypes.func
};
