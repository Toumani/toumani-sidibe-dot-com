import Head from 'next/head'
import Image from 'next/image'
import { GithubMarkIcon, InstagramIcon, LinkedInIcon } from "../components/icons";

export default function Home() {
  return (
    <div className="px-4 bg-gray-900">
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

      <main>
      </main>

      <footer>

      </footer>
    </div>
  )
}
