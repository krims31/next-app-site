export default function Article() {
	return (
		<main>
			<h1 className="text-5xl font-bold mt-20 ml-20">Article Post</h1>
			<p className="text-gray-400 ml-20 mt-5">
				Get started today and take your reading experience wherever you go!
			</p>
			<div className="flex gap-5 mt-5 ml-20">
				<button className="border-gray-200 rounded-3xl bg-gray-200 font-bold p-2 px-5 cursor-pointer">
					All
				</button>
				<button className="text-gray-400">Newest</button>
				<button className="text-gray-400">Popular</button>
				<button className="text-gray-400">Work</button>
				<button className="text-gray-400">Machine Learning</button>
				<button className="text-gray-400">Artificial Intelligence</button>
			</div>
		</main>
	)
}
