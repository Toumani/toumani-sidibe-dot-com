import { BriefcaseIcon, PresentationChartLineIcon, UserIcon } from "@heroicons/react/24/solid";
import Anchor from "./Anchor";
import { formatDate, formatToPeriod } from "../lib/utils";
import React, { useMemo } from "react";
import { Resume, Activity, Skill } from "../lib/types";

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
				<h2 className="grow text-lg font-bold">{ headline }</h2>
				{ activities.map((entry, index) => <ActivityView key={index} employmentEntry={entry} />) }
			</div>
		</div>
	)
}

interface ActivityProps {
	employmentEntry: Activity,
}

const ActivityView: React.FC<ActivityProps> = ({ employmentEntry }) => {
	const { type, role, employer, startDateJSON, endDateJSON, city, description, assignments, links, keywords } = employmentEntry;
	const startDate = new Date(startDateJSON.year, startDateJSON.month - 1)
	const endDate = endDateJSON === null ? null : new Date(endDateJSON.year, endDateJSON.month - 1)

	let headline: string;
	switch (type) {
		case "employment":
		case "internship":
			headline = `${role} at ${employer}, ${city}`;
			break;
		case "education":
			headline = `${role}, ${employer}, ${city}`;
			break;
		case "project":
			headline = role;
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
		<div className="text-sm mb-2">
			<h4 className="text-base font-bold">{ headline }</h4>
			{ displayDate && <p className="text-gray-500">{ dateRange }</p> }
			{ description && description.split('\n').map(line => <p key={line}>{ line }</p>) }
			{ assignments.length + keywords.length > 0 &&
					<ul className="pl-5 list-disc list-outside">
						{ assignments.map(task => <li key={task}>{ task }</li> )}
						{ keywords.length && <li>{ keywords.join(", ") }</li> }
					</ul>
			}
			{ links.length > 0 && <Anchor href={links[0]}>{ links[0] }</Anchor> }
		</div>
	)
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
		<li><span className="font-semibold">{ name }</span>: <span className="text-xs">{ description }</span></li>
	)
}

export default function ResumeJsx({ resume }: { resume: Resume }) {
	const { highlyProficientSkillsJoined, experiencedSkillsJoined, knowledgeableSkillsJoined } = useMemo(() => {
		const highlyProficientSkills: string[] = []
		const experiencedSkills: string[] = []
		const knowledgeableSkills: string[] = []
		for (let i = 0; i < resume.skills.length; i++) {
			const skill = resume.skills[i]
			if (skill.level < 2)
				knowledgeableSkills.push(skill.name)
			else if (skill.level < 4)
				experiencedSkills.push(skill.name)
			else
				highlyProficientSkills.push(skill.name)
		}
		return {
			highlyProficientSkillsJoined: highlyProficientSkills.join(", "),
			experiencedSkillsJoined: experiencedSkills.join(", "),
			knowledgeableSkillsJoined: knowledgeableSkills.join(", "),
		}
	}, [resume.skills])

	return (
		<div className="hidden md:block m-auto p-4 text-gray-900 bg-white"
				 style={{width: '210mm', height: '297mm', minWidth: '210mm', maxHeight: '297mm'}}>
			<h1 className="pl-6 text-3xl font-bold">{resume.fullName}</h1>
			<p className="pl-6">{resume.role}</p>
			<div className="flex flex-row justify-between gap-2 w-full pt-5">
				<div className="w-9/12">
					<div className="flex flex-row items-baseline">
						<UserIcon className="w-5 h-4 max-w-5 max-h-4 mr-2" style={{transform: 'scale(1.25) translateY(1px)'}}/>
						<div>
							<h2 className="text-lg font-bold">Profile</h2>
							<p className="mb-2">{resume.summary}</p>
						</div>
					</div>
					<SectionView headline="Employment History" activities={resume.employments} icon={<BriefcaseIcon/>}/>
					<SectionView headline="Internships" activities={resume.internships} icon={<BriefcaseIcon/>}/>
					<SectionView headline="Personnal and Freelance Projects" activities={resume.projects}
											 icon={<PresentationChartLineIcon/>}/>
				</div>

				<div className="w-1/4 space-y-5 text-xs">
					<div>
						<h3 className="text-lg font-bold">Details</h3>
						<ul>
							{resume.addressLines.map(line =>
								<li key={line.label}>
									{line.link
										? <Anchor href={line.link}>{line.label}</Anchor>
										: line.label}
								</li>
							)}
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-bold">Links</h3>
						<ul>
							{resume.links.map(link => <li key={link.label}><Anchor href={link.url}>{link.label}</Anchor></li>)}
						</ul>
					</div>
					<div>
						<h3 className="mb-1 text-lg font-bold">Skills</h3>
						{/*<ul className="space-y-2">*/}
						{/*	{ resume.skills.map(skill => <SkillView key={skill.name} skill={skill} />) }*/}
						{/*</ul>*/}
						<span className="mb-1 font-bold">Highly proficient: </span>{highlyProficientSkillsJoined}<br/>
						<span className="mb-1 font-bold">Experienced: </span>{experiencedSkillsJoined}<br/>
						<span className="mb-1 font-bold">Knowledgeable: </span>{knowledgeableSkillsJoined}
					</div>
					{resume.educations.length &&
							<div>
								<h3 className="mb-1 text-lg font-bold">Education</h3>
								{resume.educations.map(education =>
									<React.Fragment key={education.school + education.degree}>
										<h4 className="text-md font-bold">{`${education.school} — ${education.location}`}</h4>
										<p className="text-gray-500">{formatToPeriod(education.startDateJSON, education.endDateJSON)}</p>
										<p>{education.degree}</p>
										<div>{education.description}</div>
									</React.Fragment>
								)}
							</div>
					}
					<div>
						<h3 className="mb-1 text-lg font-bold">Languages</h3>
						<ul className="space-y-2">
							{resume.languages.map(skill => <LanguageView key={skill.name} skill={skill}/>)}
						</ul>
					</div>
					<div>
						<h3 className="mb-1 text-lg font-bold">Hobbies</h3>
						{resume.hobbies.map(hobby => <div key={hobby} className="text-xs">{hobby}</div>)}
					</div>
				</div>
			</div>
		</div>
	)
}