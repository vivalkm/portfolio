import React from "react";

export default function MainSectionTitle({ children }) {
    return (
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-800/75 px-6 py-5 backdrop-blur sm:-mx-6 md:px-12 md:sr-only md:relative md:top-auto lg:mx-auto md:w-full lg:px-0 lg:py-0 md:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 md:sr-only">
                {children}
            </h2>
        </div>
    );
}
