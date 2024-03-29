import './globals.css'
import { ThemeSwitch, Banner, Header, Footer } from '@/components'
import ThemeContextProvider from '@/context/theme-context'
import ActiveSectionContextProvider from '@/context/active-section-context'

import localFont from 'next/font/local'

const myFont = localFont({ src: '../fonts/against regular.otf' })

//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

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
		<html lang="fr" className="!scroll-smooth">
			<body
				className={`${myFont.className} max-w-[52rem] mx-auto px-4 pb-4 sm:px-6 md:px-8 xl:px-12 lg:max-w-7xl antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900`}
			>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Banner />
						<Header />
						{children}
						<Footer />

						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	)
}
