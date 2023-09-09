import React from "react";
import MainSection from "../components/MainSection";
import Footer from "./Footer";

export default function Main({ sections }) {
    const renderedSections = sections.map((section) => {
        return (
            <MainSection id={section.id} title={section.label} key={section.id}>
                {section.content}
            </MainSection>
        );
    });
    return (
        <main id="content" className="pt-24 md:w-2/3 md:py-24">
            {renderedSections}
            <Footer />
        </main>
    );
}
