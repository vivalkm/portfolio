import React from "react";
import NavItem from "./NavItem";

export default function NavMenu({ sections, animateScrolling }) {
    const renderedSections = sections.map((section, index) => {
        return (
            <li key={section.id}>
                <NavItem animateScrolling={animateScrolling} target_id={section.id} index={index}>
                    {section.label}
                </NavItem>
            </li>
        );
    });
    return (
        <nav className="nav hidden md:block" aria-label="In-page jump links">
            <ul className="md:mt-8 lg:mt-16 w-max">{renderedSections}</ul>
        </nav>
    );
}
