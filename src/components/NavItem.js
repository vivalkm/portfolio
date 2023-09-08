import React from "react";
import NavIndicator from "./NavIndicator";

export default function NavItem({ children, href }) {
    return (
        <li>
            <a className={"group flex items-center py-3"} href={href}>
                <NavIndicator />
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {children}
                </span>
            </a>
        </li>
    );
}
