import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewlineText from './NewlineText';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import VideoPlayer from './VideoPlayer';

import '../css/ProjectBlocks.css';

function ProjectBlocks(props) {
  const project = props.project;


  const blocks = GetBlocks(project.pageContent);


  function GetBlocks(_pageContent) {
    return _pageContent.map((pageContent, index) => {
      let block = 'Block not found';
      switch (pageContent.blockType) {
        case 0:
          block = <div className='inner-block'>
            {GetBlocks(pageContent.innerBlocks)}
          </div>
          break;
        case 1:
          block = <TextBlock contentBlock={pageContent} />;
          break;
        case 2:
          block = <TextImageBlock contentBlock={pageContent} />;
          break;
        case 3:
          block = <ImageTextBlock contentBlock={pageContent} />;
          break;
        case 4:
          block = <TextImageBelowBlock contentBlock={pageContent} />;
          break;
        case 5:
          block = <TextVideoBlock contentBlock={pageContent} />;
          break;
        case 6:
          block = <SwiperSliderGallery contentBlock={pageContent} />;
          break;
        case 7:
          block = <TextVideoBelowBlock contentBlock={pageContent} />;
          break;
        default:
          break;
      }
      return <div className='project-block' key={index}> {block}</div>
    }
    );
  }

  return (
    <section className='project-blocks'>
      {blocks}
    </section>
  );
}

export default ProjectBlocks;
ProjectBlocks.propTypes = {
  project: PropTypes.object
};




function TextBlock(props) {
  const contentBlock = props.contentBlock;
  return (
    <>
      <h2>{contentBlock.title}</h2>
      <div className='project-block-content'>
        <p className={contentBlock.widthLimit ? 'width-limit' : ''}>
          <NewlineText text={contentBlock.text} />
        </p>
      </div>
    </>
  );
}
TextBlock.propTypes = {
  contentBlock: PropTypes.object
};

function TextImageBlock(props) {
  const contentBlock = props.contentBlock;
  return (
    <>
      <h2>{contentBlock.title}</h2>
      <div className='project-block-content'>
        <div><NewlineText text={contentBlock.text} /></div>
        <Gallery images={contentBlock.images} />
      </div>
    </>
  );
}
TextImageBlock.propTypes = {
  contentBlock: PropTypes.object
};

function ImageTextBlock(props) {
  const contentBlock = props.contentBlock;
  return (
    <>
      <h2>{contentBlock.title}</h2>
      <div className='project-block-content'>
        <Gallery images={contentBlock.images} />
        <div>
          <NewlineText text={contentBlock.text} />
        </div>
      </div>
    </>
  );
}
ImageTextBlock.propTypes = {
  contentBlock: PropTypes.object
};

function TextImageBelowBlock(props) {
  const contentBlock = props.contentBlock;
  return (
    <>
      <h2>{contentBlock.title}</h2>
      <div className='project-block-content'>
        <div>
          <Gallery images={contentBlock.images} />
          <div><NewlineText text={contentBlock.text} /></div>
        </div>
      </div>
    </>
  );
}
TextImageBelowBlock.propTypes = {
  contentBlock: PropTypes.object
};

function TextVideoBlock(props) {
  const contentBlock = props.contentBlock;
  return (
    <>
      <h2>{contentBlock.title}</h2>
      <div className='project-block-content'>
        <div><NewlineText text={contentBlock.text} /></div>
        <VideoPlayer videoSrc={contentBlock.video} />
      </div>
    </>
  );
}

TextVideoBlock.propTypes = {
  contentBlock: PropTypes.object
};

function TextVideoBelowBlock(props) {
  const contentBlock = props.contentBlock;
  return (
    <>
      <h2>{contentBlock.title}</h2>
      <div className='project-block-content'>
        <div>
          <VideoPlayer videoSrc={contentBlock.video} />
          <div><NewlineText text={contentBlock.text} /></div>
        </div>
      </div>
    </>
  );
}
TextVideoBelowBlock.propTypes = {
  contentBlock: PropTypes.object
};


function Gallery(props) {
  const images = props.images;
  const portraitSide = (images.length == 3 && images[0].portraitSide);
  const imagesGallery = images.map((image, index) => (
    <div className='image-container' key={index}>
      <img src={image.src} alt={image.label} width={image.width ? image.width + "%" : '100%'} />
    </div>
  ));

  return (
    <section className='image-gallery-container'>
      <section className='image-gallery'>
        {!portraitSide ? imagesGallery : (
          <>
            <div className='image-container portait'>
              <img src={images[0].src} alt={images[0].label} width={images[0].width ? images[0].width + "%" : '100%'} />
            </div>
            <div className='image-container landscape'>
              <img src={images[1].src} alt={images[1].label} width={images[1].width ? images[1].width + "%" : '100%'} />
              <img src={images[2].src} alt={images[2].label} width={images[2].width ? images[2].width + "%" : '100%'} />
            </div>
          </>
        )}
      </section>
    </section>
  );
}
Gallery.propTypes = {
  images: PropTypes.array
};



function SwiperSliderGallery(props) {
  const contentBlock = props.contentBlock;
  const gallery = contentBlock.gallery;
  const slides = gallery.images.map((image, index) => (
    <SwiperSlide className='image-slide' key={index}>
      <div className='image-container' >
        <img src={image.src} alt={image.label} width={image.width ? image.width + "%" : '100%'} />
        {(image.showLabel && (<NewlineText text={image.label} />))}
      </div>
    </SwiperSlide>
  ));

  return (
    <section className='swiper-slider-gallery'>
      <h2>{contentBlock.title}</h2>
      <Swiper
        modules={[Autoplay]}
        direction={'horizontal'}
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        allowTouchMove={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {slides}
      </Swiper>
    </section>
  );
}
SwiperSliderGallery.propTypes = {
  contentBlock: PropTypes.object
};
