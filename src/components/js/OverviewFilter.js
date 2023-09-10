import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import '../css/OverviewFilter.css';
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
            <div className='archive-filter'>
                <ul>
                    {customCategoriesItems}
                </ul>
                {/* <div className='col-8'>
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
                </div>
            </div> */}
                <ul>
                    {projectCategoriesItems}
                </ul>
            </div>
            <div className='project-archive'>
                {singleProjectItems}
            </div>
        </section>
    );
}
OverviewFilter.propTypes = {
    handleNewProjectPage: PropTypes.func
};


export default OverviewFilter;

function SingleOverviewItem(props) {

    const project = props.project;
    const projectThumbnails = project.imageurl;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState(projectThumbnails[0]);
    
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
        setBackgroundImage(projectThumbnails[0]);
    };

    const NextImage = (prevIndex) => {
        let nextIndex = prevIndex + 1;
        nextIndex = nextIndex === projectThumbnails.length ? 0 : nextIndex;
        setCurrentIndex(nextIndex);
        setBackgroundImage(projectThumbnails[nextIndex]);
        timeoutRef.current = setTimeout(() => NextImage(nextIndex), timeoutDelay);
    };

    // const customCategories = props.customCategories;
    const handleClick = () => {
        props.loadProject(project.id);
    };


    useEffect(() => {
        return () => {
          clearTimeout(timeoutRef.current); // Clear timeout in cleanup
        };
      }, [/* dependencies */]);

    return (
        <div className='single-overview-item'
            onClick={handleClick}
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
                    <div className='single-overview-projectname'><h3>{project.name}</h3></div>
                    <div className='single-overview-usp'>{project.usp}</div>
                </div>
            </div>
        </div>
    );
}

SingleOverviewItem.propTypes = {
    project: PropTypes.object,
    loadProject: PropTypes.func
};
