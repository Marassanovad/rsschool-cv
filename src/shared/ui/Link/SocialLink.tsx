import type { ComponentType } from 'react';

type SocialLinkProps = {
    href: string;
    text?: string;
    icon?: ComponentType;
};

export const SocialLink = ({ href, icon: Icon, text }: SocialLinkProps) => {
    return (
        <a
            className="flex w-fit items-center gap-3 rounded-full border border-[var(--color-surface)] px-12 p-3 italic text-[var(--color-text)] transition-colors hover:bg-[var(--color-text-header)] hover:text-[var(--color-background)]"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {Icon && <Icon />}

            {text && <span>{text}</span>}
        </a>
    );
};
