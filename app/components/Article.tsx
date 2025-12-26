import { article } from './data/article'
import img1 from "./assets/img1.png"
export default function Article() {
	return (
		<main>
			<h1 className="text-5xl font-bold mt-20 ml-20">{article.post}</h1>
			<p className="text-gray-400 ml-20 mt-5">{article.getStarted}</p>
			<div className="flex gap-5 mt-5 ml-20">
				<button className="border-gray-200 rounded-3xl bg-gray-200 font-bold p-2 px-5 cursor-pointer">
					{article.all}
				</button>
				<button className="text-gray-400">{article.new}</button>
				<button className="text-gray-400">{article.popular}</button>
				<button className="text-gray-400">{article.work}</button>
				<button className="text-gray-400">{article.ml}</button>
				<button className="text-gray-400">{article.ai}</button>
				<img
					src={img1}
					alt="blockchain"
				/>
				<p>{article.jan}</p>
				<p>{article.python}</p>
				<h1>{article.block}</h1>
				<p>{article.learn}</p>
			</div>
		</main>
	)
}
