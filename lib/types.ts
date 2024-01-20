export interface Resume {
    fullName: string,
    role: string,
    summary: string,
    addressLines: AddressLine[],
    links: Link[],
    employments: Activity[],
    educations: Education[],
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
    startDateJSON: DateJSON,
    endDateJSON: DateJSON | null,
    city: string, // TODO change city to location
    description: string,
    assignments: string[],
    keywords: string[],
    links: string[]
}

export interface Education {
    school: string,
    degree: string,
    location: string,
    description: string,
    startDateJSON: DateJSON,
    endDateJSON: DateJSON | null,
}


export interface Skill {
    name: string,
    level: 1 | 2 | 3 | 4 | 5,
}

export interface DateJSON {
    month: number,
    year: number,
}