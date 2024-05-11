'use client'
import { useEffect, useRef } from 'react'
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

	const stickyElement = useRef(null)

	return (
		<main>
			{/* <Banner /> */}
			<Cursor stickyElement={stickyElement} />
			<Header />
			<Hero />
			<About />
			<Projects />
			{/* <Skills /> */}
			{/* <Experience /> */}
			<Contact ref={stickyElement} />
			<Footer />
		</main>
	)
}
