import React from "react";
import MainSectionTitle from "./MainSectionTitle";

export default function MainSection({ id, title, children }) {
    return (
        <section id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 md:pt-12 lg:pt-24">
            <MainSectionTitle>{title}</MainSectionTitle>
            {children}
        </section>
    );
}
