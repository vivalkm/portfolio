import React from "react";

export default function Footer() {
    return (
        <>
            <div id="spacer1" className="h-[300px]">
                <br />
            </div>
            <div id="spacer2" className="h-[200px] hidden lg:block">
                <br />
            </div>
            <p id="version" className="text-slate-700 text-sm text-right">
                v 2023.09
            </p>
        </>
    );
}
