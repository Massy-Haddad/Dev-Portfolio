import {
	Intro,
	About,
	Projects,
	Skills,
	Experience,
	Contact,
} from '@/components'

export default function Home() {
	return (
		<main className="">
			<Intro />
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Contact />
		</main>
	)
}
