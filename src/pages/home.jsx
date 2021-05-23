
import Discord from "../components/icons/Discord";
import Github from "../components/icons/Github";
import Instagram from "../components/icons/Instagram";
import React from "../components/icons/React";
import Profile from "../assets/img/name.gif";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55 }}
    >
      <div className="flex items-center justify-center my-40">
        <div className="flex flex-col items-center content-center justify-center p-10 mx-auto space-y-3 rounded-lg md:w-1/4 sm:w-2/4 bg-gradient-to-t from-red-400 to-red-500 md:flex-shrink-0">
            <img className="pt-1 rounded-full w-36 h-36" src={Profile} alt="" srcset="" />
              <p className="text-lg font-bold text-gray-100">Veny</p>
              <span className="flex text-sm font-normal text-gray-50">Developer <React /></span>
              <button className="p-2 text-white transition duration-300 bg-red-400 rounded-lg text-normal hover:bg-red-500"><a href="https://github.com/imveny" target="_blank" rel="noreferrer" className="flex">Github<Github /></a></button>
              <button className="p-2 text-white transition duration-300 bg-red-400 rounded-lg text-normal hover:bg-red-500"><a href="#" target="_blank" rel="noreferrer" className="flex">Instagram<Instagram /></a></button>
              <button className="p-2 text-white transition duration-300 bg-red-400 rounded-lg text-normal hover:bg-red-500"><a href="https://discord.gg/PpaxcpcFkd" target="_blank" rel="noreferrer" className="flex">Discord<Discord /></a></button>
        </div>
      </div>
    </motion.div>
    </>
  );
}
export default Home;