import { topic } from "./data/topic.ts"
export default function Topics() {
   return (
     <>
      <h1 className="ml-325 -mt-315 font-bold">{topic.rec}</h1>
      <div className="topics">
        {/*Data Privacy*/}
      <div className="mb-8">
        <p className="ml-330 mt-8 flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-gray shadow-sm">#</p>
        <h1 className="ml-345 -mt-9 font-medium">{topic.data}</h1>
        <p className="ml-405 -mt-6 text-gray-400">{topic.articles}</p>
      </div>
  
        {/*Cloud*/}
      <div className="mb-8">
        <p className="ml-330 mt-8 flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-gray shadow-sm">#</p>
        <h1 className="ml-345 -mt-9 font-medium">{topic.cloud}</h1>
        <p className="ml-405 -mt-6 text-gray-400">{topic.cloudArticles}</p>
      </div>
  
        {/*HealthTech*/}
      <div className="mb-8">
        <p className="ml-330 mt-8 flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-gray shadow-sm">#</p>
        <h1 className="ml-345 -mt-9 font-medium">{topic.health}</h1>
        <p className="ml-405 -mt-6 text-gray-400">{topic.healthArticles}</p>
      </div>
  
        {/*Analytics*/}
      <div className="mb-8">
        <p className="ml-330 mt-8 flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 bg-gray shadow-sm">#</p>
        <h1 className="ml-345 -mt-9 font-medium">{topic.analytics}</h1>
        <p className="ml-405 -mt-6 text-gray-400">{topic.analyticArticles}</p>
      </div>
      <div>
        <h1 className="ml-330 mt-10 text-amber-500">{topic.seeMore}</h1>  
      </div>
    </div>
    </>
   )
 }
