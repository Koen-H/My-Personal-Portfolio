import Home from './Home';
import ProjectPage from './ProjectPage';
// import OverviewFilter from './OverviewFilter';
import { useState} from 'react';

/* eslint-disable react/react-in-jsx-scope */





function Content() {
  const [selectedProjectPage, setProjectPage] = useState(null);
  const [fade, setFade] = useState(false);

  const handleNewProjectPage = (newProjectId) =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFade(true);

    setTimeout(() => {
      setProjectPage(newProjectId);
      setFade(false); 
    }, 500); 
  };

  return (
    <section className= {`${fade ? 'fade-out' : 'fade-in'}`} >

          {selectedProjectPage === null ? <Home handleNewProjectPage={handleNewProjectPage}/> : <ProjectPage projectId={selectedProjectPage} />}
          {/* <OverviewFilter handleNewProjectPage={handleNewProjectPage} /> */}

    </section>
  );
}

export default Content;
