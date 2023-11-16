import React, { useState, useEffect } from 'react';

const ImageUploadForm = () => {
    const [file, setFile] = useState(null);
    const [altText, setAltText] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleAltTextChange = (event) => {
        setAltText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a FormData object and append the file and alt text
        const formData = new FormData();
        formData.append('image', file);
        formData.append('altText', altText);

        try {
            const response = await fetch('https://koenhankel.nl/api/upload.php', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const [images, setImages] = useState([]);
    const limit = 3;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://koenhankel.nl/api/get_images.php?limit=${limit}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                console.log(result);
                const imagesDiv = result.data.map((image) => (
                    <li key={image.ID}>
                        <img src={image.ORIGINAL} alt={image.ALT} />
                    </li>
                ));
                setImages(imagesDiv);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            <form onSubmit={handleSubmit} style={{ paddingTop: '20%' }}>
                <input type="file" onChange={handleFileChange} />
                <textarea placeholder="ALT text" value={altText} onChange={handleAltTextChange} />
                <button type="submit">Upload</button>
            </form>
            <div>
               {images}
            </div>
        </>
    );
};

export default ImageUploadForm;