import { GetStaticProps } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { GithubMarkIcon, InstagramIcon, LinkedInIcon } from "../components/icons";
import Link from "next/link";
import FormattedDate from "../components/FormattedDate";

interface Article {
	id: string,
	title: string,
	content: string,
	publishDateStr: string,
}

interface HomeProps {
	articles: Article[]
}

const Home = ({ articles }: HomeProps) => {
	return (
		<div className="px-4 space-y-12 bg-gray-900">
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

			<main className="flex flex-col">
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
			</main>

			<footer>

			</footer>
		</div>
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
	]

	return {
		props: {
			articles,
		},
	}
}

export default Home;