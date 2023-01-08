import ProjectsPages from "../components/ProjectsPages";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useAnimatePresence } from "use-animate-presence";

import NewHome from "../components/NewHome";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Home() {
  const [openCrud, setOpenCrud] = useState(false);

  const fadeableVariants = {
    opacity: {
      from: 0,
      to: 1,
    },
  };

  const fadeableVariants2 = {
    opacity: {
      from: 1,
      to: 0,
    },
  };

  const StackIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-PineGreen"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0z" />
    </svg>
  );

  const alt = true;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, translateY: "50%" }}
      className="w-full h-full"
    >
      <div className="">
        <div className={`h-screen w-full  `} key={"1"}>
          <div className={`w-full h-screen bg-white `} id="home">
            <div className="flex sm:p-8 items-center justify-center 2xl:text-6xl md:text-4xl sm:text-3xl text-3xl w-full h-full">
              <div className=" sm:w-5/6  p-4 pt-0 text-gray-500 flex flex-col relative">
                <div className="font-Ezcar">
                  <NewHome></NewHome>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          exit={{ opacity: 0 }}
          className={`h-full w-full`}
          key={"2"}
        >
          <div id="Projects" className="w-full h-fit relative z-10 bg-white ">
            <ProjectsPages></ProjectsPages>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
