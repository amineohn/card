import React from "../components/icons/React";
import Light from "../components/icons/Light";
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
        <div className="flex flex-col items-center content-center justify-center p-10 mx-auto space-y-3 rounded-lg md:w-1/4 sm:w-2/4 2xl:w-1/5 md:flex-shrink-0">
            <img className="pt-1 rounded-full w-36 h-36" src={Profile} alt="" srcset="" />
              <p className="text-4xl font-bold text-white">Veny</p>
              <span className="flex p-3 space-x-3 text-sm font-normal rounded-full text-yellow-discord-50 bg-black-discord-50 hover:shadow-xl">
                <a className="transition duration-300 transform hover:-translate-y-1 hover:scale-110" href="https://www.figma.com" target="_blank" rel="noreferrer">
                  <Figma />
                </a> 
                <a className="transition duration-300 transform hover:-translate-y-1 hover:scale-110" href="https://fr.reactjs.org" target="_blank" rel="noreferrer">
                  <React />
                </a> 
                <a className="transition duration-300 transform hover:-translate-y-1 hover:scale-110" href="https://tailwindcss.com" target="_blank" rel="noreferrer">
                  <Tailwind />
                </a>
              </span>
                <Playing />
          <div class="flex flex-start space-x-3 bottom-0">
            <div class="bg-black-discord-50 flex-shrink-0 space-x-3 rounded-full p-2">
              <Light />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
}
export default Home;