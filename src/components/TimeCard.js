import React from "react";
import Card from "./Card";

export default function TimeCard({ children }) {
    return (
        <div className="w-full group mb-10 sm:p-3 sm:flex rounded-lg transition duration-75 sm:hover:bg-slate-500/30 sm:hover:translate-y-0.5 sm:hover:shadow-lg sm:hover:shadow-teal-600/30">
            <div className="sm:w-1/4">{children.period}</div>
            <div className="sm:w-3/4">
                <Card>{children}</Card>
            </div>
        </div>
    );
}
