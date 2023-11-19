import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import '../css/ProjectArchive.css';

import DropdownFilter from './DropdownFilter';
import { useNavigate } from 'react-router';



function ProjectArchive(props) {
    const projects = props.projects;
    const images = props.images;
    const videos = props.videos;
    const [filter, setFilter] = useState([
        {
            "label": "Categories",
            "active": false,
            "items":
                [
                    {
                        name: "Games",
                        active: false,
                    },
                    {
                        name: "Applications",
                        active: false,
                    },
                    {
                        name: "Websites",
                        active: false,
                    },
                    {
                        name: "Art",
                        active: false,
                    },
                    {
                        name: "Research",
                        active: false,
                    },
                ]
        },
        {
            "label": "Tags",
            "active": false,
            "items":
                [
                    {
                        name: "Virtual Reality",
                        active: false,
                    },
                    {
                        name: "3D Game",
                        active: false,
                    },
                    {
                        name: "2D Game",
                        active: false,
                    },
                    {
                        name: "Networking",
                        active: false,
                    },
                ]
        }
    ]);

    //Filters the projects that meets the criteria
    const singleProjectItems = projects.map((project) => {
        let meetsCriteria = true;
        filter.forEach((filterCategory) => {
            if (filterCategory.active) {
                filterCategory.items.forEach((item) => {
                    if (item.active && !project.projectCategories.includes(item.name)) {
                        meetsCriteria = false;
                    }
                });
            }
        });
        if (meetsCriteria) {
            return (
                <SingleOverviewItem key={project.ID} project={project} images={images} videos={videos} />
            );
        }
        // Return null for projects that don't meet the criteria
        return null;
    })
        .filter((projectItem) => projectItem !== null); // Filter out null values
    return (
        <section className='overview-filter'>
            <div className='archive-top'>
                <h2>Project archive</h2>
                {/* Disable dropdown filter till implementation in database*/}
                {/* <DropdownFilter filter={filter} setFilter={setFilter} /> */}
            </div>
            <div className='project-archive'>
                {singleProjectItems.length === 0 ? (
                    <div>
                        <h4>No results found</h4>
                        <p>Try using different filters</p>
                    </div>
                ) : (
                    singleProjectItems
                )}
            </div>
        </section>
    );
}

ProjectArchive.propTypes = {
    projects: PropTypes.array,
    images: PropTypes.object,
    videos: PropTypes.object,
};


export default ProjectArchive;

function SingleOverviewItem(props) {

    const project = props.project;
    const images = props.images;
    const videos = props.videos;

    const projectThumbnails = project.HIGHLIGHTED_IMAGES;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState(images[project.THUMBNAIL].MEDIUM);

    const timeoutDelay = 1500;
    const timeoutRef = useRef(null);

    const infoContainer = useRef(null);

    const handleSingleItemHoverEnter = () => {
        infoContainer.current.classList.remove("d-none");
        clearTimeout(timeoutRef.current); // Clear any existing timeout
        NextImage(currentIndex)
    };

    const handleSingleItemHoverLeave = () => {
        infoContainer.current.classList.add("d-none");
        clearTimeout(timeoutRef.current); // Clear the timeout
        setBackgroundImage(images[project.THUMBNAIL].MEDIUM);
    };

    const NextImage = (prevIndex) => {
        let nextIndex = prevIndex + 1;
        nextIndex = nextIndex === projectThumbnails.length ? 0 : nextIndex;
        setCurrentIndex(nextIndex);
        setBackgroundImage(images[projectThumbnails[nextIndex]].MEDIUM);
        timeoutRef.current = setTimeout(() => NextImage(nextIndex), timeoutDelay);
    };
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current); // Clear timeout in cleanup
        };
    }, []);

    return (
        <div className='single-overview-item'
            onClick={() => {
                navigate(`/project/${project.PROJECT_SLUG}`)
            }}
            onMouseEnter={() => handleSingleItemHoverEnter()}
            onMouseLeave={() => handleSingleItemHoverLeave()}
        >
            <div className='single-overview-thumbnail-container'>
                <a>
                    <img src={backgroundImage}></img>
                </a>
            </div>
            <div className='single-overview-info-container d-none' ref={infoContainer}>
                <div className='single-overview-info'>
                    <div className='single-overview-projectname'><h3>{project.PROJECT_NAME}</h3></div>
                    <div className='single-overview-usp'>{project.USP}</div>
                </div>
            </div>
        </div>
    );
}

SingleOverviewItem.propTypes = {
    project: PropTypes.object,
    images: PropTypes.object,
    videos: PropTypes.object,
};
