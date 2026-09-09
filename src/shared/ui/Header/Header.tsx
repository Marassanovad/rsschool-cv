import { useTranslation } from 'react-i18next';

const navigation = [
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'contacts', href: '#contacts' },
];

export const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: 'en' | 'ru') => {
        void i18n.changeLanguage(language);
    };

    return (
        <header className="header">
            <div className="header__container flex w-screen items-center justify-between px-12 py-4">
                <a className="header__logo flex flex-col" href="#highlights">
                    <span>Darya</span>
                    <span>Marassanova</span>
                </a>

                <nav
                    className="header__nav flex gap-8"
                    aria-label={t('navigation.ariaLabel')}
                >
                    {navigation.map(({ key, href }) => (
                        <a key={href} href={href} className="header__link">
                            {t(`navigation.${key}`)}
                        </a>
                    ))}
                </nav>

                <div
                    className="header__languages flex flex-col"
                    aria-label={t('languageSwitcher.ariaLabel')}
                >
                    <button
                        type="button"
                        className={i18n.language === 'en' ? 'active' : ''}
                        onClick={() => changeLanguage('en')}
                    >
                        EN
                    </button>

                    <button
                        type="button"
                        className={i18n.language === 'ru' ? 'active' : ''}
                        onClick={() => changeLanguage('ru')}
                    >
                        RU
                    </button>
                </div>
            </div>
        </header>
    );
};