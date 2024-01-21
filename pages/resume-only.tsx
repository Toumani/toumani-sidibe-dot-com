import ResumeJsx from "../components/Resume";
import { Resume } from "../lib/types";
import { GetStaticProps } from "next";
import resume from "../lib/resume";

export default function ResumeOnlyPage({ resume }: { resume: Resume }) {
	return <ResumeJsx resume={resume} />
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			name: 'resume-only',
			resume: resume,
		},
	}
}