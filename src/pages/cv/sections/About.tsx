import {Trans, useTranslation} from "react-i18next";
import {NavigationLink} from "../../../shared/ui/Link/NavigationLink.tsx";
import photo from "../../../shared/assets/photo.webp"
import {GitHubIcon} from "../../../shared/ui/icons/GitHubIcon.tsx";

export const About = () => {
    const {t} = useTranslation();
    return (
        <section className="about_container">
            <div className="text-container flex justify-items-start text-start gap-[560px] pb-14">
                <h2>.../{t(`navigation.about`)}...</h2>
                <p className="text-xl">
                    <Trans i18nKey="about.description"
                           components={{
                               br: <br/>,
                               highlight:
                                   <span className="italic text-[var(--color-text-header)]"/>,
                           }}/>
                </p>
            </div>
            <div className="container flex justify-between">
                <div className="skills-container flex flex-col gap-6">

                    <div
                        className="skills-card p-8 border-[var(--color-surface)] border rounded-3xl bg-[var(--color-text-header)]">
                        <h2 className="skills-header text-xl text-[var(--color-background)]">Front-End</h2>
                        <p className="skills-description text-[var(--color-background)]">
                            React • Vue • TypeScript • JavaScript • HTML • CSS • Tailwind CSS<br/>
                            SCSS • React Router • i18next • React Hook Form • Zod
                        </p>
                    </div>

                    <div className="flex justify-items-start gap-28">
                        <div className="skills-card p-8 border-[var(--color-surface)] border rounded-3xl">
                            <h2 className="skills-header text-xl text-[var(--color-text)]">{t(`about.tools`)}</h2>
                            <p className="skills-description text-[var(--color-text-header)]">Git • GitHub • Vite •
                                WebStorm<br/>VS Code • Figma • npm</p>
                        </div>
                        <NavigationLink
                            icon={<GitHubIcon size={24} className="text-white bg-black"/>}
                            href="https://github.com/Marassanovad"
                        />
                    </div>

                    <div className="skills-card p-8 border-[var(--color-surface)] border rounded-3xl">
                        <h2 className="skills-header text-xl text-[var(--color-text)]">Soft Skills</h2>
                        <p className="skills-description text-[var(--color-text-header)]">
                            <Trans i18nKey="about.softSkillsDescription"
                                   components={{
                                       br: <br/>,
                                   }}/>
                        </p>
                    </div>

                    <div className="flex justify-between">
                        <p className="max-w-64 text-start align-middle">
                            <Trans i18nKey="about.note"
                                   components={{
                                       br: <br/>,
                                       highlight:
                                           <span className="italic text-[var(--color-text-header)]"/>,
                                   }}/>
                        </p>
                        <div className="skills-card p-8 border-[var(--color-surface)] border rounded-3xl">
                            <h2 className="skills-header text-xl text-[var(--color-text)]">{t(`about.languages`)}</h2>
                            <p className="skills-description text-[var(--color-text-header)]">
                                <Trans i18nKey="about.languagesDescription"
                                       components={{
                                           br: <br/>,
                                       }}/>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="image-container max-w-lg">
                    <img
                        src={photo}
                        alt="Personal Image"
                        className="rounded-3xl"
                    />
                </div>

            </div>
        </section>
    )
}