import React from "react";
import { projects } from "../contents/ProjectsData";
import ImageCard from "../components/ImageCard";

export default function Projects() {
    const renderedProjects = projects.map((project, index) => {
        return <ImageCard key={index} {...project} />;
    });
    return <div className="projects">{renderedProjects}</div>;
}
