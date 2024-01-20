export interface Resume {
    fullName: string,
    role: string,
    summary: string,
    addressLines: AddressLine[],
    links: Link[],
    employments: Activity[],
    educations: Activity[],
    internships: Activity[],
    projects: Activity[],
    skills: Skill[],
    languages: Skill[],
    hobbies: string[],
}

export interface AddressLine {
    label: string,
    link?: string,
}

export interface Link {
    label: string,
    url: string,
}

export interface Activity {
    id: string,
    type: "employment" | "education" | "internship" | "project"
    role: string,
    employer: string,
    startDateJSON: { year: number, month: number },
    endDateJSON: { year: number, month: number } | null,
    city: string, // TODO change city to location
    description: string,
    assignments: string[],
    keywords: string[],
    links: string[]
}


export interface Skill {
    name: string,
    level: 1 | 2 | 3 | 4 | 5,
}