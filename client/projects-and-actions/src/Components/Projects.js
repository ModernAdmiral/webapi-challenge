import React, { useEffect, useState } from "react";
import Project from "./Project";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8008/api/projects`)
      .then(response => {
        console.log(response);
        setProjects(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {projects.map(project => (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          completed={project.completed}
        />
      ))}
    </div>
  );
};

export default Projects;
