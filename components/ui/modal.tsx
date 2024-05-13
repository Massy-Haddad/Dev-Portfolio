import React, { useEffect, useRef } from 'react'

import Image from 'next/image'
import gsap from 'gsap'
import { motion } from 'framer-motion'

import { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number]

const scaleVariants = {
	initial: { scale: 0, x: '-50%', y: '-50%' },
	open: {
		scale: 1,
		x: '-50%',
		y: '-50%',
		transition: { duration: 0.4, ease: [0.75, 0, 0.25, 1] },
	},
	closed: {
		scale: 0,
		x: '-50%',
		y: '-50%',
		transition: { duration: 0.4, ease: [0.3, 0, 0.65, 1] },
	},
}

export default function modal({
	modal,
}: {
	modal: { active: boolean; index: number }
}) {
	const { active, index } = modal
	const modalContainer = useRef(null)

	useEffect(() => {
		//Move Container
		let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
			duration: 0.8,
			ease: 'power3',
		})
		let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
			duration: 0.8,
			ease: 'power3',
		})

		window.addEventListener('mousemove', (e) => {
			const { pageX, pageY } = e
			xMoveContainer(pageX)
			yMoveContainer(pageY)
		})
	}, [])

	return (
		<motion.div
			ref={modalContainer}
			variants={scaleVariants}
			initial="initial"
			animate={active ? 'open' : 'closed'}
			id="modal"
			className="p-1 absolute flex flex-col justify-between h-[250px] w-[350px] rounded-xl pointer-events-none overflow-hidden bg-[#a1a1a1] backdrop-filter backdrop-blur-md"
		>
			<div
				id="tools"
				className="relative flex items-center w-full gap-1 p-1 mix-blend-difference"
			>
				{[1, 2, 3].map(() => (
					<span className="bg-[#515151] inline-block p-1 rounded-full" />
				))}
			</div>

			<div className="relative flex items-center justify-center flex-row h-full w-full rounded-lg overflow-hidden">
				<div
					style={{ top: index * -100 + '%' }}
					className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
				>
					{projectsData.map((project: ProjectProps, index) => {
						return (
							<Image
								key={index}
								src={project.image}
								alt={'Image of project' + project.title}
								width={0}
								height={300}
								className="w-full h-full object-cover"
							/>
						)
					})}
				</div>
			</div>
		</motion.div>
	)
}
