import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <div>
        <h2 className={styles.title2}>These are some of my best works. Please look into my <a href="https://github.com/raghu071003">github account</a> to know more of my works.</h2>
      </div>
    </section>
  );
};
