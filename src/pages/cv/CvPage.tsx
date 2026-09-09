import {About} from "./sections/About.tsx";
import {Contacts} from "./sections/Contacts.tsx";

export const CvPage = () => {
    return (
        <main className="flex flex-col items-center px-12 py-12 gap-16 w-full">
            {/*<section id="highlights"><Highlights/></section>*/}
            <section id="about"><About/></section>
            {/*<section id="projects" className="w-full"><Projects/></section>*/}
            <section id="contacts"><Contacts/></section>
        </main>
    );
};