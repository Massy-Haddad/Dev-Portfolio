'use client'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'


import { routes, socials } from '@/lib/data'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { useActiveSectionContext } from '@/context/active-section-context'

import Logo from '@/public/assets/logo.png'
import { NavigationDropdown } from '@/components/ui'
import { BsArrowRightShort, BsGithub } from 'react-icons/bs'

export default function Header() {
	const scrolled = useScrollTop()

	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext()

	return (
		<motion.header
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className={clsx(
				'sticky inset-x-0 top-0 z-40 w-full flex-none backdrop-blur duration-200 lg:border-b bg-gray-900/0 dark:bg-transparent border-transparent',
				{
					'bg-gray-50/50 lg:border-slate-900/10 dark:border-slate-50/[0.06]':
						scrolled,
				}
			)}
		>
			<div className="max-w-8xl mx-auto">
				<div className="py-4 lg:px-8 mx-4 lg:mx-0">
					<div className="relative flex items-center justify-between">
						<Link
							href={'/'}
							className="text-xl mr-3 md:w-auto lg:text-3xl transition-all duration-500"
							onClick={() => {
								setActiveSection(routes[0].title)
								setTimeOfLastClick(Date.now())
							}}
						>
							{/* <Image
								src={Logo}
								alt="Massy Logo"
								width={150}
								height={150}
								className="block w-100 h-auto dark:brightness-200"
							/> */}
							<span className="text-slate-900 dark:text-slate-200 w-auto h-5">
								MASSY
							</span>
						</Link>

						<Link
							href={'/'}
							className="ml-3 text-xs leading-5 font-medium rounded-full py-1 px-3 hidden xl:flex items-center bg-slate-400/10 hover:bg-slate-400/20 dark:highlight-white/5"
						>
							dev
							<span className="ml-1 overflow-visible text-current">
								<BsArrowRightShort />
							</span>
						</Link>

						<div className="relative hidden lg:flex items-center ml-auto">
							<nav className="text-sm leading-6 font-semibold text-slate-500 dark:text-slate-800">
								<ul className="flex space-x-8">
									{routes.slice(1).map((link) => (
										<li key={link.title} className="">
											<Link
												className={clsx(
													'hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
													{
														'text-gray-950 dark:text-gray-300':
															activeSection === link.title,
													}
												)}
												href={link.href}
												onClick={() => {
													setActiveSection(link.title)
													setTimeOfLastClick(Date.now())
												}}
											>
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</nav>
							<div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
								<Link
									href={socials[0].href}
									className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
								>
									<span className="w-5 h-5">
										<BsGithub />
									</span>
								</Link>
							</div>
						</div>

						{/* Mobile content */}
						<NavigationDropdown />
					</div>
				</div>
			</div>
		</motion.header>
	)
}
