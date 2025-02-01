'use client'
import { useState } from 'react'

import { projectsData } from '@/lib/data'
import { Modal, Project } from '@/components/ui'

export default function Projects() {
	const [modal, setModal] = useState({ active: false, index: 0 })

	return (
		<section
			id="projects"
			className="flex items-center justify-center h-screen"
		>
			<div className="flex flex-col items-center justify-center w-full px-[4.5rem]">
				{projectsData.map((project, index) => {
					return (
						<Project
							key={index}
							index={index}
							title={project.title}
							setModal={setModal}
						/>
					)
				})}
			</div>

			<Modal modal={modal} />
		</section>
	)
}
