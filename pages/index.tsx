import { GetStaticProps } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { GithubMarkIcon, InstagramIcon, LinkedInIcon } from "../components/icons";
import Link from "next/link";
import FormattedDate from "../components/FormattedDate";
import { BuildingOfficeIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import React, { PropsWithChildren } from "react";
import PlayWithMe from "../components/PlayWithMe";
import { Activity } from "../lib/types";
import resume from "../lib/resume";
import { formatToMonthlyPeriod } from "../lib/utils";

interface Article {
	id: string,
	title: string,
	content: string,
	publishDateStr: string,
}

interface App {
	id: string,
	name: string,
	description: string,
	url: string,
}

interface HomeProps {
	articles: Article[],
	apps: App[],
	employments: Activity[],
}

const Home = ({ articles, apps, employments }: HomeProps) => {
	return (
		<>
			<Head>
				<title>Toumani Sidibe</title>
			</Head>

			<header className="flex flex-col justify-start space-y-4 lg:max-w-3xl">
				<Image className="self-center rounded-full lg:self-start" src="/images/avatar.jpg" alt="Toumani Sidibe" width={172} height={172} />
				<h1 className="text-3xl text-white font-bold lg:text-5xl">Software developer and amateur musician</h1>
				<p className="text-gray-400 lg:text-lg">
					I’m Toumani, a software developer based in Morocco.
					I enjoy building web apps and playing around with cutting edge technologies that take software development to the next level.<br />
					<Link href={`/about`}>
						<span className="text-teal-600 cursor-pointer">Learn more</span>
						<ChevronRightIcon className="inline h-3 ml-2 text-teal-600" strokeWidth={4} />
					</Link>
				</p>
				<ul className="flex flex-row justify-start space-x-8">
					<li>
						<a href="https://github.com/Toumani"><GithubMarkIcon width={20} height={20} /></a>
					</li>
					<li>
						<a href="https://www.instagram.com/toumanitrate/"><InstagramIcon width={20} height={20} /></a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/toumani-sidibe-76447412b/"><LinkedInIcon width={20} height={20} /></a>
					</li>
				</ul>
			</header>

			<PlayWithMe />

			<main className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full">
				<section className="flex flex-col space-y-6 lg:shrink-5 md:pl-12 md:border-l-4 md:border-gray-700">
					{
						employments.map(employment => (
							<div key={employment.id} className="relative">
								<span className="hidden md:block absolute w-4 h-4 rounded-full bg-teal-600" style={{ top: '0.5rem', left: '-3.65rem' }}></span>
								<h4 className="text-2xl font-semibold">{ employment.role } at { employment.employer }</h4>
								<p className="ml-1 font-light text-sm italic text-gray-400">{ `${formatToMonthlyPeriod(employment.startDateJSON, employment.endDateJSON)}` }</p>
								<ul className="mt-1 list-disc list-inside font-light">
									{ employment.assignments.map(assignment => <li key={assignment}>{ assignment }</li>) }
								</ul>
								<ul className="flex flex-row flex-wrap gap-2 mt-2 text-sm">
									{ employment.keywords.map(keyword => <li key={keyword} className="px-2 py-1 bg-teal-600 rounded-full">{ keyword }</li>) }
								</ul>
							</div>
						))
					}
					{
						articles.map(article => (
							<Link key={article.id} href={`/articles/${article.id}`}>
								<article className="flex flex-col space-y-2">
									<FormattedDate dateString={article.publishDateStr} />
									<h3 className="text-xl font-bold">{ article.title }</h3>
									<p className="text-base text-gray-400 text-justify line-3">{ article.content }</p>
									<div className="flex flex-row items-center space-x-2">
										<span className="text-teal-600">Read article</span>
										<ChevronRightIcon className="h-3 text-teal-600" strokeWidth={4} />
									</div>
								</article>
							</Link>
						))
					}
				</section>
				<div className="flex flex-col space-y-6">
					{/*<MainSection title="Stay up to date" icon={EnvelopeIcon}>*/}
					{/*	<p className="text-sm">Get notified when I publish something new, and unsubscribe at any time.</p>*/}
					{/*	<form className="flex flex-row space-x-4 mt-2">*/}
					{/*		<input*/}
					{/*			className="grow w-full min-w-0 px-4 py-2 rounded-lg border-gray-700 bg-gray-700 text-zinc-200 placeholder:text-zinc-500 focus:border-teal-600 focus:ring-teal-600 focus:outline-none focus:ring-4"*/}
					{/*			type="email"*/}
					{/*			name="email"*/}
					{/*			placeholder="Email address"*/}
					{/*			aria-label="Email address"*/}
					{/*			required*/}
					{/*		/>*/}
					{/*		<button className="px-4 py-2 rounded-lg bg-teal-600 font-bold">Join</button>*/}
					{/*	</form>*/}
					{/*</MainSection>*/}
					<MainSection title="My apps" url="/apps" icon={CodeBracketIcon}>
						{ apps.map(app => (
							<div key={app.id} className="flex flex-row items-center justify-between gap-4">
								<div className="flex flex-row items-center space-x-4">
									<Image className="rounded-full" src={`/logos/${app.id}.png`} alt={app.name} width={36} height={36} />
									<div className="flex flex-col justify-between">
										<h4 className="text-base font-bold">{ app.name }</h4>
										<p className="text-sm text-gray-400">{ app.description }</p>
									</div>
								</div>
								<a className="px-4 py-2 rounded-lg bg-teal-600 font-bold" href={app.url} target="_blank">Open</a>
							</div>
						))}
					</MainSection>
					<MainSection title="Work" url="/resume" icon={BuildingOfficeIcon}>
						<div className="flex flex-col items-stretch space-y-8">
							{ employments.map(employment => {
								return (
									<div key={employment.id} className="flex flex-row items-center space-x-4">
										<Image className="rounded-full" src={`/logos/${employment.id}.jpg`} alt={employment.employer} width={36} height={36} />
										<div className="flex flex-col grow">
											<h4 className="text-base font-bold">{ employment.employer }</h4>
											<div className="flex flex-row justify-between text-sm text-gray-400">
												<span>{ employment.role }</span>
												<span>{`${employment.startDateJSON.year}${employment.endDateJSON === null ? ' — Present' : employment.startDateJSON.year === employment.endDateJSON.year ? "" : ` — ${employment.endDateJSON.year}`}`}</span>
											</div>
										</div>
									</div>
								)
							})}
							<a className="px-4 py-2 text-center rounded-lg bg-teal-600 font-bold" href="/Toumani_SIDIBE-resume.pdf">
								Download CV
								<ArrowSmallDownIcon className="inline-block ml-2" width={16} height={16} strokeWidth={3} />
							</a>
						</div>
					</MainSection>
				</div>
			</main>
		</>
	)
}

interface MainSectionProps extends PropsWithChildren {
	title: string,
	url: string,
	icon: (props: React.ComponentProps<'svg'> & { title?: string; titleId?: string; }) => JSX.Element,
}

const MainSection = ({ title, url, icon, children }: MainSectionProps) => {
	const styledIcon = React.createElement(icon, { className: 'h-6 h-6 text-gray-400' });
	return (
		<section className="flex flex-col space-y-4 p-4 rounded-2xl border-solid border-2 border-gray-700">
			<header className="flex flex-row items-center space-x-2">
				<span>{ styledIcon }</span>
				<h2 className="text-lg font-bold hover:text-teal-600 transition"><Link href={url}>{ title }</Link></h2>
			</header>
			{ children }
		</section>
	)
}

export const getStaticProps: GetStaticProps<{ articles: Article[] }> = async () => {
	// Articles feature is not yet implemented
	const articles: Article[] = [];

	const apps: App[] = [
		{
			id: 'noties-v2',
			name: 'Noties',
			description: 'Awesome note taking app',
			url: 'https://noties-v2-toumani.vercel.app',
		},
		{
			id: 'wordament-solver',
			name: 'Wordament Solver',
			description: 'Word puzzle resolver',
			url: 'https://wordament-solver.toumanisidibe.com',
		},
	]

	return {
		props: {
			name: 'Home',
			articles,
			apps,
			employments: resume.employments
		},
	}
}

export default Home;