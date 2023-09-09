import React from "react";
import NavMenu from "./NavMenu";
import ContactMeList from "./ContactMeList";
import { twMerge } from "tailwind-merge";
import className from "classnames";
import { profile } from "../util/Profile";

export default function Header({ sections, animateScrolling }) {
    // animation on name
    // tailwind only supports full class name, not dynamic concatenation of its parts
    const getDelay = () => {
        return {
            0: "delay-[50ms]",
            1: "delay-[75ms]",
            2: "delay-[100ms]",
            3: "delay-[125ms]",
            4: "delay-[150ms]",
            5: "delay-[175ms]",
            6: "delay-[200ms]",
            7: "delay-[225ms]",
            8: "delay-[250ms]",
            9: "delay-[275ms]",
            10: "delay-[300ms]",
            11: "delay-[325ms]",
            12: "delay-[350ms]",
        };
    };

    const renderedName = [...profile.name].map((c, index) => {
        const classes = twMerge(
            className(
                "transition",
                "duration-75",
                "group-hover/name:text-teal-400",
                "group-hover/name:-translate-y-1",
                getDelay()[index]
            )
        );
        return (
            <span className={classes} key={"name_" + index}>
                {c}
            </span>
        );
    });
    return (
        <header className="sm:sticky sm:top-0 sm:flex sm:max-h-screen sm:w-1/3 sm:flex-col sm:justify-between sm:py-6 md:py-12 lg:py-24">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-200 lg:text-5xl">
                    <a href="/">
                        <span className="group/name inline-flex">{renderedName}</span>
                    </a>
                </h1>
                <h2 className="mt-3 text-md font-medium tracking-tight text-slate-200 md:test-lg lg:text-xl">
                    {profile.position}
                </h2>
                <p className="mt-4 max-w-xs leading-normal">{profile.description}</p>
                <NavMenu sections={sections} animateScrolling={animateScrolling} />
            </div>
            <ContactMeList />
        </header>
    );
}
