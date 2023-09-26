import React from "react";
import { jobs } from "../contents/ExperienceData";
import TimeCard from "../components/TimeCard";

export default function Experience() {
    const renderedJobs = jobs.map((job, index) => {
        return <TimeCard key={index}>{job}</TimeCard>;
    });
    return (
        <div className="experience mb-10">
            {renderedJobs}
            <div className="-mt-4 pb-10">
                <a
                    id="download_link"
                    href="/Resume_Lincoln_Li.pdf"
                    className="float-right text-teal-400 hover:text-teal-200 hover:font-bold border-teal-200 p-2 rounded hover:shadow-md hover:shadow-teal-100"
                    target="_blank"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    View Full Resume in PDF
                </a>
            </div>
        </div>
    );
}
