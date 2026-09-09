import {About} from "./sections/About.tsx";

export const CvPage = () => {
    return (
        <main className="flex flex-col items-center px-12 py-12">
            {/*<section id="highlights"><Highlights/></section>*/}
            <section id="about"><About/></section>
            {/*<section id="projects"><Projects/></section>*/}
            {/*<section id="contacts"><Contacts/></section>*/}
        </main>
    );
};