import {Trans, useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';

import {NavigationLink} from '../../../shared/ui/Link/NavigationLink.tsx';
import photo from '../../../shared/assets/photo.webp';
import {GitHubIcon} from '../../../shared/ui/icons/GitHubIcon.tsx';
import {courses, education, work,} from '../../../shared/types/educationAndWork.ts';

export const About = () => {
    const {t} = useTranslation();

    const sections = [
        {title: 'about.work', items: work},
        {title: 'about.education.title', items: education},
        {title: 'about.courses', items: courses},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const currentSection = sections[currentIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex) => (currentIndex + 1) % sections.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

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
            <div className="container flex justify-between gap-8">
                <div className="skills-container flex flex-col gap-6">

                    <div
                        className="card skills-card p-8 border-[var(--color-surface)] border rounded-3xl bg-[var(--color-text-header)]">
                        <h2 className="skills-header text-xl text-[var(--color-background)]">Front-End</h2>
                        <p className="skills-description text-[var(--color-background)]">
                            React • Vue • TypeScript • JavaScript • HTML • CSS<br/>
                            Tailwind CSS • SCSS • React Router • i18next<br/>
                            React Hook Form • Zod
                        </p>
                    </div>

                    <div className="flex justify-items-start gap-28">
                        <div className="card skills-card p-8 border-[var(--color-surface)] border rounded-3xl">
                            <h2 className="skills-header text-xl text-[var(--color-text)]">{t(`about.tools`)}</h2>
                            <p className="skills-description text-[var(--color-text-header)]">Git • GitHub • Vite •
                                WebStorm<br/>VS Code • Figma • npm</p>
                        </div>
                        <NavigationLink
                            icon={<GitHubIcon size={24} className="text-white bg-black"/>}
                            href="https://github.com/Marassanovad"
                        />
                    </div>

                    <div className="card skills-card p-8 border-[var(--color-surface)] border rounded-3xl">
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
                        <div className="card skills-card p-8 border-[var(--color-surface)] border rounded-3xl">
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

            <div className="study_section flex flex-col gap-6 pt-12">
                <h2 className="text-6xl">{t('about.study')}</h2>

                <h3 className="text-4xl text-[var(--color-text-header)]">
                    {t(currentSection.title)}
                </h3>

                <div className="grid grid-cols-2 gap-8">
                    {currentSection.items.map(
                        ({company, date, period, specialization}) => (
                            <div
                                key={`${company}-${date}`}
                                className="card rounded-3xl border border-[var(--color-surface)] p-8"
                            >
                                <h3 className="text-2xl text-[var(--color-text-header)]">
                                    {t(company)}
                                </h3>

                                <ul className="mt-6 flex flex-col gap-2">
                                    <li className="text-[var(--color-text)]">
                                        {date}
                                    </li>

                                    {period && (
                                        <li className="text-[var(--color-text)]">
                                            {period}
                                        </li>
                                    )}

                                    <li className="text-[var(--color-text-header)]">
                                        {t(specialization)}
                                    </li>
                                </ul>
                            </div>
                        ),
                    )}
                </div>

                <div className="flex justify-center gap-3">
                    {sections.map((section, index) => (
                        <button
                            key={section.title}
                            type="button"
                            aria-label={section.title}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 w-3 rounded-full transition-colors ${
                                index === currentIndex
                                    ? 'bg-[var(--color-text-header)]'
                                    : 'bg-[var(--color-text)]'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}