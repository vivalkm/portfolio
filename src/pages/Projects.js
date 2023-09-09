import React from "react";
import { projects } from "../contents/ProjectsData";
import Card from "../components/Card";

export default function Projects() {
    const renderedProjects = projects.map((project, index) => {
        return <Card key={index}>{project}</Card>;
    });
    return <div>{renderedProjects}</div>;
}
