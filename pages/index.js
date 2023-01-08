import ProjectsPages from "../components/ProjectsPages";

import { motion, AnimatePresence, useCycle } from "framer-motion";

import NewHome from "../components/NewHome";

export default function Home() {
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
