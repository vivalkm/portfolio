import React from "react";
import { jobs } from "../contents/ExperienceData";
import TimeCard from "../components/TimeCard";
import { useNavigate } from "react-router-dom";

export default function Experience() {
    const renderedJobs = jobs.map((job, index) => {
        return <TimeCard key={index}>{job}</TimeCard>;
    });
    const navigate = useNavigate();
    return (
        <div className="mb-10">
            {renderedJobs}
            <div className="-mt-4 pb-10">
                <a
                    href="/Resume_Lincoln_Li.pdf"
                    className="float-right text-teal-400 hover:text-teal-200 hover:font-bold border border-teal-200 p-2 rounded hover:shadow-md hover:shadow-teal-100"
                >
                    View Full Resume in PDF
                </a>
            </div>
        </div>
    );
}
