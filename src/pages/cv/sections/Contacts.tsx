import {Trans, useTranslation} from "react-i18next";
import {navigation} from "../../../shared/types/navigation.ts";
import {SocialLink} from "../../../shared/ui/Link/SocialLink.tsx";
import {links} from "../../../shared/types/links.ts";

export const Contacts = () => {
    const {t} = useTranslation();
    return (
        <footer className='footer flex flex-col gap-8'>
            <div className='container flex justify-between gap-32'>
                <div className='header-container flex flex-col gap-4'>
                    <h1 className='title text-9xl'>{t(`name`)}</h1>
                    <div className='text-container flex items-center gap-8'>
                        <p className='description'>Frontend<br/>{t(`developer`)}</p>
                        <h1 className='title text-7xl'>{t(`surname`)}</h1>
                    </div>
                </div>
                <div className='contacts-container flex flex-col gap-6 justify-items-start'>
                    <h2 className='container-title text-2xl'>.../{t(`navigation.contacts`)}...</h2>
                    <nav
                        className="header__nav flex gap-8 pl-2"
                        aria-label={t('navigation.ariaLabel')}
                    >
                        {navigation.map(({key, href}) => (
                            <a key={href} href={href} className="header__link">
                                {t(`navigation.${key}`)}
                            </a>
                        ))}
                    </nav>
                    <div className="card p-8 border-[var(--color-surface)] border rounded-3xl">
                        <h2 className="card-header text-xl text-[var(--color-text)]">{t(`contacts.site`)}</h2>
                        <p className="card-description text-[var(--color-text-header)] pr-28">
                            <Trans i18nKey="contacts.description"
                                   components={{
                                       br: <br/>,
                                   }}/>
                        </p>
                        <a href="https://rs.school/" target="_blank" rel="noopener noreferrer"
                           className="transition-colors hover:text-[var(--color-text)]"> {t('contacts.rsschool')} </a>
                        <br/>
                        <a href="https://www.behance.net/gallery/199132655/Portfolio-Full-stack-Developer"
                           target="_blank" rel="noopener noreferrer"
                           className="transition-colors hover:text-[var(--color-text)]"> {t('contacts.inspiredBy')} </a>
                    </div>
                </div>
            </div>
            <div className="link-container flex justify-center gap-16"> {links.map(({key, href, icon}) => (
                <SocialLink key={key} href={href} icon={icon} text={key}/>))}
            </div>
        </footer>
    )
}