export default function Header() {
	return (
		<header className="bg-white text-black py-32 px-16 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold mb-6">
        Discover Insights. <br/>
				<span className="inline-block mt-3">Fuel Your Curiosity</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-xl">
				Dive into a world a insightful articles, expert opinions, and inspiring stories.
      </p>
      <div className="mt-8">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Начать читать
        </button>
      </div>
    </header>
	)
}