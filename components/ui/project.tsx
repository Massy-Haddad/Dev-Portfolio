import React, { Dispatch, ReactNode } from 'react'

export default function project({
	index,
	title,
	setModal,
}: {
	index: number
	title: string
	setModal: Dispatch<React.SetStateAction<{ active: boolean; index: number }>>
}) {
	return (
		<div
			className="group flex items-center justify-between w-full px-24 py-12 cursor-pointer border-t border-[#a1a1a1] hover:opacity-40 transition-all duration-200 ease-linear"
			onMouseEnter={() => setModal({ active: true, index })}
			onMouseLeave={() => setModal({ active: false, index })}
		>
			<h2 className="text-3xl font-normal group-hover:-translate-x-4 transition-all duration-200 ease-linear">
				{title}
			</h2>
			<p className="font-light group-hover:-translatex-4 transition-all duration-200 ease-linear">
				Design & Development
			</p>
		</div>
	)
}
