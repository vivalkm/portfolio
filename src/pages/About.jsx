import React from "react";
import { skills } from "../contents/Skills";

export default function About() {
    const renderedSkills = skills.map((skill, index) => {
        return (
            <li key={index} className="break-inside-avoid">
                <span className="hover:font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:to-white">
                    <span className="text-xs mr-2">&#10003;</span>
                    {skill}
                </span>
            </li>
        );
    });

    return (
        <div className="about sm:px-3 mb-10">
            <p className="mb-5">
                Hi, I'm Lincoln. I have a passion for building software and creating projects that
                solve real-world problems.
            </p>
            <p className="mb-5">
                In my current role in Business Intelligence and Analytics at Remitly, I wear multiple hats from data engineer to data scientist to financial analyst.
                During my first year joining Remitly, I designed and developed an automated forecasting application for the core remittance business. I also managed
                 the data pipeline for financial transaction data, built a ETL manager application to replace manual reporting workflows, conducted
                in-depth data analytics, and built dashboards to provide insights into the remittance business.
            </p>
            <p className="mb-5">
                I earned a Master of Computer and Information Technology from the University of
                Pennsylvania, graduating with a perfect 4.0 GPA. My coursework ranged from
                software development to artificial intelligence and natural language processing.
            </p>
            <p className="mb-5">
                My technical toolkit spans a diverse range of programming languages, databases,
                and web development technologies. Here are a few I've been working with recently:
            </p>
            <ul className="columns-2 mb-5">{renderedSkills}</ul>
        </div>
    );
}
