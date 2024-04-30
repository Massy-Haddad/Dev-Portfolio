'use client'
import {
	Banner,
	Header,
	Intro,
	About,
	Projects,
	Skills,
	Experience,
	Contact,
	Footer,
} from '@/components'

export default function Home() {
	return (
		<main className="">
			{/* <Banner /> */}
			<Header />
			<Intro />
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Contact />
			<Footer />
		</main>
	)
}
