import { useState, useEffect } from 'react'

export const useScroll = (threshold = 150) => {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.scrollY > threshold &&
				window.innerHeight + window.scrollY <
					document.documentElement.scrollHeight - 200
			) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [threshold])

	return scrolled
}
