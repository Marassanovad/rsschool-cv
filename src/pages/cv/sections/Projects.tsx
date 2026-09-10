import {useTranslation} from "react-i18next";
import {projects} from "../../../shared/types/projects.ts";
import {ProjectLink} from "../../../shared/ui/Link/ProjectLink.tsx";

export const Projects = () => {
    const {t} = useTranslation();
    return(
        <div className="projects_section flex flex-col gap-6">
            <h1 className="projects_header text-end text-6xl">{t(`navigation.projects`)}</h1>
            <hr className="w-full border-[var(--color-surface)]"/>
            <div className="project-cards ml-auto grid w-[80%] grid-cols-2 gap-8">
                {projects.map(({ key, description, href }) => (
                    <div
                        key={key}
                        className="project-card card flex flex-col p-8 border-[var(--color-surface)] border rounded-3xl gap-6"
                    >
                        <h2 className="card-header text-2xl text-[var(--color-text-header)]">
                            {key}
                        </h2>

                        <p className="card-description text-[var(--color-text-header)]">
                            {t(`projects.` + description)}
                        </p>

                        <div className="mt-auto">
                            <ProjectLink
                                text={t(`projects.button`)}
                                href={href}
                            />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}