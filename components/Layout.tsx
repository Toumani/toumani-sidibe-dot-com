import React, { PropsWithChildren } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const pages = [
	{ url: '/about', name: 'About' },
	{ url: '/apps', name: 'Apps' },
	{ url: '/articles', name: 'Articles' },
]

interface LayoutProps extends PropsWithChildren {
	currentPageName: string,
}

const Layout = ({ currentPageName, children }: LayoutProps) => {
	return (
		<div className="flex flex-row justify-center bg-gray-900">
			<div className="flex flex-col bg-gray-800 max-w-5xl">
				<Nav currentPageName={currentPageName} />
				<div className="flex flex-col items-start gap-24 px-4 lg:px-12">
					{ children }
				</div>
				<footer className="flex flex-row justify-center mt-32 py-12 border-solid border-t-2 border-gray-700">
					<ul className="flex flex-row justify-evenly gap-6 text-zinc-400">
						{ pages.map(page => <li key={page.url}><Link href={page.url}>{ page.name }</Link></li>)}
					</ul>
				</footer>
			</div>
		</div>
	)
}

function Nav({ currentPageName }: { currentPageName: string }) {
	const isHomePage = currentPageName && currentPageName === 'Home';
	return (
		<>
			<nav className="flex flex-row-reverse lg:flex-row items-center justify-between lg:justify-around pt-6 lg:pt-0 pb-8 lg:pb-0 px-6">
				<Popover className="flex flex-col items-end lg:hidden">
					<Popover.Button className="inline-block p-2 rounded-2xl border-4 border-solid border-teal-600 font-semibold text-teal-600 focus:outline-none">
						<Bars3Icon className="text-teal-600" width={20} height={20} strokeWidth={3} />
					</Popover.Button>
					<Popover.Overlay className="fixed inset-0 bg-black opacity-80" />
					<Transition
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
						style={{ width: 'calc(100vw - 3rem)' }}
					>
						<Popover.Panel className="fixed z-10 w-full">
							{({ close }) => (
								<div className="flex flex-col items-stretch mx-6 pt-4 pb-2 rounded-2xl bg-gray-800">
									<button className="self-end mr-4 mb-4" onClick={() => close()}>
										<XMarkIcon className="h-6 h-6 text-gray-500" />
									</button>
									<nav className="flex flex-col items-stretch text-sm text-zinc-400">
										{ pages.map(page => {
											const isCurrentPage = currentPageName === page.name
											return (
												<React.Fragment key={page.url}>
													<Link
														className={`py-4 text-center border-solid border-t border-gray-700 ${isCurrentPage ? 'text-teal-600 font-semibold' : 'hover:text-teal-600 transition'}`}
														href={page.url}
														onClick={() => close()}
													>
														{ page.name }
													</Link>
												</React.Fragment>
										)})}
									</nav>
								</div>
							)}
						</Popover.Panel>
					</Transition>
				</Popover>
				{
					!isHomePage &&
            <Link href="/">
              <Image className="self-center rounded-full lg:self-start" src="/images/avatar.jpg" alt="Toumani Sidibe" width={36} height={36} />
            </Link>
				}
				<ul className="hidden lg:flex flex-row justify-end gap-8 my-8 py-2 px-10 rounded-full bg-gray-700">
					{ pages.map(page => {
						const isCurrentPage = currentPageName === page.name
						return (
							<li key={page.url}>
								<Link className={isCurrentPage ? "text-teal-600 font-semibold" : "text-zinc-300 hover:text-teal-600 transition"} href={page.url}>
									{ page.name }
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}

export default Layout;