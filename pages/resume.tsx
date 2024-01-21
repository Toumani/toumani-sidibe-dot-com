import React from "react";
import Head from "next/head";
import {GetStaticProps} from "next";
import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import resume from "../lib/resume";
import { Resume } from "../lib/types";
import ResumeJsx from "../components/Resume";

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
				<ResumeJsx resume={resume} />

				<a className="m-auto px-4 py-2 text-center rounded-lg bg-teal-600 font-bold" href="/api/resume" download>
					Download CV
					<ArrowSmallDownIcon className="inline-block ml-2" width={16} height={16} strokeWidth={3} />
				</a>
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			name: 'Resume',
			resume: resume,
		},
	}
}

export default ResumePage;