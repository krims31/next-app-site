'use client'

import Link from 'next/link'
import { data } from './data/nav'

export default function Navigation() {
	return (
		<nav className="flex items-center justify-between px-16 py-6 bg-black shadow-md">
			<div className="text-2xl font-bold text-white">Blogane.</div>

			<div className="flex items-center gap-8 ml-25">
				<Link
					href="/"
					className="relative text-white hover:text-gray-200 after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:rounded-full after:bg-white after:opacity-0 after:translate-x-[-50%] hover:after:opacity-100 transition-opacity"
				>
					{data.home}
				</Link>
				<Link
					href="/about"
					className="relative text-white hover:text-gray-200 after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:rounded-full after:bg-white after:opacity-0 after:translate-x-[-50%] hover:after:opacity-100 transition-opacity"
				>
					{data.about}
				</Link>
				<Link
					href="/contact"
					className="relative text-white hover:text-gray-200 after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:rounded-full after:bg-white after:opacity-0 after:translate-x-[-50%] hover:after:opacity-100 transition-opacity"
				>
					{data.contact}
				</Link>
				<Link
					href="/download"
					className="relative text-white hover:text-gray-200 after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:rounded-full after:bg-white after:opacity-0 after:translate-x-[-50%] hover:after:opacity-100 transition-opacity"
				>
					{data.download}
				</Link>
			</div>

			<div className="flex items-center gap-4">
				<button className="px-4 py-2 text-white hover:text-white transition-colors cursor-pointer">
					{data.sign}
				</button>
				<button className="px-4 py-1 border rounded-2xl bg-gray-500 text-white font-bold hover:opacity-90 transition-opacity cursor-pointer">
					{data.getStart}
				</button>
			</div>
		</nav>
	)
}
