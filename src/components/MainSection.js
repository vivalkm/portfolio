import React from "react";
import MainSectionTitle from "./MainSectionTitle";

export default function MainSection({ id, title, children }) {
    return (
        <section id={id} className="mb-16 pt-4 md:mb-24 lg:mb-36 sm:pt-6 md:pt-12 lg:pt-24">
            <MainSectionTitle>{title}</MainSectionTitle>
            {children}
        </section>
    );
}
