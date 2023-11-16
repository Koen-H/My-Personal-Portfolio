import React, { useState } from "react";
import PropTypes from 'prop-types';
import MediaSelect from "./mediaSelect";

function ProjectBlockForms() {

    const [blockForms, setBlockForms] = useState([{
        BLOCKTYPE: '',
        TITLE: '',
        TEXT: '',
        VIDEO: '',
        HIGHLIGHTED_IMAGES: [],
    }]);

    const addBlockForm = () => {
        setBlockForms((prevForms) => [...prevForms, {
            BLOCKTYPE: '',
            TITLE: '',
            TEXT: '',
            VIDEO: '',
            HIGHLIGHTED_IMAGES: [],
        }]);
    };

    const removeBlockForm = (index) => {
        setBlockForms((prevForms) => prevForms.filter((_, i) => i !== index));
    };



    return (
        <div>
            <fieldset onClick={() => console.log(blockForms)}>
                <legend style={{ fontSize: "40px" }}>Project blocks</legend>
                {blockForms.map((blockData, index) => (
                    <ProjectBlockForm
                        key={index}
                        blockData={blockData}
                        onChange={(updatedData) => {
                            const updatedForms = [...blockForms];
                            updatedForms[index] = updatedData;
                            setBlockForms(updatedForms);
                        }}
                        onRemove={() => removeBlockForm(index)}
                    />
                ))}
                <div className="button" onClick={addBlockForm}>Add Block</div>
            </fieldset>
        </div>
    );
}
export default ProjectBlockForms;



function ProjectBlockForm(props) {
    // const [blockData, setBlockData] = useState({
    //     BLOCKTYPE: '',
    //     TITLE: '',
    //     TEXT: '',
    //     VIDEO: '',
    //     HIGHLIGHTED_IMAGES: [],
    // });

    const handleChange = (e) => {
        const { name, value } = e.target;
        props.onChange({
            ...props.blockData,
            [name]: value,
        });
    };




    const [selectedGalleryMedia, setSelectedGalleryMedia] = useState([]);
    const [gallerySelectOpen, setgallerySelectOpen] = useState(false);
    const toggleGallerySelect = () => {
        setgallerySelectOpen(!gallerySelectOpen);
    };

    const onGallerySelected = (selectedImages = []) => {
        setSelectedGalleryMedia(selectedImages);
        props.blockData.HIGHLIGHTED_IMAGES = selectedImages;
        setgallerySelectOpen(false);
    }


    return (
        <div>
            <fieldset>
                <legend>Block Data <span onClick={props.onRemove}>remove</span></legend>
                <label>
                    Block Type:
                    <input
                        type="text"
                        name="BLOCKTYPE"
                        value={props.blockData.BLOCKTYPE}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Title:
                    <input
                        type="text"
                        name="TITLE"
                        value={props.blockData.TITLE}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Text:
                    <textarea
                        name="TEXT"
                        value={props.blockData.TEXT}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Video:
                    <input
                        type="text"
                        name="VIDEO"
                        value={props.blockData.VIDEO}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label htmlFor="fileInput">
                    <div onClick={toggleGallerySelect}> Gallery: select </div>
                    {gallerySelectOpen && (<MediaSelect previouslySelected={selectedGalleryMedia} onImagesSelected={onGallerySelected} />)}
                    {selectedGalleryMedia.map((id) => (
                        <span key={id} style={{ paddingRight: "5px" }}>
                            {id}
                        </span>
                    ))}
                </label>
            </fieldset>
        </div>
    );
}
ProjectBlockForm.propTypes = {
    onChange: PropTypes.func,
    onRemove: PropTypes.func,
    blockData: PropTypes.object,
};
