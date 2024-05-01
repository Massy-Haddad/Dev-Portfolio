'use client'
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
