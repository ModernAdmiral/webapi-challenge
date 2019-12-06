import React from "react";

const Project = props => {
  const { name, description, completed } = props;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <span>{completed}</span>
    </div>
  );
};

export default Project;
