import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import '../css/OverviewFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const placeHolderImage = '/images/placeholder/placeholder.png';

function OverviewFilter() {

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
    const projects = [
        {
            id: 0,
            name: 'Porject One',
            date: '22-10-2022',
            usp: 'One awesome project, the very first one ever',
            projectCategories: [
                'Games', 'Virtual Reality'
            ],
            customCategories: [
                'Recent', 'My Recommendations'
            ],
        },
        {
            id: 1,
            name: 'Porject Two',
            date: '22-11-2022',
            usp: 'Second awesome project, the second one ever, currently in development',
            projectCategories: [
                'Games', 'Application'
            ],
            customCategories: [
                'Upcoming', 'My Recommendations'
            ],
        },

    ]

    const singleProjectItems = projects.map(project => {
        let meetsCriteria = true;
        if (projectCategoriesFilterIsActive) projectCategories.map(cat => {
            if (cat.isActive) {
                if (!project.projectCategories.includes(cat.name)){
                    meetsCriteria = false;
                } 
            }
        });
        if (customCategoriessFilterIsActive) customCategories.map(cat => {
            if (cat.isActive) {
                if (!project.customCategories.includes(cat.name)){
                    meetsCriteria = false;
                } 
            }
        });

        if (meetsCriteria) {
            return (
                <SingleOverviewItem key={project.id} name={project.name} date={project.date} usp={project.usp} projectCategories={project.projectCategories} customCategories={project.customCategories} />
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
            <div className='custom-categories'>
                <ul>
                    {customCategoriesItems}
                </ul>
                <div className='search-container'>
                    <input></input>
                </div>
            </div>
            <div className='project-archive-container'>
                <div className='project-categories'>
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

};

export default OverviewFilter;

function SingleOverviewItem(props) {

    // const customCategories = props.customCategories;

    return (
        <div className='single-overview-item'>
            <div className='single-overview-thumbnail-container'>
                <a>
                    <img src={placeHolderImage}></img>
                </a>
            </div>
            <div className='single-overview-info-container'>
                <div className='single-overview-projectname'>{props.name}</div>
                <div className='single-overview-info'>
                    <div className='single-overview-categories'>Games Vr</div>
                    <div className='single-overview-date-icons'><span>{props.date} </span>
                        <div className='icons'>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </div>
                    <div className='single-overview-usp'>{props.usp}</div>
                </div>
            </div>
        </div>
    );
}

SingleOverviewItem.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    usp: PropTypes.string,
    projectCategories: PropTypes.array,
    customCategories: PropTypes.array,
};
