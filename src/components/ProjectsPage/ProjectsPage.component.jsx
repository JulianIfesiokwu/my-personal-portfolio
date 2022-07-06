import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm.component";
import { projects } from "../../data";
import "./ProjectsPage.styles.scss";
import ProjectsCard from "../ProjectsCard/ProjectsCard.component";

const ProjectsPage = () => {
  const [active, setActive] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = ({ filter }) => {
    setActive(filter);
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      const newFilteredProjects = projects.filter((project) =>
        project.technologies.includes(filter)
      );
      setFilteredProjects(newFilteredProjects);
    }
  };

  // get all arrays of technologies
  const allTech = projects.map((project) => {
    return project.technologies;
  });
  // flatten the returned array
  let flattened = [].concat([], ...allTech);
  // remove repeating values and add the all button
  let filterCriteria = ["All", ...new Set(flattened)];

  return (
    <section className="projects-page">
      <article className="projects-filters">
        <h2 className="filter-title">Filter by:</h2>
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
      </article>
      <article className="projects-container">
        {filteredProjects.map((project) => {
          const { name, description, technologies, live, source, image } =
            project;
          return (
            <ProjectsCard
              key={name}
              name={name}
              description={description}
              technologies={technologies}
              live={live}
              source={source}
              image={image}
            />
          );
        })}
      </article>
      <ContactForm />
    </section>
  );
};

export default ProjectsPage;
