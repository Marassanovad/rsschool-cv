export type ProjectItem = {
    key: string;
    description: string;
    href?: string;
};

export const projects: ProjectItem[] = [
    {
        key: 'Cabinetly',
        description: 'cabinetlyDescription',
        href: 'https://github.com/Marassanovad/Cabinetly',
    },
    {
        key: 'Readify',
        description: 'readifyDescription',
        href: 'https://github.com/Marassanovad/Readify',
    },
    {
        key: 'Spendo',
        description: 'spendoDescription',
        href: 'https://github.com/Marassanovad/Spendo',
    },
    {
        key: 'Rick and Morty',
        description: 'rickAndMortyDescription',
        href: 'https://github.com/Marassanovad/Rick_And_Morty_Intern_Project'
    },
];