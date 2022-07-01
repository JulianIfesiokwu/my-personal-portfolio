import Button from "../Button/Button.component";

import "./FeaturedProject.styles.css";

const FeaturedProject = ({ image, title, live, code }) => {
  return (
    <article className="fav-projects">
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="about-project">
          An E-commerce website with routing, shopping cart functionality, react
          modal and form validation. The project has more than 5 pages and is
          hosted on vercel.
        </p>
        <div className="view-project">
          <a href={live} target="_blank" rel="noreferrer">
            <Button title={`Live project`} />
          </a>
          <a href={code} target="_blank" rel="noreferrer">
            <Button title={`Source code`} />
          </a>
        </div>
      </div>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
    </article>
  );
};

export default FeaturedProject;
