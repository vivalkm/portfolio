import { ExternalLink, Github } from "../contents/ContactMeData";
export default function Card({ title, prevTitle, description, skills, demoLink, gitHubLink }) {
    const renderedSkills = skills?.map((skill, index) => {
        return (
            <div className="rounded-full mr-2 mb-2 text-sm font-bold text-slate-200 bg-slate-300/20 px-2 py-1" key={index}>
                {skill}
            </div>
        );
    });

    return (
        <>
            <p className="flex font-bold text-slate-200 ">
                <span className="sm:group-hover:text-teal-400 sm:group-hover:font-bold sm:group-hover:bg-clip-text sm:group-hover:text-transparent sm:group-hover:bg-gradient-to-r sm:group-hover:from-teal-400 sm:group-hover:to-white">
                    {title}
                </span>
                <span className="ml-5 flex">
                    {demoLink && (
                        <span className="ml-2 transition hover:translate-x-0.5 hover:-translate-y-0.5">
                            <a href={demoLink} target="_blank" rel="noreferrer">
                                {ExternalLink.svg}
                            </a>
                        </span>
                    )}
                    {gitHubLink && (
                        <span className="ml-2 transition hover:translate-x-0.5 hover:-translate-y-0.5">
                            <a href={gitHubLink} target="_blank" rel="noreferrer">
                                {Github.svg}
                            </a>
                        </span>
                    )}
                </span>
            </p>
            <p className="text-slate-400">{prevTitle}</p>
            <p className="mt-1">{description}</p>
            <div className="flex flex-wrap mt-2">{renderedSkills}</div>
        </>
    );
}
