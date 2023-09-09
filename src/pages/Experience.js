import React from "react";
import Card from "../components/Card";
import { jobs } from "../contents/ExperienceData";

export default function Experience() {
    const renderedJobs = jobs.map((job, index) => {
        return <Card key={index}>{job}</Card>;
    })
    return (
        <div>
            {renderedJobs}
        </div>
    );
}
