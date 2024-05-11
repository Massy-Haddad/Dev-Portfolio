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
			className="contact flex justify-center items-center h-[calc(100vh-14rem)] w-screen "
		>
			<div className="h-full w-[calc(100%-9rem)] flex flex-col items-center justify-center mx-20 rounded-[2.5rem]">
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

				{/* <div className="h-40 w-40 my-14 mx-auto bg-white">
					<Link href="" className="relative cursor-none pointer-events-none">
						<div className="circle1 absolute w-40 h-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
						<div className="circle2 absolute w-40 h-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
						<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl">
							<p className="text-xl -ml-4">get in</p>
							<p className="text-xl">touch</p>
						</div>
					</Link>
				</div> */}
			</div>
		</section>
	)
})

export default Contact