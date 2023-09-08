import React from "react";
import NavMenu from "./NavMenu";
import ContactMeList from "./ContactMeList";

export default function Header({ currentElementIndexInViewport }) {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">
                        <span className="group/name inline-flex">
                            <span className="group-hover/name:text-teal-400 transition duration-75 group-hover/name:-translate-y-1 delay-[50ms]">
                                L
                            </span>
                            <span className="group-hover/name:text-teal-400 transition duration-75 group-hover/name:-translate-y-1 delay-[75ms]">
                                i
                            </span>
                            <span className="group-hover/name:text-teal-400 transition duration-75 group-hover/name:-translate-y-1 delay-[100ms]">
                                n
                            </span>
                            <span className="group-hover/name:text-teal-400 transition duration-75 group-hover/name:-translate-y-1 delay-[125ms]">
                                c
                            </span>
                            <span className="group-hover/name:text-teal-400 transition duration-75 group-hover/name:-translate-y-1 delay-[150ms]">
                                o
                            </span>
                            <span className="group-hover/name:text-teal-400 transition duration-75 group-hover/name:-translate-y-1 delay-[175ms]">
                                l
                            </span>
                            <span className="group-hover/name:text-teal-400 transition duration-75 group-hover/name:-translate-y-1 delay-[200ms]">
                                n
                            </span>
                            <span className="group-hover/name:text-teal-400 transition duration-75 group-hover/name:-translate-y-1 delay-[225ms]">
                                &nbsp;
                            </span>
                            <span className="group-hover/name:text-teal-400 transition duration-75 group-hover/name:-translate-y-1 delay-[250ms]">
                                L
                            </span>
                            <span className="group-hover/name:text-teal-400 transition duration-75 group-hover/name:-translate-y-1 delay-[275ms]">
                                i
                            </span>
                        </span>
                    </a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Software Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">I do something XXXX.</p>
                <NavMenu />
            </div>
            <ContactMeList />
        </header>
    );
}
