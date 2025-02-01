'use client'
import Link from 'next/link'
import { socials } from '@/lib/data'
import { Button } from '@/components/ui'

export default function Footer() {
	return (
		<footer className="flex justify-between items-center w-full h-[10vh] px-[4.5rem] pb-9 mix-blend-difference text-[1.2rem]">
			<p className="tracking-normal">Feel free to conect with me on Socials</p>
			<nav className="flex">
				{socials.map((social, index) => {
					return (
						<Link key={index} href={social.href} target="blank">
							<Button
								key={index}
								text={social.title}
								className="block last:mr-0"
							/>
						</Link>
					)
				})}
			</nav>
		</footer>
	)
}
