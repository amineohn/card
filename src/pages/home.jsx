
import Discord from "../components/icons/Discord";
import Github from "../components/icons/Github";
import Instagram from "../components/icons/Instagram";
import React from "../components/icons/React";
import Profile from "../assets/img/name.gif";
const Home = () => {
  return (
      <div className="flex items-center justify-center my-40">
      <div className="flex flex-col items-center content-center justify-center p-10 mx-auto space-y-3 rounded-lg md:w-1/4 sm:w-2/4 bg-gradient-to-t from-red-400 to-red-500 md:flex-shrink-0">
          <img className="pt-1 rounded-full w-36 h-36" src={Profile} alt="" srcSet="" />
            <p className="text-lg font-bold text-gray-100">Veny</p>
            <span className="flex text-sm font-normal text-gray-50">Developer <React /></span>
            <button className="p-2 text-white transition duration-300 bg-red-400 rounded-lg text-normal hover:bg-red-500"><a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer" className="flex">Github<Github /></a></button>
            <button className="p-2 text-white transition duration-300 bg-red-400 rounded-lg text-normal hover:bg-red-500"><a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer" className="flex">Instagram<Instagram /></a></button>
            <button className="p-2 text-white transition duration-300 bg-red-400 rounded-lg text-normal hover:bg-red-500"><a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer" className="flex">Discord<Discord /></a></button>
      </div>
    </div>
  );
}
export default Home;