import Head from "next/head";
import React from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { GithubMarkIcon } from "../components/icons";

interface Tool {
	id: string,
	name: string,
}

interface App {
	id: string,
	name: string,
	description: string,
	longDescription: string,
	url: string,
	githubUrl: string,
	tools: Tool[],
}

const Apps = ({ apps }: { apps: App[]}) => {
	return (
		<>
			<Head>
				<title>My Apps - Toumani Sidibe</title>
			</Head>

			<div>
				<h1 className="my-8 text-3xl text-white font-bold lg:text-5xl">My apps</h1>
				<div className="space-y-4 text-lg text-justify text-gray-400">
					<p>
						The story always starts this way:
					</p>
					<blockquote className="pl-4 border-l-8 border-l-gray-400">
						How about building an app that does <span className="italic">[insert app's purpose]</span> 🤔.
						I'll be done coding it by the end of the day!.
					</blockquote>
					<p>
						But the story always ends working on that little app for weeks or even months. The reason? An app can always be enhanced.
						So here are those I dared share to the open world because I believe they're <span className="italic">good enough</span>.
					</p>
					<p>
						Don't hesitate to give me feedback to help me improve those pieces of software 😉.
					</p>
				</div>
			</div>

			{ apps.map(app => <AppCard key={app.id} app={app} />) }
		</>
	)
}

interface AppCardProps {
	app: App
}

const AppCard = ({ app }: AppCardProps) => {
	const { id, tools, name, longDescription, url, githubUrl } = app;
	return (
		<div className="lg:grid lg:grid-cols-2 w-full shadow-xl rounded-b-2xl shadow-gray-600">
			<div>
				<div className="relative">
					<div className="flex flex-row gap-8 p-4 absolute top-0 left-0 right-0 bg-black/75">
						{ tools.map(tool =>
							<div className="tooltip">
								<span className="tooltiptext bottom-8 px-4 py-2 bg-gray-700 text-gray-400 font-semibold rounded-lg">{ tool.name }</span>
								<Image key={tool.id} className="inline" src={`/logos/${tool.id}.png`} alt={tool.name} width={32} height={32} />
							</div>
						)}
					</div>
				</div>
				<img className="w-full" src={`/logos/${id}.png`} alt={`${app.name} logo`} />
			</div>
			<div className="lg:flex lg:flex-col lg:justify-between bg-gray-700 rounded-b-2xl lg:rounded-bl-none">
				<div className="p-2 grow">
					<h3 className="lg:mt-2 mb-2 text-xl lg:text-2xl font-bold">{ name }</h3>
					<p className="lg:text-lg text-gray-400 font-light">{ longDescription }</p>
				</div>
				<div className="flex flex-col grow justify-between p-2 bg-gray-600/50 rounded-b-2xl lg:rounded-bl-none">
					<h4 className="lg:mt-2 mb-2 text-xl lg:text-2xl font-bold">Links</h4>
					<ul className="space-y-2">
						<li className="flex flex-row items-center text-sm space-x-4">
							<GlobeAltIcon className="text-gray-500" width={20} height={20} />
							<a className="lg:text-lg text-teal-600 cursor-pointer underline decoration-dotted hover:text-teal-800 transition" href={url}>{ url }</a>
						</li>
						<li className="flex flex-row items-center text-sm space-x-4">
							<GithubMarkIcon width={20} height={20} />
							<a className="lg:text-lg text-teal-600 cursor-pointer underline decoration-dotted hover:text-teal-800 transition" href={githubUrl}>{ githubUrl }</a>
						</li>
					</ul>
					<div className="mt-8 mb-4 pr-4 text-right">
						<a className="px-4 py-2 rounded-lg bg-teal-600 font-bold" href={url} target="_blank">
							<span>Open</span>
							<ArrowTopRightOnSquareIcon className="inline ml-2" width={18} height={18} strokeWidth={3} />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const apps: App[] = [
		{
			id: 'noties-v2',
			name: 'Noties',
			description: 'Awesome note taking app',
			longDescription: "Noties is your friend when it comes to organising one's tasks in a simple yet convenient way. Worried about your privacy? Not to worry. Noties does not send data to a server. All your data belong to your device.",
			url: 'https://noties-v2-toumani.vercel.app',
			githubUrl: 'https://github.com/Toumani/noties-v2',
			tools: [{ id: 'nextjs', name: 'Next.js' }, { id: 'ionic', name: 'Ionic' }, { id: 'tailwindcss', name: 'Tailwind CSS' }, { id: 'pwa', name: 'Progressive Web App' }],
		},
		{
			id: 'wordament-solver',
			name: 'Wordament Solver',
			description: 'Word puzzle resolver',
			longDescription: "Ever wanted to solve Microsoft's puzzle game, Wordament? Or any other word puzzle game? Wordament Solver has you covered! Just fill the board and watch the magic.",
			url: 'https://wordament-solver.toumanisidibe.com',
			githubUrl: 'https://github.com/Toumani/wordament-solver',
			tools: [{ id: 'solidjs', name: 'SolidJS' }, { id: 'ktor', name: 'Ktor' }],
		},
	];

	return {
		props: {
			name: 'Apps',
			apps,
		}
	}
}

export default Apps;