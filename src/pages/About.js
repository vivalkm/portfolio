import React from "react";
import { skills } from "../contents/Skills";

export default function About() {
    // number of columns to display skills
    const columns = 2,
        countPerColumn = skills.length / columns;
    let start = 0;
    const renderedSkills = [];
    for (let i = 0; i < columns; i++) {
        const skillsColumn = skills.slice(start, start + countPerColumn).map((skill, index) => {
            return (
                <li key={index}>
                    <span className="hover:font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:to-white">
                        <span className="text-xs mr-2">&#10003;</span>
                        {skill}
                    </span>
                </li>
            );
        });
        renderedSkills.push(<ul key={i}>{skillsColumn}</ul>);
        start += countPerColumn;
    }

    return (
        <div className="about sm:px-3 mb-10">
            <p className="mb-5">
                Hey there, I'm Lincoln, and I enjoy building stuff and creating projects to solve
                problems and out of curiosity.
            </p>
            <p className="mb-5">
                Currently working in Business Intelligence and Analytics, I specialize in building
                automated solutions for forecasting, reporting, and analysis. I provide data-driven
                recommendations aimed at driving business growth and increasing ROI.
            </p>
            <p className="mb-5">
                {/* My journey into the world of software engineering began with intense curiosity and
                solidified by strong academic foundation.  */}
                I'm also pursuing Master of Computer and Information Technology at the University of
                Pennsylvania, where I've maintained a perfect 4.0 GPA. My coursework ranges from
                software development to artificial intelligence and natural language processing.
            </p>
            <p className="mb-5">
                In addition to my academic endeavors, I've honed my skills through hands-on projects
                that reflect my passion for innovation. From developing serverless web applications
                to generating business insights via data analytics, I thrive on turning ideas into
                reality. My technical toolkit includes a diverse range of programming languages,
                databases, and web development technologies. Here are a few technologies I’ve been
                working with recently:
            </p>
            <div className="grid grid-cols-2 mb-5">{renderedSkills}</div>
        </div>
    );
}
