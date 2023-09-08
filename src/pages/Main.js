import React from "react";
import MainSection from "../components/MainSection";

export default function Main({ sections }) {
    const renderedSections = sections.map((section) => {
        return (
            <MainSection id={section.id} title={section.label} key={section.id}>
                {section.content}
            </MainSection>
        );
    });
    return (
        <main id="content" className="pt-24 lg:w-2/3 lg:py-24">
            {renderedSections}
        </main>
    );
}
