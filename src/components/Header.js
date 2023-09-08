import React from "react";
import NavMenu from "./NavMenu";
import ContactMeList from "./ContactMeList";
import { twMerge } from "tailwind-merge";
import className from "classnames";
import { profile } from "../util/Profile";

export default function Header({ sections, animateScrolling }) {
    let time = 50;
    // animation on name
    const renderedName = [...profile.name].map((c, index) => {
        const classes = twMerge(
            className(
                "group-hover/name:text-teal-400",
                "transition",
                "duration-75",
                "group-hover/name:-translate-y-1",
                `delay-[${time}ms]`
            )
        );
        time += 25;
        return (
            <span className={classes} key={"name_" + index}>
                {c}
            </span>
        );
    });
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">
                        <span className="group/name inline-flex">{renderedName}</span>
                    </a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    {profile.position}
                </h2>
                <p className="mt-4 max-w-xs leading-normal">{profile.description}</p>
                <NavMenu sections={sections} animateScrolling={animateScrolling} />
            </div>
            <ContactMeList />
        </header>
    );
}
