'use client'
import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function cursor({
	stickyElement,
}: {
	stickyElement: React.RefObject<HTMLDivElement>
}) {
	const [isHovered, setIsHovered] = useState(false)

	const cursorSize = isHovered ? 144 : 24
	const cursorHalfSize = cursorSize / 2

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
		const stickyElementRect = stickyElement.current?.getBoundingClientRect() // Add null check

		// Add null check
		if (isHovered && stickyElementRect) {
			const { left, top, width, height } = stickyElementRect
			const center = { x: left + width / 2, y: top + height / 2 }

			mouse.x.set(center.x - cursorHalfSize)
			mouse.y.set(center.y - cursorHalfSize)
		} else {
			mouse.x.set(clientX - cursorHalfSize)
			mouse.y.set(clientY - cursorHalfSize)
		}
	}

	// Takes care of the sticky element on mouse over
	const manageMouseOver = () => {
		setIsHovered(true)
	}
	const manageMouseLeave = () => {
		setIsHovered(false)
	}

	useEffect(() => {
		// Takes care of the cursor movement
		window.addEventListener('mousemove', manageMouseMove)

		// Takes care of the sticky element on mouse over
		if (stickyElement.current) {
			stickyElement.current.addEventListener('mouseover', manageMouseOver)
			stickyElement.current.addEventListener('mouseleave', manageMouseLeave)
		}

		return () => {
			window.removeEventListener('mousemove', manageMouseMove)

			if (stickyElement.current) {
				stickyElement.current.removeEventListener('mouseover', manageMouseOver)
				stickyElement.current.removeEventListener(
					'mouseleave',
					manageMouseLeave
				)
			}
		}
	})

	return (
		<motion.div
			animate={{ width: cursorSize, height: cursorSize }}
			style={{ left: smoothMouse.x, top: smoothMouse.y }}
			className="fixed w-6 h-6 bg-white mix-blend-difference rounded-full pointer-events-none"
		></motion.div>
	)
}
