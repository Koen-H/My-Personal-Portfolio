import React, { useState, useEffect } from "react";
import MediaSelect from "../components/js/mediaSelect";
import ProjectBlockForms from "../components/js/ProjectBlockForms";

function CreateProjectPage() {

    const initialFormData = {
        project: {
            IS_ACTIVE: true,
            PROJECT_NAME: "",
            PROJECT_SLUG: "",
            IS_FEATURED: false,
        },
        project_details: {
            USP: "",
            DATE: "",
            DESCRIPTION: "",
            THUMBNAIL: "",
            VIDEO: "",
            HIGHLIGHTED_IMAGES: [],
        },
        project_page: {
            CONTENT_BLOCKS: [],
            BACKGROUND_CSS: "",
            BACKGROUND_VIDEO: "",
            BACKGROUND_IMAGES: [],
            HEADER_OVERLAY: "",
            OVERLAY: "",
        },
        content_blocks: []
    };

    const [formData, setFormData] = useState(initialFormData);
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

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://koenhankel.nl/api/getProjects.php')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectSelectChange = (e) => {
        const value = e.target.value;
        console.log(value);
        if (value === "NEW") {
            setFormData(initialFormData);//Set back to empty
            setSelectedProject(null);
            return;
        }
        setSelectedProject(value);
        fetch(`https://koenhankel.nl/api/get_project.php?project_ID=${value})`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data);
                const projectData = data.data;
                const requestFormData = {
                    project: {
                        IS_ACTIVE: projectData.IS_ACTIVE ? projectData.IS_ACTIVE : initialFormData.project.IS_ACTIVE,
                        PROJECT_NAME: projectData.PROJECT_NAME ? projectData.PROJECT_NAME : initialFormData.project.PROJECT_NAME,
                        PROJECT_SLUG: projectData.PROJECT_SLUG ? projectData.PROJECT_SLUG : initialFormData.project.PROJECT_SLUG,
                        IS_FEATURED: projectData.IS_FEATURED ? projectData.IS_FEATURED : initialFormData.project.IS_FEATURED,
                    },
                    project_details: {
                        USP: projectData.USP ? projectData.USP : initialFormData.project_details.USP,
                        DATE: projectData.DATE ? projectData.DATE : initialFormData.project_details.DATE,
                        DESCRIPTION: projectData.DESCRIPTION ? projectData.DESCRIPTION : initialFormData.project_details.DESCRIPTION,
                        THUMBNAIL: projectData.THUMBNAIL ? projectData.THUMBNAIL : initialFormData.project_details.THUMBNAIL,
                        VIDEO: projectData.VIDEO ? projectData.VIDEO : initialFormData.project_details.VIDEO,
                        HIGHLIGHTED_IMAGES: projectData.HIGHLIGHTED_IMAGES ? JSON.parse(projectData.HIGHLIGHTED_IMAGES) : initialFormData.project_details.HIGHLIGHTED_IMAGES,
                    },
                    project_page: {
                        CONTENT_BLOCKS: projectData.CONTENT_BLOCKS ? projectData.CONTENT_BLOCKS : initialFormData.project_page.CONTENT_BLOCKS,
                        BACKGROUND_CSS: projectData.BACKGROUND_CSS ? projectData.BACKGROUND_CSS : initialFormData.project_page.BACKGROUND_CSS,
                        BACKGROUND_VIDEO: projectData.BACKGROUND_VIDEO ? projectData.BACKGROUND_VIDEO : initialFormData.project_page.BACKGROUND_VIDEO,
                        BACKGROUND_IMAGES: projectData.BACKGROUND_IMAGES ? projectData.BACKGROUND_IMAGES : initialFormData.project_page.BACKGROUND_IMAGES,
                        HEADER_OVERLAY: projectData.HEADER_OVERLAY ? projectData.HEADER_OVERLAY : initialFormData.project_page.HEADER_OVERLAY,
                        OVERLAY: projectData.OVERLAY ? projectData.OVERLAY : initialFormData.project_page.OVERLAY,
                    },
                    content_blocks: []
                };
                setFormData(requestFormData);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    const projectSelect = (
        <div>
            <select
                name="selectedProject"
                value={formData.selectedProject}
                onChange={handleProjectSelectChange}
            >
                <option key={"NEW"} value="NEW">
                    New Project
                </option>
                {projects.map((project) => (
                    <option key={project.ID} value={project.ID}>
                        {project.PROJECT_NAME}
                    </option>
                ))}
            </select>
        </div>
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting! form!");
        console.log(formData);

        try {
            const api = selectedProject ? `https://koenhankel.nl/api/create_project.php?project_ID=${selectedProject}` : 'https://koenhankel.nl/api/create_project.php';
            const jsonData = JSON.stringify(formData);
            console.log(jsonData);
            const response = await fetch(api, {
                method: 'POST',
                body: jsonData,
            });

            const result = await response.json();
            if (result.status == 'success') {
                console.log("succes");
                console.log(result);
            }
            else {
                console.error(result);
            }
        } catch (error) {
            console.error('Error', error);

        }
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
        const fieldName = "HIGHLIGHTED_IMAGES"; // Adjust the field name accordingly

        setFormData((prevData) => ({
            ...prevData,
            project_details: {
                ...prevData.project_details,
                [fieldName]: selectedImages,
            },
        }));
        // setHighlightedIDs(selectedImages);
        setHighlightedMediaOpen(false);
    };

    const [backgroundMediaOpen, setBackgroundMediaOpen] = useState(false);
    const onBackgroundImagesSelected = (selectedImages = []) => {
        const fieldName = "BACKGROUND_IMAGES"; // Adjust the field name accordingly

        setFormData((prevData) => ({
            ...prevData,
            project_page: {
                ...prevData.project_page,
                [fieldName]: selectedImages,
            },
        }));
        // setHighlightedIDs(selectedImages);
        setBackgroundMediaOpen(false);
    };


    const handleBlockFormsChange = (updatedBlockForms) => {
        setFormData((prevData) => ({
            ...prevData,
            project_blocks: updatedBlockForms,
        }));
    };

    return (
        <div style={{ paddingTop: "10%" }}>
            <div>
                <div onClick={() => console.log(formData)}>Log form</div>
                {projectSelect}
            </div>
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
                    {/* <label htmlFor="fileInput">
                        <div onClick={toggleThumbnailMediaSelect}> Project thumbnail:  select </div>
                        {thumbnailMediaOpen && (<MediaSelect previouslySelected={formData.project_details.HIGHLIGHTED_IMAGES} onImagesSelected={onThumbnailSelected} />)}
                        {formData.project_details.HIGHLIGHTED_IMAGES.map((id) => (
                            <span key={id} style={{ paddingRight: "5px" }}>
                                {id}
                            </span>
                        ))}
                    </label> */}
                    <br />
                    <label htmlFor="fileInput">
                        <div onClick={toggleHighlightedMediaSelect}> Highlighted images:  select </div>
                        {highlightedMediaOpen && (<MediaSelect previouslySelected={formData.project_details.HIGHLIGHTED_IMAGES} onImagesSelected={onhighlightedSelected} />)}
                        {formData.project_details.HIGHLIGHTED_IMAGES.map((id) => (
                            <span key={id} style={{ paddingRight: "5px" }}>
                                {id}
                            </span>
                        ))}
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Project Page</legend>
                    <label>
                        Background CSS:
                        <input
                            type="text"
                            name="project_page.BACKGROUND_CSS"
                            value={formData.project_page.BACKGROUND_CSS}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Background Video:
                    </label>
                    <br />
                    <label htmlFor="fileInput">
                        <div onClick={() => setBackgroundMediaOpen(!backgroundMediaOpen)}> Background Images::  select </div>
                        {backgroundMediaOpen && (<MediaSelect previouslySelected={formData.project_page.BACKGROUND_IMAGES} onImagesSelected={onBackgroundImagesSelected} />)}
                        {formData.project_page.BACKGROUND_IMAGES.map((id) => (
                            <span key={id} style={{ paddingRight: "5px" }}>
                                {id}
                            </span>
                        ))}
                    </label>
                    <br />
                    <label>
                        Header overlay :
                        <input
                            type="text"
                            name="project_page.HEADER_OVERLAY"
                            value={formData.project_page.HEADER_OVERLAY}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Overlay:
                        <input
                            type="text"
                            name="project_page.OVERLAY"
                            value={formData.project_page.OVERLAY}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                </fieldset>
                <ProjectBlockForms onBlockFormsChange={handleBlockFormsChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CreateProjectPage;