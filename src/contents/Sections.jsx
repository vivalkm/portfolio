import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";

export const sections = [
    {
        id: "about",
        label: "about",
        wrapperClassName: "section",
        content: <About />,
    },
    {
        id: "experience",
        label: "experience",
        wrapperClassName: "section",
        content: <Experience />,
    },
    {
        id: "projects",
        label: "projects",
        wrapperClassName: "section",
        content: <Projects />,
    },
];
