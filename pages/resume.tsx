import React from "react";
import { UserIcon, AcademicCapIcon, BriefcaseIcon, PresentationChartLineIcon } from '@heroicons/react/24/solid';
import { formatDate } from "../lib/utils";
import Anchor from "../components/Anchor";
import Head from "next/head";
import {GetStaticProps} from "next";
import {ArrowSmallDownIcon} from "@heroicons/react/24/outline";

interface SectionProps {
	headline: string,
	activities: Activity[],
	icon: JSX.Element,
}

const SectionView: React.FC<SectionProps> = ({ headline, activities, icon }) => {
	const styledIcon = React.cloneElement(
		icon,
		{ className: 'w-5 h-4 max-w-5 max-h-4 mr-2', style: { transform: 'scale(1.25) translateY(1px)'} },
	);

	return (
		<div className="flex flex-row items-baseline">
			<div>{ styledIcon }</div>
			<div>
				<h2 className="grow text-xl font-semibold">{ headline }</h2>
				{ activities.map((entry, index) => <ActivityView key={index} employmentEntry={entry} />) }
			</div>
		</div>
	)
}

interface Activity {
	type: "employment" | "education" | "internship" | "project"
	title: string,
	employer: string,
	startDateJSON: { year: number, month: number },
	endDateJSON: { year: number, month: number } | null,
	city: string,
	description: string,
	tasks: string[],
	links: string[]
}

interface ActivityProps {
	employmentEntry: Activity,
}

const ActivityView: React.FC<ActivityProps> = ({ employmentEntry }) => {
	const { type, title, employer, startDateJSON, endDateJSON, city, description, tasks, links } = employmentEntry;
	const startDate = new Date(startDateJSON.year, startDateJSON.month - 1)
	const endDate = endDateJSON === null ? null : new Date(endDateJSON.year, endDateJSON.month - 1)

	let headline: string;
	switch (type) {
		case "employment":
		case "internship":
			headline = `${title} at ${employer}, ${city}`;
			break;
		case "education":
			headline = `${title}, ${employer}, ${city}`;
			break;
		case "project":
			headline = title;
			break;
	}

	const displayDate = type != 'project';

	let dateRange: string = '';
	if (displayDate)
		if (endDate == null)
			dateRange = `Since ${formatDate(startDate)}`;
		else
			dateRange = `${formatDate(startDate)} — ${formatDate(endDate)}`;

	return (
		<div className="mb-2">
			<h4 className="font-semibold">{ headline }</h4>
			{ displayDate && <p className="text-sm text-gray-500">{ dateRange }</p> }
			{ description.length > 0 && description.split('\n').map(line => <p key={line}>{line}</p>) }
			{ tasks.length > 0 && <ul className="pl-8 list-disc list-outside">
				{ tasks.map(task =>
					<li key={task}>{task}</li>
				)}
			</ul>}
			{ links && links.length > 0 && <Anchor href={links[0]}>{links[0]}</Anchor> }
		</div>
	)
}

interface Skill {
	name: string,
	level: 1 | 2 | 3 | 4 | 5,
}

interface SkillProps {
	skill: Skill,
}

const SkillView: React.FC<SkillProps> = ({ skill }) => {
	const { name, level } = skill
	return (
		<li>
			<span>{ name }</span>
			<div className="w-full h-1 bg-gray-300 mt-1">
				<div className="h-full bg-blue-600" style={{ width: `${level*20}%`}}/>
			</div>
		</li>
	)
}

const LanguageView: React.FC<SkillProps> = ({ skill }) => {
	const { name, level } = skill;
	let description: string;
	switch (level) {
		case 1: description = 'Beginner'; break;
		case 2: description = 'Good working knowledge'; break;
		case 3: description = 'Very good command'; break;
		case 4: description = 'Highly proficient'; break;
		case 5: description = 'Native'; break;
	}
	return (
		<li><span className="font-semibold">{name}</span>: <span className="text-xs">{description}</span></li>
	)
}

