export default function MainSectionTitle({ children }) {
    return (
        <div className="sticky top-0 z-20 -mx-6 px-6 sm:mx-auto mb-4 w-screen bg-slate-800/75 sm:bg-slate-800/90 sm:shadow-[-5px_5px_15px_5px_rgb(30,41,59)] backdrop-blur sm:px-3">
            <h2 className="text-sm w-full py-3 sm:py-5 font-bold uppercase tracking-widest text-slate-200">
                {children}
            </h2>
        </div>
    );
}