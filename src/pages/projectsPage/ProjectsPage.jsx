import React, { useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { projects } from '../../data';
import "./ProjectsPage.styles.css";
import { AiOutlineClose } from "react-icons/ai";

const ProjectsPage = () => {
  const [active, setActive] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // For the requestedProject
  const [requested, setRequested] = useState();

  // when filter button is clicked
  const filterProjects = ({ filter }) => {
    // make the clicked filter button active
    setActive(filter);
    // change the displayed projects to the button that is clicked
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      const newFilteredProjects = projects.filter((project) =>
        project.technologies.includes(filter)
      );
      setFilteredProjects(newFilteredProjects);
    }
  };

  const allTech = projects.map((project) => {
    return project.technologies;
  });
  // flatten the returned array
  let flattened = [].concat([], ...allTech);
  // remove repeating values and add the all button
  let filterCriteria = ["All", ...new Set(flattened)];

  const viewProject = (name) => {
    const requestedProject = projects.filter((project) => {
      return project.name === name
    });
    setRequested(requestedProject);
    // disable scrolling on body
    document.body.style.overflow = 'hidden';
  }

  // close requested project
  const closeRequest = () => {
    setRequested('');
    // enable scrolling on body
    document.body.style.overflow = 'auto';
  }

  return (
    <main className='projects-page'>
      { requested && 
        <div className='requested'>
          <AiOutlineClose size='30' style={{color: 'var(--primary-text-color)'}} onClick={closeRequest} className='close-btn' />
            <div className='expanded'>
              <div className="project-info">
                <h2 className='small-title'>{requested[0].name}</h2>
                <p className='description'>{requested[0].description}</p>
                <a href={requested[0].live} rel="noopener noreferrer" target='_blank' className='live-link'>Live Demo</a>
                <a href={requested[0].source} rel="noopener noreferrer" target='_blank' className='live-link'>Source Code</a>
              </div>
              <div className="img-container">
                <img src={requested[0].image} alt={requested[0].name} />
              </div>             
            </div>
        </div>
      }
      <section className='projects-details'>
        <div className="projects-filter">
          <div className="filter-buttons">
            {filterCriteria.map((filter, index) => {
              return (
                <button
                  key={index}
                  className={
                    active === filter ? "selected filter-btn" : "filter-btn"
                  }
                  onClick={() => filterProjects({ filter })}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
        <ResponsiveMasonry className="project-list" columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
          <Masonry gutter="2rem">
            {filteredProjects.map((project, index) => {
              const { name, image } = project;
              return (
                  <div className='project-thumbnail' key={index}>
                    <img src={image} alt={name} onClick={() => viewProject(name)} />
                  </div>
                );
              })
            }
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </main>
  )
};

export default ProjectsPage;
