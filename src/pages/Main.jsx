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
        <main id="content" className="sm:w-2/3">
            {renderedSections}
            <Footer />
        </main>
    );
}
