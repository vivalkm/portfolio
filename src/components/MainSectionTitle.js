import React from "react";

export default function MainSectionTitle({ children }) {
    return (
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-800/75 px-6 backdrop-blur sm:-mx-6 sm:px-6 md:px-12 sm:sr-only md:relative md:top-auto lg:mx-auto sm:w-full lg:px-0 lg:py-0">
            <h2 className="text-sm py-3 font-bold uppercase tracking-widest text-slate-200 sm:sr-only">
                {children}
            </h2>
        </div>
    );
}
