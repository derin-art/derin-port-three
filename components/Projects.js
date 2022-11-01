import { motion } from "framer-motion";
import react, { useState } from "react";
import ProjectDisplay from "./ProjectDisplay";
import { AnimatePresence } from "framer-motion";

export default function Projects() {
  const ProjectNames = ["AGILE/SCRUM APP #1", "E-COMMERCE & CRUD APP #2"];
  const [page, setPage] = useState(0);
  const variants = {
    out: {
      opacity: 0,
      x: 40,
      transition: {
        duration: 0.75,
      },
    },
    in: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="flex sm:items-center justify-center h-screen md:pt-4 lg:pt-0 pt-24">
      <div className="w-5/6   relative">
        <div className="w-full flex relative sm:pt-10 flex-col-reverse sm:flex-row">
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              key={page}
              variants={variants}
              animate="in"
              initial="out"
              exit={"out"}
              className="font-Ezcar lg:text-7xl  md:text-3xl text-left sm:text-base text-sm lg:w-[650px]"
            >
              {ProjectNames.map((name, index) => {
                return (
                  <div
                    key={name}
                    className="w-fit text-neutral-400 hidden sm:block"
                  >
                    {index === page && name}
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {ProjectNames.map((name, index) => {
            return (
              <div
                key={name}
                className="w-fit font-Ezcar text-neutral-400 sm:hidden"
              >
                {index === page && name}
              </div>
            );
          })}
          <div className="font-Ezcar lg:text-7xl md:text-3xl text-2xl sm:absolute md:right-0 right-4">
            PROJECTS
          </div>
        </div>
        <div className="h-4/6 ">
          {" "}
          <ProjectDisplay
            page={page}
            setPage={setPage}
            key={"1212"}
          ></ProjectDisplay>
        </div>
      </div>
    </div>
  );
}
