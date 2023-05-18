import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import '../css/OverviewFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { propTypes } from 'react-bootstrap/esm/Image';


function OverviewFilter(props) {

    const [projectCategoriesFilterIsActive, setprojectCategoriesFilterIsActive] = useState(false);
    const [customCategoriessFilterIsActive, setcustomCategoriesFilterIsActive] = useState(false);
    const [projectCategories, updateProjectCategories] = useState([
        {
            name: "Games",
            isActive: false,
        },
        {
            name: "Applications",
            isActive: false,
        },
        {
            name: "Websites",
            isActive: false,
        },
        {
            name: "Virtual Reality",
            isActive: false,
        },
    ]);
    const [customCategories, updateCustomCategories] = useState([
        {
            name: "Recent",
            isActive: false,
        },
        {
            name: "My Recommendations",
            isActive: false,
        },
        {
            name: "Upcoming",
            isActive: false,
        },
        {
            name: "Concepts",
            isActive: false,
        },
    ]);

    //Currently defined here, will be imported by a database in the future, perhaps using an api based on the filter instead of looping through like this. But for now using react to learn it :)

    const projects = props.projects;

    const singleProjectItems = projects.map(project => {
        let meetsCriteria = true;
        if (projectCategoriesFilterIsActive) projectCategories.map(cat => {
            if (cat.isActive) {
                if (!project.projectCategories.includes(cat.name)) {
                    meetsCriteria = false;
                }
            }
        });
        if (customCategoriessFilterIsActive) customCategories.map(cat => {
            if (cat.isActive) {
                if (!project.customCategories.includes(cat.name)) {
                    meetsCriteria = false;
                }
            }
        });

        if (meetsCriteria) {
            return (
                <SingleOverviewItem key={project.id} project={project} />
            );
        }
    });




    function handleProjectCategories(clickedCategory) {
        const newState = projectCategories.map(cat => {
            if (cat.name === clickedCategory) {

                return { ...cat, isActive: !cat.isActive };
            }

            return cat;
        });
        let filterActive = false;
        newState.map(cat => {
            if (cat.isActive) {
                filterActive = true;
            }
        });
        setprojectCategoriesFilterIsActive(filterActive);

        updateProjectCategories(newState);
    }

    function handleCustomCategories(clickedCategory) {
        const newState = customCategories.map(cat => {
            if (cat.name === clickedCategory) {

                return { ...cat, isActive: !cat.isActive };
            }

            return cat;
        });

        let filterActive = false;
        newState.map(cat => {
            if (cat.isActive) {
                filterActive = true;
            }
        });
        setcustomCategoriesFilterIsActive(filterActive);

        updateCustomCategories(newState);
    }




    const projectCategoriesItems = projectCategories.map(({ name, isActive }) =>
        <a key={name}><li className={isActive ? 'project-category category-active' : 'projectCategory '} onClick={() => handleProjectCategories(name)}>{name}</li></a>
    );
    const customCategoriesItems = customCategories.map(({ name, isActive }) =>
        <a key={name}><li className={isActive ? 'custom-category category-active' : 'customCategory '} onClick={() => handleCustomCategories(name)}>{name}</li></a>
    );

    return (
        <section className='overview-filter'>
            <div className='custom-categories '>
                <ul>
                    {customCategoriesItems}
                </ul>
                <div className='search-container'>
                    <input placeholder='Does not work, api mayb?'></input>
                </div>
            </div>
            <div className='project-archive-container'>
                <div className='project-categories d-none d-xxl-block'>
                    <ul>
                        {projectCategoriesItems}
                    </ul>
                </div>
                <div className='project-archive'>
                    <div className='overview-filter-single-project'>
                        {singleProjectItems}
                    </div>
                </div>
            </div>
        </section>
    );
}


OverviewFilter.propTypes = {
    projects: propTypes.array
};

export default OverviewFilter;

function SingleOverviewItem(props) {

    // const customCategories = props.customCategories;
    const project = props.project;

    return (
        <div className='single-overview-item'>
            <div className='single-overview-projectname'>{project.name}</div>

            <div className='d-flex'>
                <div className='single-overview-thumbnail-container'>
                    <a>
                        <img src={project.imageurl[0]}></img>
                    </a>
                </div>
                <div className='single-overview-info-container'>
                    <div className='single-overview-info'>
                        <div className='single-overview-categories'>{project.projectCategories}</div>
                        <div className='single-overview-date-icons'><span>{project.date} </span>
                            <div className='icons'>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='single-overview-usp d-none d-lg-block'>{project.usp}</div>

            </div>
        </div>
    );
}

SingleOverviewItem.propTypes = {
    project: PropTypes.object
};
