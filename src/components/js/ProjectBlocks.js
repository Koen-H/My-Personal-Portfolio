import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useViewportSize } from '@mantine/hooks';
import NewlineText from './NewlineText';

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
          {contentBlock.text}
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
        <p><NewlineText text={contentBlock.text} /></p>
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
        <p><NewlineText text={contentBlock.text} /></p>
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
          <p><NewlineText text={contentBlock.text} /></p>
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
        <p>{contentBlock.text}</p>
        <video
          src={contentBlock.video}
          muted
          loop
          width={"100%"}
          height={"100%"}
        />
      </div>
    </>
  );
}


TextVideoBlock.propTypes = {
  contentBlock: PropTypes.object
};


function Gallery(props) {
  const images = props.images.map((image, index) => (
    <div className='image-container' key={index}>
      <img src={image.src} alt={image.label} width={image.width ? image.width + "%" : '100%'} />
    </div>
  ));

  return (
    <section className='image-gallery-container'>
      <section className='image-gallery'>
        {images}
      </section>
    </section>
  );
}
Gallery.propTypes = {
  images: PropTypes.array
};
