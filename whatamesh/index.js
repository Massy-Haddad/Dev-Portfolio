'use client'
import { useState, useEffect, useMemo } from 'react'
// import { Gradient } from "../Gradient/Gradient";
import { Gradient } from './Gradient'

const Whatamesh = ({
	gradientColor1 = '#177373',
	gradientColor2 = '#255459',
	gradientColor3 = '#032326',
	gradientColor4 = '#D98B8B',
	isDataTransitionIn = true,
	isDarkenTop = false,
}) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		if (isMounted) {
			// Create your instance
			const gradient = new Gradient()

			// Call `initGradient` with the selector to your canvas
			gradient?.initGradient('#gradient-canvas')
		}
	}, [isMounted])

	return (
		<canvas
			id="gradient-canvas"
			className="gradientCanvas"
			data-transition-in={isDataTransitionIn ? '' : null}
			data-js-darken-top={isDarkenTop ? '' : null}
			style={{
				'--gradient-color-1': gradientColor1,
				'--gradient-color-2': gradientColor2,
				'--gradient-color-3': gradientColor3,
				'--gradient-color-4': gradientColor4,
			}}
		/>
	)
}

export default Whatamesh
