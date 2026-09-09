import type {ReactNode} from "react";
import {MoveUpRight} from "lucide-react";

type NavigationLinkProps = {
    href: string;
    icon?: ReactNode;
};

export const NavigationLink = ({ href, icon }: NavigationLinkProps) => {
    return (
        <a
            className="relative flex w-fit items-center text-[var(--color-background)]"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="h-12 w-12 rounded-full border border-[var(--color-text-header)] p-3">
                {icon}
            </span>

            <span className="absolute -right-8 rounded-full bg-[var(--color-text-header)] p-3">
                <MoveUpRight />
            </span>
        </a>
    );
};


