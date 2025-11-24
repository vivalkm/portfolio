import MainSectionTitle from "./MainSectionTitle";

export default function MainSection({ id, title, children }) {
    return (
        <section id={id} className="pt-5 sm:pt-6 md:pt-12 lg:pt-24">
            <MainSectionTitle>{title}</MainSectionTitle>
            {children}
        </section>
    );
}
