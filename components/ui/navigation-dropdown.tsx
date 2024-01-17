import Link from 'next/link'
import clsx from 'clsx'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { routes } from '@/lib/data'

export default function NavigationDropdown() {
	return (
		<Menu as="div" className="ml-2 -my-1 lg:hidden">
			<div>
				<Menu.Button className="w-8 h-8 flex items-center justify-center font-semibold text-slate-700 dark:text-slate-400 hover:text-gray-950 transition dark:hover:text-gray-300">
					<span className="sr-only">Open menu</span>
					<RxHamburgerMenu />
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="text-inherit absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-slate-900 bg-opacity-90 backdrop-filter backdrop-blur-sm py-1 shadow-lg ring-1 ring-slate-900 dark:ring-slate-700 ring-opacity-5 focus:outline-none">
					{routes.map((link) => (
						<Menu.Item key={link.title} as={Fragment}>
							{({ active }) => (
								<Link
									href={link.href}
									className={clsx(
										active ? 'dark:bg-slate-800 bg-slate-100' : '',
										'block px-4 py-2 text-sm text-gray-950 dark:text-gray-300'
									)}
								>
									{link.title}
								</Link>
							)}
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	)
}
