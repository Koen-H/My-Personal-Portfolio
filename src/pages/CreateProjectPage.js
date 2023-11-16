import React, { useState } from "react";
import MediaSelect from "../components/js/mediaSelect";
import ProjectBlockForms from "../components/js/ProjectBlockForms";

function CreateProjectPage() {

    const [formData, setFormData] = useState({
        project: {
            IS_ACTIVE: true,
            PROJECT_NAME: '',
            PROJECT_SLUG: '',
            IS_FEATURED: false,
        },
        project_details: {
            USP: '',
            DATE: '',
            DESCRIPTION: '',
            THUMBNAIL: '',
            VIDEO: '',
            HIGHLIGHTED_IMAGES: [],
        },
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const [section, field] = name.split(".");

        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: type === "checkbox" ? checked : value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting! form!");
        console.log(formData);
    };

    const [selectedThumbnailID, setSelectedThumbnailID] = useState([]);
    const [thumbnailMediaOpen, setThumbnailMediaOpen] = useState(false);
    const toggleThumbnailMediaSelect = () => {
        setThumbnailMediaOpen(!thumbnailMediaOpen);
    };

    const onThumbnailSelected = (selectedImages = []) => {
        if (selectedImages.length >= 1) setSelectedThumbnailID(selectedImages[0]);
        else setSelectedThumbnailID(selectedImages);
        setSelectedThumbnailID(selectedImages);
        setThumbnailMediaOpen(false);
    }


    const [highlightedIDs, setHighlightedIDs] = useState([]);
    const [highlightedMediaOpen, setHighlightedMediaOpen] = useState(false);
    const toggleHighlightedMediaSelect = () => {
        setHighlightedMediaOpen(!highlightedMediaOpen);
    };

    const onhighlightedSelected = (selectedImages = []) => {
        setHighlightedIDs(selectedImages);
        setHighlightedMediaOpen(false);
    }


    return (
        <div style={{ paddingTop: "10%" }}>
            <form onSubmit={handleSubmit}>
                {/* Project Fields */}
                <fieldset>
                    <legend>Project</legend>
                    <label>
                        Project is Active:
                        <input
                            type="checkbox"
                            name="project.IS_ACTIVE"
                            checked={formData.project.IS_ACTIVE}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Project Name:
                        <input
                            type="text"
                            name="project.PROJECT_NAME"
                            value={formData.project.PROJECT_NAME}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Project Slug:
                        <input
                            type="text"
                            name="project.PROJECT_SLUG"
                            value={formData.project.PROJECT_SLUG}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Is Featured:
                        <input
                            type="checkbox"
                            name="project.IS_FEATURED"
                            checked={formData.project.IS_FEATURED}
                            onChange={handleChange}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Project Details</legend>
                    <label>
                        Project USP:
                        <input
                            type="text"
                            name="project_details.USP"
                            value={formData.project_details.USP}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Project description:
                        <textarea
                            name="project_details.DESCRIPTION"
                            value={formData.project_details.DESCRIPTION}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Project date:
                        <input
                            type="date"
                            name="project_details.DATE"
                            value={formData.project_details.DATE}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label htmlFor="fileInput">
                        <div onClick={toggleThumbnailMediaSelect}> Project thumbnail:  select </div>
                        {thumbnailMediaOpen && (<MediaSelect previouslySelected={selectedThumbnailID} onImagesSelected={onThumbnailSelected} />)}
                        {selectedThumbnailID.map((id) => (
                            <span key={id} style={{ paddingRight: "5px" }}>
                                {id}
                            </span>
                        ))}
                    </label>
                    <br />
                    <label htmlFor="fileInput">
                        <div onClick={toggleHighlightedMediaSelect}> Highlighted images:  select </div>
                        {highlightedMediaOpen && (<MediaSelect previouslySelected={highlightedIDs} onImagesSelected={onhighlightedSelected} />)}
                        {highlightedIDs.map((id) => (
                            <span key={id} style={{ paddingRight: "5px" }}>
                                {id}
                            </span>
                        ))}
                    </label>
                </fieldset>
                <ProjectBlockForms />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CreateProjectPage;