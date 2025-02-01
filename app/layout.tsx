import './globals.css'
import Whatamesh from '@/whatamesh'
import ThemeContextProvider from '@/context/theme-context'
import { ThemeSwitch, Banner, Header, Footer } from '@/components'
import ActiveSectionContextProvider from '@/context/active-section-context'

import localFont from 'next/font/local'
const myFont = localFont({ src: '../fonts/PPTelegraf-Regular.otf' })

export const metadata = {
	title: 'Massy | Portfolio',
	description:
		'Développeur fullstack, passionné par le web et les nouvelles technologies.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		// As long as we use locomotive-scroll, we can't use the smooth scroll
		// <html lang="fr" className="!scroll-smooth">
		<html lang="en">
			<body className={`${myFont.className} mix-blend-normal`}>
				<div className="WhatameshWrapper">
					<Whatamesh />
				</div>

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						{children}
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	)
}
