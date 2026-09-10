import type {ComponentType} from "react";
import {MailIcon} from "lucide-react";
import {GitHubIcon} from "../ui/icons/GitHubIcon.tsx";
import {TelegramIcon} from "../ui/icons/TelegramIcon.tsx";
import {LinkedInIcon} from "../ui/icons/LinkedinIcon.tsx";
import {DiscordIcon} from "../ui/icons/DiscordIcon.tsx";

export type LinkItem = {
    key: string;
    href: string;
    icon?: ComponentType;
};

export const links: LinkItem[] = [
    {
        key: 'GitHub',
        href: 'https://github.com/Marassanovad',
        icon: GitHubIcon,
    },
    {
        key: 'Telegram',
        href: 'https://t.me/marassanovad',
        icon: TelegramIcon,
    },
    {
        key: 'LinkedIn',
        href: 'https://www.linkedin.com/in/darya-marassanova-058a02331/',
        icon: LinkedInIcon,
    },
    {
        key: 'E-mail',
        href: 'mailto:marassanovad@gmail.com',
        icon: MailIcon,
    },
    {
        key: 'Discord',
        href: 'https://discord.com/users/837990470659342356',
        icon: DiscordIcon,
    }
];