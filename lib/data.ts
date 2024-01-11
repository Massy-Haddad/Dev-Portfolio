import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

// Images
import figurestoreImg from '@/public/assets/projects/figure-store.png'
import hashiraImg from '@/public/assets/projects/hashira.png'

export const routes = [
	{
		title: 'Accueil',
		href: '#home',
	},
	{
		title: 'À propos',
		href: '#about',
	},
	{
		title: 'Projets',
		href: '#projects',
	},
	{
		title: 'Compétences',
		href: '#skills',
	},
	{
		title: 'Expérience',
		href: '#experience',
	},
	{
		title: 'Contact',
		href: '#contact',
	},
] as const

export const experiencesData = [
	{
		title: 'DEP en Soutien Informatique',
		location: 'Centre de formation professionnelle des Riverains (LEPISC)',
		description:
			"Cette formation m'a permis de réaliser que la programmation est passionnante.<br /><br /> J'y est appris les bases du multimédia, de la réseautique, de la technologie et surtout de la programmation.",
		icon: React.createElement(LuGraduationCap),
		date: '2016 - 2018',
	},
	{
		title: "(DEC) Technique en développement d'applications web et mobiles",
		location: 'Orlando, FL',
		description:
			'Développer des applications web transactionnelles et non transactionnelles.<br /><br /> Développer des applications natives avec ou sans base de données.<br /><br /> Exploiter les principes de la programmation orientée objet.<br /><br /> Exploiter des systèmes de bases de données.',
		icon: React.createElement(CgWorkAlt),
		date: '2018 - 2021',
	},
	{
		title: '(BAC) Baccalauréat en génie logiciel',
		location: 'École de technologie supérieure (ÉTS)',
		description:
			'Analyser et pouvoir spécifier les besoins et les exigences du développement d’un produit logiciel ou d’un système logiciel.<br /><br />Concevoir des logiciels tout en assurant d’abord l’intérêt du public, puis celui de ses clients, à partir de spécifications conformes aux besoins.<br /><br />Développer des produits logiciels ou des systèmes basés sur des logiciels en suivant les normes professionnelles adéquates.<br /><br />S’assurer par des tests adéquats que les produits logiciels sont conformes aux spécifications énoncées.',
		icon: React.createElement(FaReact),
		date: 'Depuis automne 2021',
	},
] as const

export const projectsData = [
	{
		title: 'Figure Store',
		description:
			'Mon premier projet e-commerce. Le thème de celui-ci est en lien avec la pop culture, à savoir les figurines.',
		tags: ['React', 'Next.js', 'Framer', 'Sanity', 'All'],
		imageUrl: figurestoreImg,
	},
	{
		title: 'Portfolio (ancien)',
		description:
			'Mon ancien portfolio de développeur (celui-ci est toujours en ligne, mais ne sera plus mis à jour).',
		tags: ['React', 'Framer', 'Sanity.io', 'All'],
	},
	{
		title: 'Hashira',
		description:
			"Un projet de UI/UX dans lequel j'ai implémenté une maquette de Figma. (Crédit à l'auteur de la maquette : Adi Bivaga)",
		tags: ['React', 'Scss', 'All'],
		imageUrl: hashiraImg,
	},
] as const

export const skillsData = [
	'Git',
	'HTML',
	'CSS',
	'Tailwind',
	'JavaScript',
	'TypeScript',
	'Framer Motion',
	'React',
	'Redux',
	'Next.js',
	'Prisma',
	'Node.js',
	'Express',
	'GraphQL',
	'Apollo',
] as const
