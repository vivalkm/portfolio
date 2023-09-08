import Header from "./components/Header";
import Main from "./pages/Main";
function App() {
    return (
        <div>
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <Header currentElementIndexInViewport />
                    <Main />
                </div>
            </div>
        </div>
    );
}

export default App;
