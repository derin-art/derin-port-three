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
        <div className={`h-4/5 w-full  `} key={"1"}>
          <div
            className={`w-full  h-screen xl:hidden flex items-center justify-center  bg-white `}
            id="home"
          >
            <NewHome></NewHome>
          </div>
          <div
            className={` hidden xl:block   bg-white sticky top-0`}
            style={{ height: "50vh" }}
            id="home"
          >
            <NewHome></NewHome>
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
