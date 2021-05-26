
import Discord from "../components/icons/Discord";
import Github from "../components/icons/Github";
import Instagram from "../components/icons/Instagram";
import Spotify from "../components/icons/Spotify";
import React from "../components/icons/React";
import Twitter from "../components/icons/Twitter";
import Tailwind from "../components/icons/Tailwind";
import Figma from "../components/icons/Figma";
import Playing from "../components/currentlyPlaying";
import Profile from "../assets/img/name.gif";
import { motion } from 'framer-motion';
import {useState} from "react";
import axios from "axios";
const Home = () => {
 const [doing, setResponseData] = useState("");
    axios.get("https://api.lanyard.rest/v1/users/762055588762877973")
    .then(res => {
      setResponseData(res.data)
      return;
    })
     .catch((error) => {
      console.log(error)
    })
  return (
    <>
    <motion.div initial={{ opacity: 0, y: '-100px' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <div className="flex items-center justify-center my-40 xl:my-32 2xl:my-60">
        <div className="flex flex-col items-center content-center justify-center p-10 mx-auto space-y-3 rounded-lg shadow-xl md:w-1/4 sm:w-2/4 2xl:w-1/5 filter brightness-100 md:flex-shrink-0">
            <img className="pt-1 rounded-full w-36 h-36" src={Profile} alt="" srcset="" />
              <p className="text-lg font-bold text-gray-100">Veny</p> <span className="flex text-sm font-normal text-gray-50">Developer</span>
              <span className="flex text-sm font-normal text-gray-50">
                <a className="transition duration-300 transform hover:-translate-y-1 hover:scale-110" href="https://www.figma.com" target="_blank" rel="noreferrer"><Figma /></a> 
                <span className="spacement">~</span> 
                <a className="transition duration-300 transform hover:-translate-y-1 hover:scale-110" href="https://fr.reactjs.org" target="_blank" rel="noreferrer"><React /></a> 
                <span className="spacement">~</span> 
                <a className="transition duration-300 transform hover:-translate-y-1 hover:scale-110" href="https://tailwindcss.com" target="_blank" rel="noreferrer"><Tailwind /></a>
              </span>
              <button className="p-2 text-white transition duration-300 transform rounded-lg shadow-xl bg-gradient-to-r from-light-blue-400 to-blue-500 filter brightness-100 text-normal hover:-translate-y-1 hover:scale-110"><a href="https://github.com/imveny" target="_blank" rel="noreferrer" className="flex">Github<Github /></a></button>
              <button className="p-2 text-white transition duration-300 transform rounded-lg shadow-xl bg-gradient-to-r from-light-blue-400 to-blue-500 filter brightness-100 text-normal hover:-translate-y-1 hover:scale-110"><a href="#" target="_blank" rel="noreferrer" className="flex">Instagram<Instagram /></a></button>
              <button className="p-2 text-white transition duration-300 transform rounded-lg shadow-xl bg-gradient-to-r from-light-blue-400 to-blue-500 filter brightness-100 text-normal hover:-translate-y-1 hover:scale-110"><a href="https://discord.gg/PpaxcpcFkd" target="_blank" rel="noreferrer" className="flex">Discord<Discord /></a></button>
              <button className="p-2 text-white transition duration-300 transform rounded-lg shadow-xl bg-gradient-to-r from-light-blue-400 to-blue-500 filter brightness-100 text-normal hover:-translate-y-1 hover:scale-110"><a href="https://twitter.com/fuckthisimoutd" target="_blank" rel="noreferrer" className="flex">Twitter<Twitter /></a></button>
              <div className="flex items-center justify-center p-2 text-white transition duration-300 transform rounded-lg shadow-xl bg-gradient-to-r from-light-blue-400 to-blue-500 filter brightness-100 text-normal">
                <Spotify /> 
                <Playing />
              </div>
        </div>
      </div>
    </motion.div>
    </>
  );
}
export default Home;