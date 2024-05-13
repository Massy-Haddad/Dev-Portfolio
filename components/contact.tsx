'use client'
import Link from 'next/link'
import { forwardRef } from 'react'
import { Magnetic } from './ui'

const Contact = forwardRef(function Contact(
	props,
	ref: React.ForwardedRef<HTMLDivElement>
) {
	return (
		<section
			id="contact"
			className="contact flex justify-center items-center h-auto w-screen "
		>
			<div className="h-[calc(100vh-14rem)] w-[calc(100%-9rem)] mt-28 flex flex-col items-center justify-center mx-20 rounded-[2.5rem]">
				<p className="text-2xl -tracking-[0.075rem]">
					I’d love to hear about your project
				</p>
				<p className="flex text-8xl -tracking-wide font-medium mt-6">
					Let's get started
				</p>

				<Magnetic>
					<div
						ref={ref}
						className="relative w-36 h-36 rounded-full flex flex-col justify-center items-center text-center p-4 mt-8 outline outline-1 leading-4"
					>
						<Link href="">
							<p className="mr-4">Write a</p>
							<p className="ml-4">Message</p>
						</Link>
					</div>
				</Magnetic>
			</div>
		</section>
	)
})

export default Contact