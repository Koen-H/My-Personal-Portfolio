import PropTypes from 'prop-types';
import { useEffect } from 'react';

function RetrieveImages({ imageIDs, setImages, setImageFetching }) {
    const retrieveProjectImages = async () => {
      setImageFetching(true);
      try {
        const response = await fetch(`https://koenhankel.nl/api/get_images.php?ids=${imageIDs.join(',')}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        setImages(result.data);
        console.log("Images retrieved");
      } catch (error) {
        console.error('Error fetching images:', error);
      }
      setImageFetching(false);
    };

    retrieveProjectImages();
}

RetrieveImages.propTypes = {
  imageIDs: PropTypes.array,
  setImages: PropTypes.func,
  setImageFetching: PropTypes.func,
};

export default RetrieveImages;