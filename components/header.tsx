'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

import clsx from 'clsx'
import { routes } from '@/lib/data'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { useActiveSectionContext } from '@/context/active-section-context'
import { Button } from './ui'

console.log(
	'%c Dev by - Massy Haddad -  https://massyh.com',
	'background: #1A1A1B; color: #F7ECDD; padding: 15px'
)

export default function Header() {
	const scrolledTop = useScrollTop()

	const menu = {
		visible: {
			y: 0,
			transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
		},
		hidden: {
			y: '-100%',
			transition: {
				duration: 0.75,
				// delay: 0.35,
				type: 'tween',
				ease: [0.76, 0, 0.24, 1],
			},
		},
	}

	return (
		<motion.header
			variants={menu}
			initial="visible"
			animate={scrolledTop ? 'hidden' : 'visible'}
			className="flex justify-between items-center w-full h-28 px-[4.5rem] pt-9 fixed top-0 left-0 z-10 mix-blend-difference"
		>
			<h1 className="text-5xl ">
				<Link href="/">Massy H.</Link>
			</h1>

			<nav className="flex">
				{routes.slice(1).map((route, index) => (
					<Link key={index} href={route.href}>
						<Button text={route.title} className="block" />
					</Link>
				))}
			</nav>

			<div>
				<Link href="/#contact">
					<Button text="Available for work" className="block marquee" />
				</Link>
			</div>
		</motion.header>
	)
}