interface Resume {
	employmentHistory: Activity[],
	education: Activity[],
	internships: Activity[],
	projects: Activity[],
	languages: Skill[],
	hobbies: string[],
}

interface ResumeProps {
	resume: Resume
}

const ResumePage: React.FC<ResumeProps> = ({ resume }: ResumeProps) => {
	return (
		<>
			<Head>
				<title>Resume - Toumani Sidibe</title>
			</Head>
			<div className="flex flex-col gap-8 w-full">
				<h1 className="text-3xl text-white font-bold lg:text-5xl">Resume</h1>
				<div className="hidden md:block m-auto p-4 text-gray-900 bg-white"
						 style={{ width: '210mm', height: '297mm', minWidth: '210mm', maxHeight: '297mm' }}>
					<h1 className="pl-6 text-3xl font-bold">Toumani Sidibe</h1>
					<p className="pl-6 text-sm">Full Stack Developer</p>
					<div className="flex flex-row justify-between w-full pt-5">
						<div className="w-9/12" >
							<div className="flex flex-row items-baseline">
								<UserIcon className="w-5 h-4 max-w-5 max-h-4 mr-2" style={{ transform: 'scale(1.25) translateY(1px)' }} />
								<div>
									<h2 className="text-xl font-semibold">Profile</h2>
									<p className="mb-2">Tech enthusiast experienced in UX focused app development with excellent analytical skills.</p>
								</div>
							</div>
							<SectionView headline="Employment History" activities={resume.employmentHistory} icon={<BriefcaseIcon />} />
							<SectionView headline="Education" activities={resume.education} icon={<AcademicCapIcon />} />
							<SectionView headline="Internships" activities={resume.internships} icon={<BriefcaseIcon />} />
							<SectionView headline="Personnal and Freelance Projects" activities={resume.projects} icon={<PresentationChartLineIcon />} />
						</div>

						<div className="w-1/4 space-y-5 text-sm">
							<div>
								<h3 className="text-md font-bold">Details</h3>
								<ul>
									<li>Casablanca, Morocco</li>
									<li>+212 6 99 78 57 77</li>
									<li><Anchor href="mailto:toumani49@gmail.com">toumani49@gmail.com</Anchor></li>
								</ul>
							</div>
							<div>
								<h3 className="text-md font-bold">Links</h3>
								<ul>
									<li><Anchor href="https://toumanisidibe.com/">toumanisidibe.com</Anchor></li>
									<li><Anchor href="https://github.com/Toumani/">github.com/Toumani</Anchor></li>
								</ul>
							</div>
							<div>
								<h3 className="mb-1 text-md font-bold">Skills</h3>
								{/*<ul className="space-y-2">*/}
								{/*	{ resume.skills.map(skill => <SkillView key={skill.name} skill={skill} />) }*/}
								{/*</ul>*/}
								<span className="mb-1 font-bold">High proficiency: </span>Java, Kotlin, TypeScript, SQL, ReactJS, NextJS, TailwindCSS, Spring Boot, git, Linux<br />
								<span className="mb-1 font-bold">Experienced: </span>Ionic, Ktor, Spring Cloud, Postgres, Oracle, Exposed, Prisma, Swing, JavaFX, JUnit, Jest<br />
								<span className="mb-1 font-bold">Good knowledge: </span>NodeJS, Gradle, PL/SQL, Jetpack Compose
							</div>
							<div>
								<h3 className="mb-1 text-md font-bold">Languages</h3>
								<ul className="space-y-2">
									{ resume.languages.map(skill => <LanguageView key={skill.name} skill={skill} />) }
								</ul>
							</div>
							<div>
								<h3 className="mb-1 text-md font-bold">Hobbies</h3>
								<span className="text-xs">{ resume.hobbies.join(', ') }</span>
							</div>
						</div>
					</div>
				</div>

				<a className="m-auto px-4 py-2 text-center rounded-lg bg-teal-600 font-bold" href="/Toumani_SIDIBE-resume.pdf">
					Download CV
					<ArrowSmallDownIcon className="inline-block ml-2" width={16} height={16} strokeWidth={3} />
				</a>
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const resume = {
		employmentHistory: [
			{
				type: 'employment',
				title: 'Fullstack Developer',
				employer: 'Maltem Africa',
				city: 'Casablanca',
				startDateJSON: { year: 2023, month: 4 },
				endDateJSON: null,
				description: '',
				tasks: [
					'Typescript, React, MaterialUI, Agile'
				]
			},
			{
				type: 'employment',
				title: 'Technical consultant',
				employer: 'Salesforce',
				city: 'Casablanca',
				startDateJSON: { year: 2023, month: 1 },
				endDateJSON: { year: 2023, month: 3 },
				description: '',
				tasks: [
					'Learned Apex programming language and Lightning Web Component technology',
					'Earned experience on the Salesforce platform',
				]
			},
			{
				type: 'employment',
				title: 'Software Engineer',
				employer: 'Perenity Software',
				city: 'Casablanca',
				startDateJSON: { year: 2019, month: 11 },
				endDateJSON: { year: 2022, month: 11 },
				description: '',
				tasks: [
					'Designed a fluent functional API to streamline Swing UI creation.',
					'Set up desktop application architecture and migrated from Java Swing to JavaFX.',
					'Created a RESTful Web service to allow communication between web front end and back end.',
					'React, EJB, JBoss, Tomcat, Oracle, Spring Boot, SQL, git, Microservices',
				]
			},
			{
				type: 'employment',
				title: 'Software Engineer',
				employer: 'Adria Business & Technology',
				city: 'Casablanca',
				startDateJSON: { year: 2019, month: 7 },
				endDateJSON: { year: 2019, month: 10 },
				description: '',
				tasks: [
					'Participated in migrating from monolithic to microservices.',
					'In charge of refactoring code to match best practice guidelines.',
				]
			},
		] as Activity[],
		education: [
			{
				type: 'education',
				title: 'Engineer in Computer Science',
				employer: 'École Nationale des Sciences Appliquées',
				city: 'Safi',
				startDateJSON: { year: 2014, month: 9 },
				endDateJSON: { year: 2019, month: 6 },
				description: '',
				tasks: [],
				links: []
			}
		] as Activity[],
		internships: [
			{
				type: 'internship',
				title: 'Software Engineer Intern',
				employer: 'Adria Business & Technology',
				city: 'Casablanca',
				startDateJSON: { year: 2019, month: 2 },
				endDateJSON: { year: 2019, month: 6 },
				description: 'Developed an automated testing bot with Selenium and Cucumber.',
				tasks: [],
				links: []
			}
		] as Activity[],
		projects: [
			{
				type: 'project',
				title: 'Noties',
				employer: '',
				city: '',
				startDateJSON: { year: 0, month: 0 },
				endDateJSON: null,
				description: 'Built a curated note-taking app for mobile platforms.',
				tasks: [],
				links: ['https://noties-v2-toumani.vercel.app/']
			},
			{
				type: 'project',
				title: 'Wordament Solver',
				employer: '',
				city: '',
				startDateJSON: { year: 0, month: 0 },
				endDateJSON: null,
				description: 'Developed an optimized algorithm for solving word puzzles',
				tasks: [],
				links: ['https://wordament-solver.toumanisidibe.com/']
			},
		] as Activity[],
		skills: [
			{ name: 'Java', level: 5 } as Skill,
			{ name: 'Kotlin', level: 4 } as Skill,
			{ name: 'TypeScript', level: 4 } as Skill,
			{ name: 'React', level: 4 } as Skill,
			{ name: 'TailwindCSS', level: 4 } as Skill,
			{ name: 'Linux', level: 4 } as Skill,
			{ name: 'PostgreSQL', level: 3 } as Skill,
		] as Skill[],
		languages: [
			{ name: 'French', level: 5 } as Skill,
			{ name: 'English', level: 4 } as Skill,
			{ name: 'Spanish', level: 1 } as Skill,
		] as Skill[],
		hobbies: ['Musican', 'Scientific literature']
	}
	return {
		props: {
			name: 'Resume',
			resume,
		},
	}
}

export default ResumePage;