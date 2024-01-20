import { Resume } from "./types"

const resume: Resume = {
    fullName: "Toumani Sidibe",
    role: "Full Stack Developer",
    summary: "Tech enthusiast experienced in UX focused app development with excellent analytical skills.",
    addressLines: [
        { label: "Casablanca, Morocco" },
        { label: "+212 6 99 78 57 77", link: "tel:+212699785777" },
        { label: "toumani49@gmail.com", link: "mailto:toumani49@gmail.com" },
    ],
    links: [
        { label: "toumanisidibe.com", url: "https://toumanisidibe.com/" },
        { label: "github.com/Toumani", url: "https://github.com/Toumani/" },
    ],
    employments: [
        {
            id: 'maltem-africa',
            type: "employment",
            role: 'Fullstack Developer',
            employer: 'Maltem Africa',
            startDateJSON: { year: 2023, month: 4 },
            endDateJSON: null,
            city: 'Casablanca',
            description: "",
            assignments: [
                "In charge of building UI components to ensure visual consistency throughout frontends",
                "Participated in defining, evaluating and validating application features",
                "Set up programmatic generation of report documents using Jasper report",
                "Built a custom chatbot trained for corporate knowledge management and deployed on-premise",
                ],
            keywords: ['Typescript', 'React', 'MaterialUI', 'Agile', 'Jasper Report', 'React Hook Form', 'React Query', 'Spring Boot', 'Python', 'LangChain'],
            links: []
        },
        {
            id: 'salesforce',
            type: "employment",
            employer: 'Salesforce',
            role: 'Technical Consultant',
            city: "Casablanca",
            description: "",
            startDateJSON: { year: 2023, month: 1 },
            endDateJSON: { year: 2023, month: 3 },
            assignments: [
                'Learned Apex programming language and Lightning Web Component technology',
                'Earned experience on the Salesforce platform',
                ],
            keywords: ['Apex', 'LWC', 'Salesforce'],
            links: [],
        },
        {
            id: 'perenity-software',
            type: "employment",
            employer: 'Perenity Software',
            role: 'Java EE Consultant',
            city: "Casablanca",
            description: "",
            startDateJSON: { year: 2019, month: 11 },
            endDateJSON: { year: 2022, month: 11 },
            assignments: [
                'Designed a fluent functional API to streamline Swing UI creation',
                'Set up desktop application architecture and migrated from Java Swing to JavaFX',
                'Created middleware to allow communication between web front end and back end using REST'
            ],
            keywords: ['Java Swing', 'JavaFX', 'Spring Boot', 'EJB', 'Oracle'],
            links: [],
        },
        {
            id: 'adria-bt',
            type: "employment",
            employer: 'Adria Business & Technology',
            role: 'Full Stack Developer',
            description: "",
            city: "Casablanca",
            startDateJSON: { year: 2019, month: 7 },
            endDateJSON: { year: 2019, month: 10 },
            assignments: [
                'Participated in migrating from monolithic to microservices.',
                'In charge of refactoring code to match best practice guidelines.',
                ],
            keywords: ['React', 'Spring Boot', 'SOAP'],
            links: []
        }
    ],
    educations: [
        {
            degree: 'Engineer in Computer Science',
            school: 'École Nationale des Sciences Appliquées',
            location: 'Safi',
            startDateJSON: { year: 2014, month: 9 },
            endDateJSON: { year: 2019, month: 6 },
            description: '',
        }
    ],
    internships: [
        {
            id: "adria-bt",
            type: 'internship',
            role: 'Software Engineer Intern',
            employer: 'Adria Business & Technology',
            city: 'Casablanca',
            startDateJSON: { year: 2019, month: 2 },
            endDateJSON: { year: 2019, month: 6 },
            description: '',
            assignments: ['Developed an automated testing bot with Selenium and Cucumber.'],
            links: [],
            keywords: ['Selenium', 'BDD', 'React', 'Spring Boot']
        }
    ],
    projects: [
        {
            id: "noties-v2",
            type: 'project',
            role: "Noties",
            employer: 'Self',
            city: '',
            startDateJSON: { year: 0, month: 0 },
            endDateJSON: null,
            description: 'Built a curated note-taking app for mobile platforms.',
            links: ['https://noties-v2-toumani.vercel.app/'],
            keywords: [],
            assignments: []
        },
        {
            id: "wordament-solver",
            type: 'project',
            role: 'Wordament Solver',
            employer: '',
            city: '',
            startDateJSON: { year: 0, month: 0 },
            endDateJSON: null,
            description: 'Developed an optimized algorithm for solving word puzzles',
            assignments: [],
            links: ['https://wordament-solver.toumanisidibe.com/'],
            keywords: []
        },
    ],
    skills: [
        { name: 'TypeScript', level: 4 },
        { name: 'JavaScript', level: 4 },
        { name: 'React', level: 5 },
        { name: 'Next.js', level: 5 },
        { name: 'TailwindCSS', level: 5 },
        { name: 'Ionic', level: 3 },
        { name: 'Prisma', level: 3 },
        { name: 'Jest', level: 2 },

        { name: 'Java', level: 4 },
        { name: 'Kotlin', level: 4 },
        { name: 'NodeJS', level: 4 },
        { name: 'Python', level: 1 },
        { name: 'Spring Boot', level: 3 },
        { name: 'Java Swing', level: 4 },
        { name: 'JavaFX', level: 3 },
        { name: 'JUnit', level: 3 },
        { name: 'Exposed', level: 3 },

        { name: 'Jetpack Compose', level: 1 },

        { name: 'SQL', level: 4 },
        { name: 'PL/SQL', level: 1 },
        { name: 'PostgreSQL', level: 3 },
        { name: 'Oracle', level: 3 },

        { name: 'gradle', level: 1 },
        { name: 'git', level: 5 },
        { name: 'Linux', level: 4 },
    ],
    languages: [
        { name: 'French', level: 5 },
        { name: 'English', level: 4 },
        { name: 'Spanish', level: 1 },
    ],
    hobbies: ['Playing music', 'Motorcycling', 'Hiking', 'Drawing']
}

export default resume