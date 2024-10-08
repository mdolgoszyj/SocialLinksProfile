export default function Buttons() {
    return (
        <div className="flex flex-col space-y-4 w-full text-white font-semibold">
            <div className="">
                <button class="w-full h-12 px-9 transition-colors duration-150 bg-gray-700 rounded-md focus:shadow-outline hover:bg-green-400 hover:text-gray-800">
                  GitHub
                </button>
            </div>
            <div className="">
                <button class="w-full h-12 px-9 transition-colors duration-150 bg-gray-700 rounded-md focus:shadow-outline hover:bg-green-400 hover:text-gray-800">
                  Frontend Mentor
                </button>
            </div>
            <div className="">
                <button class="w-full h-12 px-9 transition-colors duration-150 bg-gray-700 rounded-md focus:shadow-outline hover:bg-green-400 hover:text-gray-800">
                  LinkedIn
                </button>
            </div>
            <div className="">
                <button class="w-full h-12 px-9 transition-colors duration-150 bg-gray-700 rounded-md focus:shadow-outline hover:bg-green-400 hover:text-gray-800">
                  Twitter
                </button>
            </div>
            <div className="">
                <button class="w-full h-12 px-9 transition-colors duration-150 bg-gray-700 rounded-md focus:shadow-outline hover:bg-green-400 hover:text-gray-800">
                  Instagram
                </button>
            </div>
        </div>
    )
  }