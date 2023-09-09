import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import '../css/OverviewFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const projects = [
    {
        id: 0,
        name: "Super Xenon Galaxy",
        usp: "In Super Xenon Galaxy you use a custom controller to match color and collect cookies around space!",
        date: '29-11-2021',
        imageurl: ["/soft-coded/xenon/Image1.png", "/soft-coded/xenon/Image2.png", "/soft-coded/xenon/Image3.png", "/soft-coded/xenon/Image4.png"],
        videourl: "/soft-coded/xenon/superxenongalaxytrailer-1.mp4",
        projectCategories: [
            'Games',
        ],
        customCategories: [
            'My Recommendations'
        ],
    },
    {
        id: 1,
        name: "Tetris",
        usp: "Tetris is the same Tetris game as everyone knows, but in this version the levels are shaped in patterns making it harder (or easier) to play.",
        date: '27-01-2022',
        imageurl: ["/soft-coded/tetris/Image1.png", "/soft-coded/tetris/Image2.png", "/soft-coded/tetris/Image3.png", "/soft-coded/tetris/Image4.png"],
        videourl: "/soft-coded/tetris/movie.mkv",
        projectCategories: [
            'Games',
        ],
        customCategories: [
            'My Recommendations'
        ],
    },
    {
        id: 2,
        name: "The Rolling cones",
        usp: "In The Rolling Cones, you play around as a pinecone, placeobjects around the level to reach new areas and solve puzzles.",
        date: '12-05-2022',
        imageurl: ["/soft-coded/cones/image1.png", "/soft-coded/cones/image2.png", "/soft-coded/cones/image3.png", "/soft-coded/cones/image4.png"],
        videourl: "/soft-coded/cones/Trailercones.mp4",
        projectCategories: [
            'Games',
        ],
        customCategories: [

        ],
    },
    {
        id: 3,
        name: "Sea of Debris",
        usp: "The sea is full of junk, plastic is everywhere. In this fun VR experience it's your job to clean up the ocean!",
        date: '23-09-2022',
        imageurl: ["/soft-coded/sea/Image1.png", "/soft-coded/sea/Image2.gif", "/soft-coded/sea/Image3.gif", "/soft-coded/sea/Image4.png"],
        videourl: "/soft-coded/sea/TrailerAE_V3.mp4",
        projectCategories: [
            'Games', 'Virtual Reality'
        ],
        customCategories: [
            'My Recommendations', 'Recent'
        ],
    }
]

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

    const loadProject = props.handleNewProjectPage;



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
                <SingleOverviewItem key={project.id} project={project} loadProject={loadProject} />
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
            <div className='col-8'>
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
            </div>
        </section>
    );
}
OverviewFilter.propTypes = {
    handleNewProjectPage: PropTypes.func
};


export default OverviewFilter;

function SingleOverviewItem(props) {

    // const customCategories = props.customCategories;
    const project = props.project;
    const loadProject = props.loadProject;
    const handleClick = () => {
        loadProject(project.id);
    };

    return (
        <div className='single-overview-item' onClick={handleClick}>
            <div className='single-overview-thumbnail-container'>
                <a>
                    <img src={project.imageurl[0]}></img>
                </a>
            </div>
            <div className='single-overview-info-container'>
                <div className='single-overview-info'>
                    <div className='single-overview-projectname'>{project.name}</div>
                    <div className='single-overview-usp d-none d-lg-block'>{project.usp}</div>
                    <div className='single-overview-date-icons'>
                        <div className='icons'>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

SingleOverviewItem.propTypes = {
    project: PropTypes.object,
    loadProject: PropTypes.func
};
