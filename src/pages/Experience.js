import React from "react";
import { jobs } from "../contents/ExperienceData";
import TimeCard from "../components/TimeCard";

export default function Experience() {
    const renderedJobs = jobs.map((job, index) => {
        return <TimeCard key={index}>{job}</TimeCard>;
    });
    return <div>{renderedJobs}</div>;
}
