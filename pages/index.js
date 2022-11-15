import dynamic from "next/dynamic";
import ProjectsPages from "../components/ProjectsPages";
import { useState } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useAnimatePresence } from "use-animate-presence";
import Projects from "../components/Projects";

export default function Home() {
  const [openCrud, setOpenCrud] = useState(false);
  const FadeAlt = () => ({
    in: {
      style: {
        opacity: ["0.7", "1"],
        transitionDuration: "1s",
      },
    },
    out: {
      style: {
        opacity: ["0.7", "1"],
        transitionDuration: "1s",
      },
    },
  });

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

  const animatedText = useAnimatePresence({
    variants: fadeableVariants,
    initial: "visible",
  });

  const animatedText2 = useAnimatePresence({
    variants: fadeableVariants2,
    initial: "visible",
    duration: "0.5s",
  });

  /*  <div>
       <button onClick={() => animatedText.togglePresence()}>Toggle</button>
       
     </div>; */

  const downArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="30"
      height="30"
      className=""
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z" />
    </svg>
  );

  const StackIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-gray-700"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20.083 10.5l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm0 4.7l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0z" />
    </svg>
  );

  return (
    <div className="w-full h-full">
      <div>
        <div className="h-screen w-full sticky top-0" key={"1"}>
          <div
            className="w-full h-screen bg-blue-100 border-t-2 border-SmoBlack z-40 grit"
            id="home"
          >
            <div className="flex sm:p-8 items-center justify-center lg:text-8xl md:text-4xl sm:text-3xl text-5xl w-full h-full">
              {" "}
              <div className="sm:w-5/6 w-full font-Ezcar  p-4 text-gray-800 flex flex-col relative">
                <div className="text-right lg:text-lg text-sm text-xs font-Abril text-gray-600 md:w-56 w-40 self-end absolute hidden sm:block">
                  I enjoy figuring out complex apps and putting the pieces until
                  a complete app is formed
                </div>{" "}
                <div className="absolute lg:bottom-10 -bottom-20 right-2 text-xl flex items-center font-bold justify-center animate-bounce  md:flex">
                  <p className="mr-2">Scroll Down</p>
                  <div className="rounded-full border-2 border-black ">
                    {" "}
                    {downArrow}
                  </div>
                </div>
                <div className="border-b border-t md:p-4 z-50  border-black">
                  <div> Hi,</div>
                  <div>I&apos;m Derin </div>
                  and im a frontend Engineer
                  <div className="text-sm text-gray-400">
                    Built by OluwasoromiDerin Kehinde Owoade, 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-full sticky top-0" key={"2"}>
          <div
            id="Projects"
            className="w-full h-screen  z-10 bg-white border-t-2 border-MikYellow"
          >
            {true ? <ProjectsPages></ProjectsPages> : <Projects></Projects>}
          </div>
        </div>
        <div className="h-screen w-full sticky top-0 " key={"3"}>
          <div className="w-full h-screen bg-white border-t-2 border-PineGreen">
            <div className="flex p-8 w-full  justify-center lg:text-7xl md:text-5xl text-4xl w-full h-full">
              {" "}
              <div className="w-5/6 font-Ezcar pt-8 hidden md:block">
                {" "}
                <div className="text-left w-fit text-gray-700 flex border-b">
                  STACK
                  <div>{StackIcon}</div>
                </div>
                <div className="text-right -mt-16 flex flex-col text-PineGreen">
                  {[
                    "REACT",
                    "TAILWIND",
                    "NEXTJS",
                    "JAVASCRIPT",
                    "NODEJS",
                    "TYPESCRIPT",
                    "CSS",
                    "MONGODB",
                  ].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, skewX: "20deg" }}
                      whileInView={{ opacity: 1, skewX: "0deg" }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: false }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="text-3xl flex flex-col items-center pt-8 font-Ezcar md:hidden">
                <div className="text-gray-500 pb-2">STACK</div>
                {[
                  "REACT",
                  "TAILWIND",
                  "NEXTJS",
                  "JAVASCRIPT",
                  "NODEJS",
                  "TYPESCRIPT",
                  "CSS",
                  "MONGODB",
                ].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, skewX: "20deg" }}
                    whileInView={{ opacity: 1, skewX: "0deg" }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="text-black"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
