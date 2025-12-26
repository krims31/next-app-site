'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import { LuMessageSquareMore } from 'react-icons/lu'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import img8 from './assets/img8.png'
import { ai } from './data/ai'
import { article } from './data/article'
import { blockchain } from './data/block'
import { ml } from './data/ml'

export default function Article() {
	const [isLike, setIsLike] = useState({
		post1: false,
		post2: false,
		post3: false,
		post4: false
	})

	// Функция для безопасного преобразования в число
	const safeParseNumber = (value: any): number => {
		if (typeof value === 'number') return value
		if (typeof value === 'string') {
			const num = parseInt(value, 10)
			return isNaN(num) ? 0 : num
		}
		return 0
	}

	const [likeCounts, setLikeCounts] = useState({
		post1: 0,
		post2: 0,
		post3: 0,
		post4: 0
	})

	useEffect(() => {
		setLikeCounts({
			post1: safeParseNumber(article.like),
			post2: safeParseNumber(ai.like2),
			post3: safeParseNumber(ml.like3),
			post4: safeParseNumber(blockchain.like4)
		})
	}, [])

	const handleLike = (postId: keyof typeof isLike) => {
		try {
			setIsLike(prev => {
				const newLikeState = !prev[postId]

				setLikeCounts(prevCounts => ({
					...prevCounts,
					[postId]: newLikeState
						? prevCounts[postId] + 1
						: Math.max(0, prevCounts[postId] - 1)
				}))

				return {
					...prev,
					[postId]: newLikeState
				}
			})
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<main>
			<h1 className="text-5xl font-bold mt-20 ml-20">{article.post}</h1>
			<p className="text-gray-400 ml-20 mt-5">{article.getStarted}</p>
			<div className="flex gap-5 mt-5 ml-20">
				<button className="border-gray-200 rounded-3xl bg-gray-200 font-bold p-2 px-5 cursor-pointer">
					{article.all}
				</button>
				<button className="text-gray-400 hover:text-black">
					{article.new}
				</button>
				<button className="text-gray-400 hover:text-black">
					{article.popular}
				</button>
				<button className="text-gray-400 hover:text-black">
					{article.work}
				</button>
				<button className="text-gray-400 hover:text-black">{article.ml}</button>
				<button className="text-gray-400 hover:text-black">{article.ai}</button>
			</div>

			{/* Python */}
			<div>
				<Image
					src={img1}
					alt="blockchain"
					width={260}
					className="mt-9 ml-20 border rounded-2xl transition-all duration-300 
			   hover:shadow-lg hover:shadow-gray-300/50 hover:scale-[1.02]"
				/>
				<p className="ml-90 -mt-45 text-gray-400">{article.jan}</p>
				<p className="ml-120 -mt-6">{article.python}</p>
				<h1 className="ml-90 mt-4">{article.block}</h1>
				<p className="ml-90 mt-2 text-gray-400">{article.learn}</p>
				<Image
					src={img2}
					alt="profile"
					width={30}
					className="mt-10 ml-90 border rounded-2xl"
				/>
				<p className="-mt-6 ml-100">{article.brooklyn}</p>

				<div
					className="flex items-center gap-1 ml-170 -mt-5 cursor-pointer hover:opacity-80"
					onClick={() => handleLike('post1')}
				>
					{isLike.post1 ? (
						<FcLike className="text-red-500 scale-110 transition-all duration-200" />
					) : (
						<AiOutlineHeart className="text-gray-400 hover:text-gray-600 transition-all duration-200" />
					)}
					<p className="text-gray-400 ml-1">{likeCounts.post1}</p>
				</div>

				<div className="flex items-center gap-1 ml-192 -mt-5">
					<LuMessageSquareMore />
					<p className="text-gray-400 ml-1">{safeParseNumber(article.like)}</p>
				</div>
			</div>

			{/* Artificial */}
			<div>
				<Image
					src={img3}
					alt="ai"
					width={260}
					className="mt-13 ml-20 border rounded-2xl transition-all duration-300 
			   hover:shadow-lg hover:shadow-gray-300/50 hover:scale-[1.02]"
				/>
				<p className="ml-90 -mt-45 text-gray-400">{ai.nov}</p>
				<p className="ml-120 -mt-6">{ai.ai}</p>
				<h1 className="ml-90 mt-4">{ai.howAi}</h1>
				<p className="ml-90 mt-2 text-gray-400">{ai.discover}</p>
				<Image
					src={img4}
					alt="profile"
					width={30}
					className="mt-9 ml-90 border rounded-2xl"
				/>
				<p className="-mt-6 ml-100">{ai.cody}</p>

				<div
					className="flex items-center gap-1 ml-170 -mt-5 cursor-pointer hover:opacity-80"
					onClick={() => handleLike('post2')}
				>
					{isLike.post2 ? (
						<FcLike className="text-red-500 scale-110 transition-all duration-200" />
					) : (
						<AiOutlineHeart className="text-gray-400 hover:text-gray-600 transition-all duration-200" />
					)}
					<p className="text-gray-400 ml-1">{likeCounts.post2}</p>
				</div>

				<div className="flex items-center gap-1 ml-192 -mt-5">
					<LuMessageSquareMore />
					<p className="text-gray-400 ml-1">{safeParseNumber(ai.like2)}</p>
				</div>
			</div>

			{/* ML */}
			<div>
				<Image
					src={img5}
					alt="ai"
					width={260}
					className="mt-13 ml-20 border rounded-2xl transition-all duration-300 
			   hover:shadow-lg hover:shadow-gray-300/50 hover:scale-[1.02]"
				/>
				<p className="ml-90 -mt-45 text-gray-400">{ml.march}</p>
				<p className="ml-120 -mt-6">{ml.machine}</p>
				<h1 className="ml-90 mt-4">{ml.machineLearn}</h1>
				<p className="ml-90 mt-2 text-gray-400">{ml.explore}</p>
				<Image
					src={img6}
					alt="profile"
					width={30}
					className="mt-9 ml-90 border rounded-2xl"
				/>
				<p className="-mt-6 ml-100">{ml.jacob}</p>

				<div
					className="flex items-center gap-1 ml-170 -mt-5 cursor-pointer hover:opacity-80"
					onClick={() => handleLike('post3')}
				>
					{isLike.post3 ? (
						<FcLike className="text-red-500 scale-110 transition-all duration-200" />
					) : (
						<AiOutlineHeart className="text-gray-400 hover:text-gray-600 transition-all duration-200" />
					)}
					<p className="text-gray-400 ml-1">{likeCounts.post3}</p>
				</div>

				<div className="flex items-center gap-1 ml-192 -mt-5">
					<LuMessageSquareMore />
					<p className="text-gray-400 ml-1">{safeParseNumber(ml.like3)}</p>
				</div>
			</div>

			{/* Blockchain */}
			<div>
				<Image
					src={img7}
					alt="ai"
					width={260}
					className="mt-13 ml-20 border rounded-2xl transition-all duration-300 
			   hover:shadow-lg hover:shadow-gray-300/50 hover:scale-[1.02]"
				/>
				<p className="ml-90 -mt-45 text-gray-400">{blockchain.oct}</p>
				<p className="ml-120 -mt-6">{blockchain.block}</p>
				<h1 className="ml-90 mt-4">{blockchain.meet}</h1>
				<p className="ml-90 mt-2 text-gray-400">{blockchain.see}</p>
				<Image
					src={img8}
					alt="profile"
					width={30}
					className="mt-9 ml-90 border rounded-2xl"
				/>
				<p className="-mt-6 ml-100">{blockchain.devon}</p>

				<div
					className="flex items-center gap-1 ml-170 -mt-5 cursor-pointer hover:opacity-80"
					onClick={() => handleLike('post4')}
				>
					{isLike.post4 ? (
						<FcLike className="text-red-500 scale-110 transition-all duration-200" />
					) : (
						<AiOutlineHeart className="text-gray-400 hover:text-gray-600 transition-all duration-200" />
					)}
					<p className="text-gray-400 ml-1">{likeCounts.post4}</p>
				</div>

				<div className="flex items-center gap-1 ml-192 -mt-5">
					<LuMessageSquareMore />
					<p className="text-gray-400 ml-1">
						{safeParseNumber(blockchain.like4)}
					</p>
				</div>

				<button
					className="ml-100 mt-20 bg-black text-white font-bold px-6 py-2 rounded-3xl  transition-all duration-300 
			   hover:shadow-lg hover:shadow-gray-300/50 hover:scale-[1.02]"
				>
					{article.load}
				</button>
			</div>
		</main>
	)
}
