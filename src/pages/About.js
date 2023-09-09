import React from "react";

export default function About() {
    const skills = ["Python", "JavaScript", "React", "Node.js", "SQL", "Java", "CSS", "Express"];
    const renderedSkills1 = skills.slice(0, 4).map((skill, index) => {
        return (
            <li key={index}>
                <span className="text-xs mr-2">&#10003;</span>
                {skill}
            </li>
        );
    });
    const renderedSkills2 = skills.slice(4).map((skill, index) => {
        return (
            <li key={index + 4}>
                <span className="text-xs mr-2">&#10003;</span>
                {skill}
            </li>
        );
    });

    return (
        <div>
            <p className="mb-4">
                Hey there, I'm Lincoln, and I enjoy building stuff and creating projects to solve
                problems and out of curiosity.
            </p>
            <p className="mb-4">
                My journey into the world of software engineering began with intense curiosity and
                solidified by strong academic foundation. I'm currently pursuing Master of Computer
                and Information Technology at the University of Pennsylvania, where I've maintained
                a perfect 4.0 GPA. My coursework ranges from software development to artificial
                intelligence, and I've soaked up knowledge like a sponge.
            </p>
            <p className="mb-4">
                In addition to my academic endeavors, I've honed my skills through hands-on projects
                that reflect my passion for innovation. From developing serverless web applications
                to generating busienss insights from data analytics, I thrive on turning ideas into
                reality. My technical toolkit includes a diverse range of programming languages,
                databases, and web development technologies. Here are a few technologies I’ve been
                working with recently:
            </p>
            <div className="grid grid-cols-2 mb-4">
                <ul>{renderedSkills1}</ul>
                <ul>{renderedSkills2}</ul>
            </div>
            <p>
                I'm currently working in Corporate Finance at Amazon, focusing on buidling solutions
                in automating financial reporting and analysis processes, and providing data-driven
                recommendations to grow business and increase ROI.
            </p>
        </div>
    );
}
