import { article } from "./data/article";
import { ai } from "./data/ai";
import { ml } from "./data/ml";
import { blockchain } from "./data/block";
import Image from "next/image";
import img2 from "./assets/img2.png";
import img1 from "./assets/img1.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import img7 from "./assets/img7.png";
import img8 from "./assets/img8.png";
import { FcLike } from "react-icons/fc";
import { LuMessageSquareMore } from "react-icons/lu";
export default function Article() {
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
      {/*Python */}
      <div>
        <Image
          src={img1}
          alt="blockchain"
          width={260}
          className="mt-9 ml-20 border rounded-2xl"
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
        <FcLike className="ml-170 -mt-5" />
        <p className="ml-175 -mt-5 text-gray-400">{article.like}</p>
        <LuMessageSquareMore className="ml-192 -mt-5" />
        <p className="ml-197 -mt-5 text-gray-400">{article.like}</p>
      </div>
      {/*Artificial */}
      <div>
        <Image src={img3} alt="ai" className="mt-13 ml-20 border rounded-2xl" />
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
        <FcLike className="ml-170 -mt-5" />
        <p className="ml-175 -mt-5 text-gray-400">{ai.like2}</p>
        <LuMessageSquareMore className="ml-192 -mt-5" />
        <p className="ml-197 -mt-5 text-gray-400">{ai.like2}</p>
      </div>
      {/*ML */}
      <div>
        <Image
          src={img5}
          alt="ai"
          width={260}
          className="mt-13 ml-20 border rounded-2xl"
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
        <FcLike className="ml-170 -mt-5" />
        <p className="ml-175 -mt-5 text-gray-400">{ml.like3}</p>
        <LuMessageSquareMore className="ml-192 -mt-5" />
        <p className="ml-197 -mt-5 text-gray-400">{ml.like3}</p>
      </div>
      {/*Blockchain */}
      <div>
        <Image
          src={img7}
          alt="ai"
          width={260}
          className="mt-13 ml-20 border rounded-2xl"
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
        <FcLike className="ml-170 -mt-5" />
        <p className="ml-175 -mt-5 text-gray-400">{blockchain.like4}</p>
        <LuMessageSquareMore className="ml-192 -mt-5" />
        <p className="ml-197 -mt-5 text-gray-400">{blockchain.like4}</p>
      </div>
    </main>
  );
}
