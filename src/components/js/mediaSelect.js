import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import '../css/MediaSelect.css';
const MediaSelect = (props) => {

    const [selectedImages, setSelectedImages] = useState(props.previouslySelected ? props.previouslySelected : []);
    //Start upload data
    const [isUploading, setIsUploading] = useState(false);
    const [file, setFile] = useState(null);
    const [altText, setAltText] = useState('');
    const [uploadResponse, setUploadResponse] = useState('');
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleAltTextChange = (event) => {
        setAltText(event.target.value);
    };
    const handleUpload = async (event) => {
        event.preventDefault();

        // Create a FormData object and append the file and alt text
        const formData = new FormData();
        formData.append('image', file);
        formData.append('altText', altText);
        setIsUploading(true);
        try {
            const response = await fetch('https://koenhankel.nl/api/upload.php', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (result.status == 'success') {
                setUploadResponse(`Image uploaded with id ${result.imageID}`);
                const updatedSelectedImages = [...selectedImages, result.imageID]
                setSelectedImages(updatedSelectedImages);
                retrieveAllImages();
            }
            else {
                setUploadResponse(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            setUploadResponse('Error uploading image: ' + error)
        }
        //Done uploading image!
        setIsUploading(false);
    };

    //Start retrieve current images
    const [imagesData, setImagesData] = useState([]);
    const [imageAmount, setImageAmount] = useState(0);
    const ids = [7, 4];
    const limit = 3000;

    useEffect(() => {
        retrieveAllImages();
    }, []);

    const retrieveAllImages = async () => {
        try {
            const response = await fetch(`https://koenhankel.nl/api/get_images.php`, {
                //const response = await fetch(`https://koenhankel.nl/api/get_images.php?ids=${ids.join(',')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            setImageAmount(result.imagesFound);
            setImagesData(result.data);
            console.log("IMAGES")
            console.log(Array.isArray(result.data));
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };



    function handleImagesSelectedButton() {
        props.onImagesSelected(selectedImages);
    }
    const handleImageClick = (event) => {
        event.preventDefault();
        const imageId = event.currentTarget.getAttribute('data-id');

        const isSelected = selectedImages.includes(imageId);

        const updatedSelectedImages = isSelected
            ? selectedImages.filter((id) => id !== imageId)
            : [...selectedImages, imageId];

        setSelectedImages(updatedSelectedImages);
    };

    return (
        <div className='media-select-container'>
            <div className='image-upload-form'>
                <input type="file" onChange={handleFileChange} />
                <textarea placeholder="ALT text" value={altText} onChange={handleAltTextChange} />
                <button onClick={handleUpload} disabled={isUploading}>Upload</button>
                <p>{uploadResponse}</p>
            </div>
            <div>
                {imageAmount} images found.
            </div>
            <div onClick={handleImagesSelectedButton} className='select-images-button'>
                Select Images
            </div>
            <div className='media-archive'>
                {Object.values(imagesData).reverse().map((imageData) => (
                    <div key={imageData.ID} className='media-item' data-id={imageData.ID} onClick={handleImageClick}>
                        {selectedImages.includes(imageData.ID) && <div className="selected-indicator"><FontAwesomeIcon icon={faCheck} /></div>}
                        <img src={imageData.ORIGINAL} alt={imageData.ALT} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaSelect;
MediaSelect.propTypes = {
    onImagesSelected: PropTypes.func,
    previouslySelected: PropTypes.array,
    isOpen: PropTypes.bool,
};
