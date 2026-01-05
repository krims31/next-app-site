import { writer } from "./data/writer.ts"

export default function Writer() {
  return (
    <>
      <div>
        <h1 className="ml-330 mt-15 font-bold">{writer.write}</h1>
        
        <div className="flex items-center ml-330 mt-5">
          <div className="flex items-center space-x-4">
            <img 
              src={writer.profileGuy} 
              alt="guy" 
              className="rounded-3xl"
              width={50} 
              height={50}
            />
            <div>
              <h1 className="font-bold">{writer.inspWriter}</h1>
              <p className="text-gray-400 mt-1">{writer.dog}</p>
            </div>
          </div>
          <button className="border border-gray-300 rounded-2xl px-6 py-2 bg-black text-white ml-4">
            {writer.follow}
          </button>
        </div>

        <div className="flex items-center ml-330 mt-5">
          <div className="flex items-center space-x-4">
            <img 
              src={writer.cameronImg} 
              alt="cameron" 
              className="rounded-3xl" 
              width={50} 
              height={50}
            />
            <div>
              <h1 className="font-bold">{writer.cameron}</h1>
              <p className="text-gray-400 mt-1">{writer.medicial}</p>
            </div>
          </div>
          <button className="border border-gray-300 rounded-2xl px-6 py-2 bg-black text-white ml-4">
            {writer.follow}
          </button>
        </div>

        <div className="flex items-center ml-330 mt-5">
          <div className="flex items-center space-x-4">
            <img 
              src={writer.theresaImg} 
              alt="theresa" 
              className="rounded-3xl" 
              width={50} 
              height={50}
            />
            <div>
              <h1 className="font-bold">{writer.theresa}</h1>
              <p className="text-gray-400 mt-1">{writer.president}</p>
            </div>
          </div>
          <button className="border border-gray-300 rounded-2xl px-6 py-2 bg-black text-white ml-4">
            {writer.follow}
          </button>
        </div>
      
        <div className="flex items-center ml-330 mt-5">
          <div className="flex items-center space-x-4">
            <img 
              src={writer.estherImg} 
              alt="esther" 
              className="rounded-3xl" 
              width={50} 
              height={50}
            />
            <div>
              <h1 className="font-bold">{writer.esther}</h1>
              <p className="text-gray-400 mt-1">{writer.nursing}</p>
            </div>
          </div>
          <button className="border border-gray-300 rounded-2xl px-6 py-2 bg-black text-white ml-4">
            {writer.follow}
          </button>
        </div>
        <div>
          <h1 className="ml-330 mt-10 text-amber-500">{writer.seeSug}</h1>
        </div>
      </div>
    </>
  )
}
