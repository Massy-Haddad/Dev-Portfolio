'use client'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Logo from '@/public/assets/logo.png'
import { routes } from '@/lib/data'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { useActiveSectionContext } from '@/context/active-section-context'

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
			className={
				'sticky top-4 left-0 right-0 z-10 mt-8 max-w-5xl mx-auto w-full'
			}
		>
			<nav className="flex justify-center">
				<div className="relative">
					<ul
						className={clsx(
							'inline-flex items-center max-w-full h-12 m-auto rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-500',
							{
								'bg-[#1f2023cc]': scrolled,
							}
						)}
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
								<span className="text-3xl dark:text-slate-50">MASSY</span>
							</Link>

							{routes.map((link) => (
								<li className="h-3/4 flex items-center justify-center relative">
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
					</ul>
				</div>
			</nav>
		</motion.header>
	)
}
