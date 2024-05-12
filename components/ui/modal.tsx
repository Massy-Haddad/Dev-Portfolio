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
			className="absolute h-[250px] w-[350px] rounded-md overflow-hidden pointer-events-none
            backdrop-filter backdrop-blur-lg backdrop-saturate-[180%] bg-[rgba(17,_25,_40,_0.75)] rounded-[12px] border-[1px] border-[solid] border-[rgba(255,255,255,0.125)]"
		>
			<div id="tools" className="flex items-center w-full gap-1 p-2">
				{[1, 2, 3].map((item) => (
					<span className="bg-[#515151] inline-block w-3 h-3 p-1 rounded-full" />
				))}
			</div>

			<div
				style={{ top: index * -100 + '%' }}
				className="absolute h-full w-full mt-3 p-[3px] transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
			>
				{projectsData.map((project: ProjectProps, index) => {
					return (
						<div
							className="relative flex items-center justify-center h-full w-full"
							key={index}
						>
							<Image
								src={project.image}
								alt={'Image of project' + project.title}
								width={300}
								height={0}
								className="h-auto w-full rounded-md"
							/>
						</div>
					)
				})}
			</div>
		</motion.div>
	)
}
