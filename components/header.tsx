'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

import clsx from 'clsx'
import { routes, socials } from '@/lib/data'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { useActiveSectionContext } from '@/context/active-section-context'

console.log(
	'%c Dev by - Massy Haddad -  https://massyh.com',
	'background: #1A1A1B; color: #F7ECDD; padding: 15px'
)

export default function Header() {
	const scrolled = useScrollTop()

	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext()

	return (
		<motion.header
			initial={{ y: -10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: 0, opacity: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className="flex justify-between items-center w-full h-[5.5rem] py-0 px-12 fixed top-0 left-0 z-10 mix-blend-difference pt-6"
		>
			<h1 className="text-3xl ">
				<Link href="/">Massy H.</Link>
			</h1>

			<nav className="flex tracking-tighter">
				{routes.slice(1).map((route, index) => (
					<Link key={index} href={route.href}>
						<button
							key={index}
							className={clsx('button2', {
								active: activeSection === route,
							})}
							onClick={() => {
								setActiveSection(route)
								setTimeOfLastClick(Date.now())
							}}
						>
							<span className="btn-text-one">{route.title}</span>
							<span className="btn-text-two">{route.title}</span>
						</button>
					</Link>
				))}
			</nav>

			<div>
				<Link href="/">
					<button className="button2 marquee">
						<span className="btn-text-one">available for work</span>
						<span className="btn-text-two">available for work</span>
					</button>
				</Link>
			</div>
		</motion.header>
	)
}
