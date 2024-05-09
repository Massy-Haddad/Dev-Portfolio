'use client'
import { useState, useEffect, useMemo, useRef } from 'react'
// import { Gradient } from "../Gradient/Gradient";
import { Gradient } from './Gradient'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Whatamesh = ({
	// Black to White
	// gradientColor1 = '#040404',
	// gradientColor2 = '#a1a1a1',
	// gradientColor3 = '#515151',
	// gradientColor4 = '#040404',

	// Full black
	gradientColor1 = '#040404',
	gradientColor2 = '#515151',
	gradientColor3 = '#040404',
	gradientColor4 = '#040404',

	isDataTransitionIn = true,
	isDarkenTop = false,
}) => {
	const [isMounted, setIsMounted] = useState(false)

	const containerRef = useRef(null)
	const elementRef = useRef(null)

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		let ctx = gsap.context((self) => {
			gsap.set(elementRef.current, {
				//clipPath: 'inset(0vw 0vw round 0vw)',
				border: '0px solid rgba(255, 255, 255, 0)',
			})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: '.contact',
					start: 'center+=25% center',
					end: 'bottom bottom',
					scrub: 1,
					snap: 2,
					//pin: true,
					// toggleClass: {
					// 	targets: '#gradient-canvas',
					// 	className: 'gradientBorders',
					// },
					//markers: true,
				},
			})

			tl.to(elementRef.current, {
				width: 'calc(100% - 9rem)',
				height: 'calc(100% - 14rem)',
				margin: '0 5rem',
				borderRadius: '2.5rem',
				border: '2px solid rgba(255, 255, 255, .3)',
				zIndex: -9,
				// borderColor: 'red',
				// clipPath: 'inset(7vw 5.5vw round 2.22vw)',
			})
		}, containerRef)

		return () => ctx.revert()
	}, [])

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
		<section className="gradientCanvas" ref={containerRef}>
			<canvas
				ref={elementRef}
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
		</section>
	)
}

export default Whatamesh
