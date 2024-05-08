'use client'
import { useEffect } from 'react'
import {
	Banner,
	Header,
	Hero,
	About,
	Projects,
	Skills,
	Experience,
	Contact,
	Footer,
} from '@/components'
import { Cursor } from '@/components/ui'

export default function Home() {
	useEffect(() => {
		;(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default
			const locomotiveScroll = new LocomotiveScroll()
		})()
	}, [])

	return (
		<main>
			{/* <Banner /> */}
			<Cursor />
			<Header />
			<Hero />
			<About />
			<Projects />
			{/* <Skills /> */}
			{/* <Experience /> */}
			<Contact />
			<Footer />
		</main>
	)
}
