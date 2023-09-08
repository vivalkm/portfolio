import React from "react";
import MainSection from "../components/MainSection";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Main() {
    return (
        <div id="content" className="pt-24 lg:w-2/3 lg:py-24">
            <MainSection id="about" title="about">
                <About />
            </MainSection>
            <MainSection id="experience" title="experience">
                <Experience />
            </MainSection>
            <MainSection id="projects" title="projects">
                <Projects />
            </MainSection>
        </div>
    );
}
