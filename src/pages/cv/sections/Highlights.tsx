//to do
// пока пойдет. Надо еще добавить проекты

import {ProjectLink} from "../../../shared/ui/Link/ProjectLink.tsx";
import {Trans} from "react-i18next";
import {links} from "../../../shared/types/links.ts";
import {SocialLink} from "../../../shared/ui/Link/SocialLink.tsx";

export const Highlights = () => {
    return (
        <section className="highlights flex flex-col justify-center items-center gap-6 pt-12">
            <div className="text-section flex flex-col justify-center items-center">
                <div className="text-block flex items-baseline gap-24 w-[80%]">
                    <h1 className="text-[144px]">Frontend</h1>
                    <ProjectLink text="Projects" href="https://github.com/Marassanovad"/>
                </div>
                <div className="text-block flex items-center gap-24 w-[80%]">
                    <p className="text-md w-1/4">
                        <Trans i18nKey="highlights.description"
                               components={{
                                   br: <br/>,
                                   highlight:
                                       <span className="italic text-[var(--color-text-header)]"/>,
                               }}/>
                    </p>
                    <h1 className="text-[144px]">Developer</h1>
                </div>
            </div>
            <div className="link-container flex justify-center gap-8"> {links.map(({key, href, icon}) => (
                <SocialLink key={key} href={href} icon={icon} text={key}/>))}
            </div>
        </section>
    )
}