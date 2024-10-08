import Buttons from "./components/Buttons";
import ImgAvatar from "./components/ImgAvatar";
import UserLocation from "./components/UserLocation";
import UserName from "./components/UserName";
import UserTitle from "./components/UserTitle";


export default function App() {
  return (
    <div className="bg-gray-900 w-100 flex flex-col items-center lg:py-24 py-20 ">
      <div className="bg-gray-800 max-w-screen-lg md:w-1/4 p-5 rounded-lg ">  
{/*---------- 
        <div className="flex flex-col items-center">
          <div className="p-4 flex justify-center">
              <img className="rounded-full w-1/2" src={ImgAvatar}/> 
          </div>
          <div className="">
            <div className="text-3xl text-white font-semibold">
            Jessica Randall
            </div> 
          </div>
          <div className="">
            <div className="text-green-400 font-semibold">
            London, United Kingdom
            </div>
          </div>
          <div className="p-4">
          <div className="text-white">
            "Front-end developer and avid reader."
            </div>
          </div>
        </div>
---------- */}
        <ImgAvatar />
{/*---------- */}
        <UserName />
{/*---------- */}
        <UserLocation />
{/*---------- */}
        <UserTitle />
{/*---------- */}
        <Buttons />
{/*---------- */}
      </div>
    </div>
    
  )
}
