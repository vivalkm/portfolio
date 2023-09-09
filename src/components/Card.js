import React from "react";

export default function Card({ children }) {
    return (
        <div className="group mb-2 sm:flex rounded-lg p-3 transition duration-75 hover:translate-x-0.5 hover:bg-slate-500/30">
            {children.period && <div className="sm:w-1/4 px-1">{children.period}</div>}
            <div className="px-1 sm:w-3/4">
                <p className="font-bold text-slate-200 group-hover:text-teal-400">
                    {children.title}
                </p>
                <p className="text-slate-400">{children.prevTitle}</p>
                <p className="mt-1">{children.description}</p>
            </div>
        </div>
    );
}
