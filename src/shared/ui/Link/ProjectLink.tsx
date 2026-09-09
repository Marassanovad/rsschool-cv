import {MoveRight} from "lucide-react";

type ProjectLinkProps = {
    text: string;
    href: string;
};

export const ProjectLink = ({ text, href }: ProjectLinkProps) => {
    return (
        <a
            className="project-link flex w-fit items-center gap-3 text-[var(--color-background)]"
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            <span className="project-link__text min-w-60 rounded-full bg-[var(--color-text-header)] text-center italic py-3 px-16">
                {text}
            </span>

            <span className="project-link__icon rounded-full bg-[var(--color-text-header)] p-3 ">
                <MoveRight/>
            </span>
        </a>
    );
};