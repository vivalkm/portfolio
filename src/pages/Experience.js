import React from "react";
import { jobs } from "../contents/ExperienceData";
import TimeCard from "../components/TimeCard";

export default function Experience() {
    const renderedJobs = jobs.map((job, index) => {
        return <TimeCard key={index}>{job}</TimeCard>;
    });
    return (
        <div>
            {renderedJobs}
            <div className="w-full -mt-4 mb-10">
                <a
                    href="/Lincoln Li - tech.pdf"
                    className="float-right text-teal-400 hover:text-teal-200 hover:font-bold"
                    download
                >
                    View Full Resume in PDF
                </a>
            </div>
        </div>
    );
}
