import React from "react";
import Image from "next/image";
import { uppercaseFirst } from "../lib/utils";
import { GithubMarkIcon, IconProps, InstagramIcon, LinkedInIcon } from "../components/icons";

const About = () => {
	const tools = [
		'kotlin', 'java', 'typescript', 'tailwindCSS', 'nextJS', 'react', 'ktor', 'spring'
	]
	return (
		<>
			<h1 className="text-3xl text-white font-bold lg:text-5xl">
				I’m Toumani, a software developer based in Morocco. I am passionate about building software.
			</h1>
			<div className="md:flex flex-row">
				<div className="space-y-4 text-base text-justify text-gray-400">
					<p>
						My first line of code was to develop a game, which I eventually did, not without big struggle though.
						Right after, like every programmer after their first successful program, I felt unstoppable 🦸.
						And then, right after, I got caught by reality.
					</p>
					<p>
						My free fall from top of "Mount Stupid" of the <a className="text-teal-600 cursor-pointer underline decoration-dotted hover:text-teal-800 transition" href="https://thedecisionlab.com/biases/dunning-kruger-effect">Dunning-Kruger slope</a> taught me a lot.
						I understood that software engineering wasn't about making a mere program functional.
						It was about making entire systems solve actual problems. Which is a completely different story.<br />
					</p>
					<p>
						Today, I try to build softwares that matter, whether in a team or solo.
						The best (and probably the only) way to achieve this is to develop, not only softwares but relevant skills in order to continuously deliver quality.<br />
					</p>
					<p>
						Here are some of the tools I proficiently use →
					</p>
				</div>
				<div className="md:w-full md:ml-8 lg:ml-12">
					<h2 className="mt-8 mb-4 text-xl text-white font-bold md:mt-0 lg:text-3xl">My stack</h2>
					<ul className="grid grid-cols-2 space-y-4">
						{ tools.map(tool => <Tool key={tool} logo={`/logos/${tool.toLowerCase()}.png`} name={uppercaseFirst(tool)} />) }
					</ul>

					<h2 className="mt-8 mb-4 text-xl text-white font-bold lg:text-3xl">Let's connect</h2>
					<ul className="space-y-6">
						<Social icon={GithubMarkIcon} url="https://github.com/Toumani" text="Follow me on Github" />
						<Social icon={InstagramIcon} url="https://www.instagram.com/toumanitrate/" text="Follow me on Instagram" />
						<Social icon={LinkedInIcon} url="https://www.linkedin.com/in/toumani-sidibe-76447412b/" text="Follow me on LinkedIn" />
					</ul>
				</div>
			</div>
		</>
	)
}

const Tool = ({ logo, name }: { logo: string, name: string }) => {
	return (
		<li className="flex items-center space-x-2">
			<Image src={logo} alt={`${name} logo`} width={20} height={20} />
			<span>{ name }</span>
		</li>
	)
}

interface SocialProps {
	icon: (props: React.ComponentProps<'svg'> & IconProps) => JSX.Element,
	url: string,
	text: string,

}

const Social = ({ icon, url, text }: SocialProps) => {
	const styledIcon = React.createElement(icon, { height: 22, width: 22, inheritFill: true });
	return (
		<li>
			<a className="flex items-center space-x-4 text-gray-400 fill-gray-400 transition hover:text-teal-600 hover:fill-teal-400" href={url}>
				{ styledIcon }
				<span className="font-bold">{ text }</span>
			</a>
		</li>
	)
}

export default About;