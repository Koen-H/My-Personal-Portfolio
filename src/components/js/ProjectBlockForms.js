import React, { useState } from "react";
import PropTypes from 'prop-types';
import MediaSelect from "./mediaSelect";

function ProjectBlockForms(props) {

    const initialBlockForm = {
        BLOCK_TYPE: '',
        TITLE: '',
        TEXT: '',
        VIDEO: '',
        GALLERY_IMAGES: [],
    }

    const [blockForms, setBlockForms] = useState(props.blockForms);

    console.log("propsblock");
    console.log(props.blockForms);
    console.log(blockForms);

    const addBlockForm = () => {
        setBlockForms((prevForms) => [...prevForms, initialBlockForm]);
    };

    const removeBlockForm = (index) => {
        setBlockForms((prevForms) => prevForms.filter((_, i) => i !== index));
    };

    const handleBlockFormsChange = (updatedBlockForms) => {
        // Callback to send blockForms data to the parent component
        props.onBlockFormsChange(updatedBlockForms);
    };

    return (
        <div>
            <fieldset>
                <legend style={{ fontSize: "40px" }}>Project blocks</legend>
                {blockForms.map((blockData, index) => (
                    <ProjectBlockForm
                        key={index}
                        blockData={blockData}
                        onChange={(updatedData) => {
                            const updatedForms = [...blockForms];
                            updatedForms[index] = updatedData;
                            setBlockForms(updatedForms);
                            handleBlockFormsChange(updatedForms);
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
ProjectBlockForms.propTypes = {
    onBlockFormsChange: PropTypes.func,
    blockForms: PropTypes.array,
};



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
                        type="number"
                        name="BLOCK_TYPE"
                        value={props.blockData.BLOCK_TYPE}
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
