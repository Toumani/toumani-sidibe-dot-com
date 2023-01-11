import { GetStaticProps } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { GithubMarkIcon, InstagramIcon, LinkedInIcon } from "../components/icons";
import Link from "next/link";
import FormattedDate from "../components/FormattedDate";
import { BuildingOfficeIcon, CodeBracketIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import React, { PropsWithChildren } from "react";

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

interface Employment {
	id: string,
	company: string,
	role: string,
	startYear: number,
	endYear: number | null,
}

interface HomeProps {
	articles: Article[],
	apps: App[],
	employments: Employment[],
}

const Home = ({ articles, apps, employments }: HomeProps) => {
	return (
		<div className="px-4">
			<Head>
				<title>Toumani Sidibe</title>
				<meta name="description" content="Toumani Sidibe's personal website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="flex flex-col justify-start space-y-4">
				<Image className="self-center rounded-full" src="/images/avatar.jpg" alt="Toumani Sidibe" width={128} height={128} />
				<h1 className="text-3xl text-white font-bold">Software developer and amateur musician</h1>
				<p className="text-gray-400">
					I’m Toumani, a software developer based in Morocco.
					I enjoy building web apps and playing around with cutting edge technologies that take software development to the next level.
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

			<main className="flex flex-col space-y-8 mt-12">
				<section className="flex flex-col space-y-6">
					{
						articles.map(article => (
							<Link key={article.id} href={`/articles/${article.id}`} >
								<article className="flex flex-col space-y-2">
									<FormattedDate dateString={article.publishDateStr} />
									<h3 className="text-xl font-bold">{ article.title }</h3>
									<p className="text-base text-gray-400 text-justify line-3">{ article.content }</p>
									<div className="flex flex-row items-center space-x-2">
										<span className="text-teal-600">Read article</span>
										<ChevronRightIcon className="h-3 h-3 text-teal-600" strokeWidth={4} />
									</div>
								</article>
							</Link>
						))
					}
				</section>
				<div className="flex flex-col space-y-6">
					<MainSection title="Stay up to date" icon={EnvelopeIcon}>
						<p className="text-sm">Get notified when I publish something new, and unsubscribe at any time.</p>
						<form className="flex flex-row space-x-4 mt-2">
							<input
								className="grow min-w-0 px-4 py-2 rounded-lg border-gray-700 bg-gray-700 text-zinc-200 placeholder:text-zinc-500 focus:border-teal-600 focus:ring-teal-600 focus:outline-none focus:ring-4"
								type="email"
								name="email"
								placeholder="Email address"
								aria-label="Email address"
								required
							/>
							<button className="px-4 py-2 rounded-lg bg-teal-600 font-bold">Join</button>
						</form>
					</MainSection>
					<MainSection title="My apps" icon={CodeBracketIcon}>
						{ apps.map(app => (
							<div key={app.id} className="flex flex-row items-center justify-between">
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
					<MainSection title="Work" icon={BuildingOfficeIcon}>
						<div className="flex flex-col items-stretch space-y-8">
							{ employments.map(employment => {
								return (
									<div key={employment.id} className="flex flex-row items-center space-x-4">
										<Image className="rounded-full" src={`/logos/${employment.id}.jpg`} alt={employment.company} width={36}
													 height={36}/>
										<div className="flex flex-col grow">
											<h4 className="text-base font-bold">{employment.company}</h4>
											<div className="flex flex-row justify-between text-sm text-gray-400">
												<span>{ employment.role }</span>
												<span>{ `${employment.startYear} — ${employment.endYear == null ? 'Present' : employment.endYear}` }</span>
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
		</div>
	)
}

interface MainSectionProps extends PropsWithChildren {
	title: string,
	icon: (props: React.ComponentProps<'svg'> & { title?: string; titleId?: string; }) => JSX.Element,
}

const MainSection = ({ title, icon, children }: MainSectionProps) => {
	const styledIcon = React.createElement(icon, { className: 'h-6 h-6 text-gray-400' });
	return (
		<section className="flex flex-col space-y-4 p-4 rounded-2xl border-solid border-2 border-gray-800">
			<header className="flex flex-row items-center space-x-2">
				<span>{ styledIcon }</span>
				<h2 className="text-lg font-bold">{ title }</h2>
			</header>
			{ children }
		</section>
	)
}

export const getStaticProps: GetStaticProps<{ articles: Article[] }> = async () => {
	// mock
	const articles: Article[] = [
		{
			id: 'compose-for-web-a-game-changer-for-kotlin-developers',
			title: 'Compose for web: a game changer for Kotlin developers',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum ligula libero, vel hendrerit erat lacinia in. Vivamus ut molestie magna. Pellentesque finibus consectetur lacus in gravida. Nunc est odio, porta ac nisi in, congue vulputate enim. Aenean ut viverra erat. Nunc pretium pulvinar augue nec gravida. Ut congue risus lectus, nec ornare neque scelerisque eget. Curabitur ac lacus vitae enim auctor imperdiet. Nunc feugiat sapien ipsum, vitae iaculis metus feugiat sed. Cras ac vehicula dui. Vestibulum et lacus ac velit maximus pretium sit amet at nunc. Curabitur nulla est, consectetur non dapibus et, finibus vel erat. Ut dapibus quis libero ut eleifend. Aenean sit amet ornare felis. Cras lacinia pellentesque tellus, eget ultricies nulla consectetur sit amet.',
			publishDateStr: new Date(2023, 9, 23).toISOString(),
		},
		{
			id: 'my-website-tech-stack-deployment',
			title: 'My website tech stack + deployment',
			content: 'Nulla eu lacinia leo. Duis pretium velit id risus lobortis, vel lacinia erat vehicula. Vestibulum lobortis, mauris eget faucibus porttitor, ipsum purus vulputate mauris, venenatis ornare justo orci eu nunc. Fusce sollicitudin urna non nulla vulputate, a pretium felis imperdiet. Cras vitae nulla vestibulum, pulvinar tellus a, varius augue. Suspendisse suscipit vehicula justo. Phasellus augue mauris, maximus euismod sem et, ultricies elementum turpis. Nulla pulvinar dapibus ligula. Curabitur tempor, justo in finibus volutpat, augue ex pellentesque dui, vel blandit ante leo at metus. Aliquam arcu est, varius sit amet molestie convallis, viverra vel nunc. Sed vel ipsum aliquet turpis finibus ornare vel eu tellus. Suspendisse potenti. ',
			publishDateStr: new Date(2023, 8, 5).toISOString(),
		},
	];

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

	const employments: Employment[] = [
		{
			id: 'salesforce',
			company: 'Salesforce',
			role: 'Technical Consultant',
			startYear: 2023,
			endYear: null
		},
		{
			id: 'perenity-software',
			company: 'Perenity Software',
			role: 'Java EE Consultant',
			startYear: 2019,
			endYear: 2022,
		}
	];

	return {
		props: {
			articles,
			apps,
			employments
		},
	}
}

export default Home;