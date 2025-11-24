import ScrollSpy from "./util/ScrollSpy";
import { sections } from "./contents/Sections";
function App() {
    return (
        <>
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 sm:py-0 lg:px-24">
                <div className="sm:flex sm:justify-between sm:gap-2 md:gap-3 lg:gap-4">
                    {/*ScrollSpy properties:
          - sections: list of sections to display in scroll spy component
          - isNavigateToFirstSectionOnLoad: boolean to navigate to the first section of the app
          - menuWrapperClassName: className used to apply styles on the navigation menu
          - mainContentClassName: className used to apply styles on the main content
           */}
                    <ScrollSpy sections={sections} isNavigateToFirstSectionOnLoad />
                </div>
            </div>
        </>
    );
}

export default App;
