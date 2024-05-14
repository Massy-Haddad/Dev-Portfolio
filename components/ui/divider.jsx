'use client'

import { motion } from 'framer-motion'

export default function Home() {
	return (
		<div className="w-[90%] absolute top-0 flex flex-col justify-center items-center gap-2">
			<motion.div
				whileInView={{ scaleX: ['0%', '100%'] }}
				transition={{ duration: 1, type: 'tween' }}
				className="flex justify-center items-center w-full bg-[hsl(0,_0%,_10%)] opacity-50 mt-1"
			>
				<span className="h-[2px] w-full bg-[linear-gradient(90deg,_hsl(0,_0%,_10%),_hsl(0,_0%,_70%),_hsl(0,_0%,_10%))]" />
			</motion.div>
			<div className="flex h-full w-full text-lg leading-7 mix-blend-difference tracking-tighter">
				about top
			</div>
		</div>
	)
}
