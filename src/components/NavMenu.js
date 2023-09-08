import React from "react";
import NavItem from "./NavItem";

export default function NavMenu() {
    return (
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                <NavItem href="#about">About</NavItem>
                <NavItem href="#experience">Experience</NavItem>
                <NavItem href="#projects">Projects</NavItem>
            </ul>
        </nav>
    );
}
