import React from "react";
import { ExternalLink, Github } from "../contents/ContactMeData";
export default function Card({ children }) {
    const renderedSkills = children.skills?.map((skill, index) => {
        return <div className="rounded-full mr-2 mb-2 bg-slate-300/40 px-2 py-0" key={index}>{skill}</div>;
    });
    return (
        <div className="w-full group mb-10 sm:p-3 sm:flex rounded-lg transition duration-75 sm:hover:bg-slate-500/30 sm:hover:translate-y-0.5 sm:hover:shadow-lg sm:hover:shadow-teal-600/30">
            <div className="sm:w-1/4">
                {children.period && <>{children.period}</>}
                {children.imgUrl && (
                    <div className="pr-5 py-2">
                        <img
                            className="w-60 rounded border-2 border-slate-600 sm:group-hover:shadow-md sm:group-hover:shadow-teal-600/40"
                            src={children.imgUrl}
                        />
                    </div>
                )}
            </div>
            <div className="sm:w-3/4">
                <p className="flex font-bold text-slate-200 ">
                    <span className="sm:group-hover:text-teal-400 sm:group-hover:font-bold sm:group-hover:bg-clip-text sm:group-hover:text-transparent sm:group-hover:bg-gradient-to-r sm:group-hover:from-teal-400 sm:group-hover:to-white">
                        {children.title}
                    </span>
                    <span className="ml-5 flex">
                        {children.demoLink && (
                            <span className="ml-2 transition hover:translate-x-0.5 hover:-translate-y-0.5">
                                <a href={children.demoLink} target="_blank">
                                    {ExternalLink.svg}
                                </a>
                            </span>
                        )}
                        {children.gitHubLink && (
                            <span className="ml-2 transition hover:translate-x-0.5 hover:-translate-y-0.5">
                                <a href={children.gitHubLink} target="_blank">
                                    {Github.svg}
                                </a>
                            </span>
                        )}
                    </span>
                </p>
                <p className="text-slate-400">{children.prevTitle}</p>
                <p className="mt-1">{children.description}</p>
                <div className="flex flex-wrap mt-2">{renderedSkills}</div>
            </div>
        </div>
    );
}
