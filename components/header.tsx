'use client'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'


import { routes } from '@/lib/data'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { useActiveSectionContext } from '@/context/active-section-context'

import Logo from '@/public/assets/logo.png'
import { FaLanguage } from 'react-icons/fa'

export default function Header() {
	const scrolled = useScrollTop()

	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext()

	return (
		<motion.header
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -10, opacity: 0 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className={clsx(
				'sticky top-0 left-0 right-0 z-10 mx-auto w-full backdrop-blur-[8px] bg-opacity-10 border-b border-transparent transition-all duration-500',
				{
					'border-slate-900 dark:border-slate-900 bg-gray-50': scrolled,
				}
			)}
		>
			<nav className="flex justify-center py-4">
				<div className="relative">
					<ul
						className={
							'inline-flex items-center w-full h-12 m-auto text-[0.9rem] text-gray-500 p-0'
						}
					>
						<div className="flex items-center justify-between w-full h-full gap-2 capitalize pt-3 pr-2 pb-3 pl-3">
							<Link
								href={'/'}
								className="block w-32 h-8 decoration-0 text-inherit font-medium transition-colors"
							>
								{/* <Image
									src={Logo}
									alt="Massy Logo"
									width={150}
									height={150}
									className="block w-100 h-auto dark:brightness-200"
								/> */}
								<span className="block text-3xl dark:text-slate-50">MASSY</span>
							</Link>

							<div className="flex-shrink">
								<div className="flex items-center justify-between w-full h-full gap-2 capitalize py-3 pr-2 pl-3">
									{routes.map((link) => (
										<li key={link.title} className="">
											<Link
												className={clsx(
													'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
													{
														'text-gray-950 dark:text-gray-200':
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
								</div>
							</div>

							<span className="text-3xl">
								<FaLanguage />
							</span>
						</div>
					</ul>
				</div>
			</nav>
		</motion.header>
	)
}
