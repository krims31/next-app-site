'use client'

import Link from 'next/link'

export default function Navigation() {
	return (
		<nav className="flex items-center justify-between px-16 py-6 bg-white shadow-md">
			<div className="text-2xl font-bold text-black">Blogane.</div>

			<div className="flex items-center gap-8 ml-25">
				<Link
					href="/"
					className="relative text-black hover:text-blue-500 after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:rounded-full after:bg-blue-700 after:opacity-0 after:translate-x-[-50%] hover:after:opacity-100 transition-opacity"
				>
					Home
				</Link>
				<Link
					href="/about"
					className="relative text-black hover:text-blue-500 after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:rounded-full after:bg-blue-700 after:opacity-0 after:translate-x-[-50%] hover:after:opacity-100 transition-opacity"
				>
					About Us
				</Link>
				<Link
					href="/contact"
					className="relative text-black hover:text-blue-500 after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:rounded-full after:bg-blue-700 after:opacity-0 after:translate-x-[-50%] hover:after:opacity-100 transition-opacity"
				>
					Contact
				</Link>
			</div>

			<div className="flex items-center gap-4">
				<button className="px-4 py-2 hover:text-white transition-colors cursor-pointer">
					Sign in
				</button>
				<button className="px-4 py-1 border rounded-2xl bg-gray-200 text-white font-bold hover:opacity-90 transition-opacity cursor-pointer">
					Get Started
				</button>
			</div>
		</nav>
	)
}
