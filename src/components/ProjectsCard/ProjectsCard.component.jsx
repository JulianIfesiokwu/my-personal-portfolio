import "./ProjectsCard.styles.css";

const ProjectsCard = ({
  name,
  description,
  live,
  source,
  technologies,
  image,
}) => {
  return (
    <div className="projects-card">
      <div className="project-img-container">
        <img src={image} alt={name} className="project-img" />
      </div>
      <div className="project-information">
        <p className="project-name">{name}</p>
        <p className="technologies">
          {technologies.map((tech, index) => {
            return (
              <span className="pill" key={index}>
                {tech}{" "}
              </span>
            );
          })}
        </p>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Live
          </a>
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="project-link-two"
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
