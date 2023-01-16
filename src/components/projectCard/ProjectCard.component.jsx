import React from 'react';
import './ProjectCard.styles.css';

const ProjectCard = ({ title, live, code, image}) => {
  return (
    <div className="project-card">
        <div className="view-project">
          <h3>{title}</h3>
          <a href={live} target="_blank" rel="noreferrer" className='live'>
            {title=`View Live`}
          </a>
          <a href={code} target="_blank" rel="noreferrer" className='source-code'>
            {title=`Source code`}
          </a>
        </div>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default ProjectCard;
