export default function Header() {
	return (
		<header className="bg-black text-black py-32 px-16 flex flex-col items-center text-center">
			<h1 className="text-5xl font-bold mb-6">
				<span className="text-yellow-400">Discover</span>{' '}
				<span className="text-white">Insights.</span> <br />
				<span className="inline-block mt-3 text-white">
					Fuel Your Curiosity
				</span>
			</h1>
			<p className="text-lg text-gray-600 max-w-xl">
				Dive into a world a insightful articles, expert opinions, and inspiring
				stories.
			</p>
			<div className="mt-8 w-full max-w-md mx-auto relative">
				<div className=""></div>

				<input
					type="search"
					placeholder="Search Articles"
					className="w-100 pl-4 pr-4 py-3 rounded-2xl border text-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all shadow-sm placeholder:text-white"
				/>
			</div>
		</header>
	)
}
