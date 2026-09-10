export type EducationAndWorkItem = {
    company: string;
    date: string;
    period?: string;
    specialization: string;
};

export const work: EducationAndWorkItem[] = [
    {
        company: 'PanDev',
        date: '08/2024 – 10/2025 ',
        period: '1.3 years',
        specialization: 'Frontend Developer',
    },
];

export const education: EducationAndWorkItem[] = [
    {
        company: 'Satbayev University',
        date: '2023-2027',
        specialization: 'about.education.satbayevSpecialization',
    },
    {
        company: 'about.education.college',
        date: '2019-2022',
        specialization: 'about.education.collegeSpecialization',
    },
]
export const courses: EducationAndWorkItem[] = [
    {
        company: 'GeekBrains',
        date: '2022-2023',
        specialization: 'Python Developer',
    },
    {
        company: 'Jusan Singularity',
        date: '2024',
        specialization: 'Frontend',
    },
]