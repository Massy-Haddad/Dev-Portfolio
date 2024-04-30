'use client'
import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function cursor() {
	const cursorSize = 24

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	}

	const smoothingOptions = {
		damping: 20,
		stiffness: 300,
		mass: 0.5,
	}
	const smoothMouse = {
		x: useSpring(mouse.x, smoothingOptions),
		y: useSpring(mouse.y, smoothingOptions),
	}

	// Takes care of the cursor movement
	const manageMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e as MouseEvent
		mouse.x.set(clientX - cursorSize / 2)
		mouse.y.set(clientY - cursorSize / 2)
	}

	useEffect(() => {
		window.addEventListener('mousemove', manageMouseMove)
		return () => {
			window.removeEventListener('mousemove', manageMouseMove)
		}
	})

	return (
		<motion.div
			style={{ left: smoothMouse.x, top: smoothMouse.y }}
			className="fixed w-6 h-6 bg-white mix-blend-difference rounded-full pointer-events-none"
		></motion.div>
	)
}
