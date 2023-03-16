import React, { PropsWithChildren } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const pages = [
	{ url: '/about', name: 'About' },
	{ url: '/apps', name: 'Apps' },
	{ url: '/articles', name: 'Articles' },
]

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex flex-row justify-center bg-gray-900">
			<div className="flex flex-col bg-gray-800 max-w-5xl">
				<Nav />
				<div className="flex flex-col items-start gap-16 px-4 lg:px-12">
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

function Nav() {
	return (
		<>
			<Popover className="flex flex-col items-end pt-2 pb-8 lg:hidden">
				<Popover.Button className="inline-block mr-4 p-2 rounded-2xl border-4 border-solid border-teal-600 font-semibold text-teal-600 focus:outline-none">
					<Bars3Icon className="text-teal-600" width={20} height={20} strokeWidth={3} />
				</Popover.Button>
				<Popover.Overlay className="fixed inset-0 bg-black opacity-80" />
				<Transition
					className="w-full"
					enter="transition duration-100 ease-out"
					enterFrom="transform scale-95 opacity-0"
					enterTo="transform scale-100 opacity-100"
					leave="transition duration-75 ease-out"
					leaveFrom="transform scale-100 opacity-100"
					leaveTo="transform scale-95 opacity-0"
				>
					<Popover.Panel className="fixed z-10 w-full">
						{({ close }) => (
							<div className="flex flex-col items-stretch mx-6 pt-4 pb-2 rounded-2xl bg-gray-800">
								<button className="self-end mr-4 mb-4" onClick={() => close()}>
									<XMarkIcon className="h-6 h-6 text-gray-500" />
								</button>
								<nav className="flex flex-col items-stretch text-sm font-semibold text-zinc-400">
									{ pages.map(page =>
										<React.Fragment key={page.url}>
											<Link className="py-4 text-center border-solid border-t border-gray-700" href={page.url}>
												{ page.name }
											</Link>
										</React.Fragment>
									)}
								</nav>
							</div>
						)}
					</Popover.Panel>
				</Transition>
			</Popover>
			<nav className="hidden lg:flex flex-row justify-end self-end gap-8 my-8 mr-12 py-2 px-10 rounded-full bg-gray-900 border-solid border-2 border-teal-600">
				{ pages.map(page =>
					<React.Fragment key={page.url}>
						<Link className="font-semibold text-zinc-400" href={page.url}>
							{ page.name }
						</Link>
					</React.Fragment>
				)}
			</nav>
		</>
	)
}

export default Layout;